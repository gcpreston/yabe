defmodule YabeWeb.OutsideSaleController do
  use YabeWeb, :controller

  alias Yabe.Listings
  alias Yabe.Listings.OutsideSale

  action_fallback YabeWeb.FallbackController

  def index(conn, _params) do
    outside_sales = Listings.list_outside_sales()
    render(conn, "index.json", outside_sales: outside_sales)
  end

  def create(conn, %{"outside_sale" => outside_sale_params}) do
    with {:ok, %OutsideSale{} = outside_sale} <- Listings.create_outside_sale(outside_sale_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.outside_sale_path(conn, :show, outside_sale))
      |> render("quantity_sold.json", item_id: outside_sale_params["item_id"])
    end
  end

  def show(conn, %{"id" => id}) do
    outside_sale = Listings.get_outside_sale!(id)
    render(conn, "show.json", outside_sale: outside_sale)
  end

  def show_quantity_sold(conn, %{"item_id" => item_id}) do
    render(conn, "quantity_sold.json", item_id: item_id)
  end

  def update(conn, %{"id" => id, "outside_sale" => outside_sale_params}) do
    outside_sale = Listings.get_outside_sale!(id)

    with {:ok, %OutsideSale{} = outside_sale} <- Listings.update_outside_sale(outside_sale, outside_sale_params) do
      render(conn, "show.json", outside_sale: outside_sale)
    end
  end

  def delete(conn, %{"id" => id}) do
    outside_sale = Listings.get_outside_sale!(id)

    with {:ok, %OutsideSale{}} <- Listings.delete_outside_sale(outside_sale) do
      send_resp(conn, :no_content, "")
    end
  end
end
