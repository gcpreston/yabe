defmodule YabeWeb.SaleController do
  use YabeWeb, :controller

  alias Yabe.Listings
  alias Yabe.Listings.Sale

  action_fallback YabeWeb.FallbackController

  def index(conn, _params) do
    sales = Listings.list_sales()
    render(conn, "index.json", sales: sales)
  end

  def create(conn, %{"sale" => sale_params}) do
    with {:ok, %Sale{} = sale} <- Listings.create_sale(sale_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.sale_path(conn, :show, sale))
      |> render("show.json", sale: sale)
    end
  end

  def show(conn, %{"id" => id}) do
    sale = Listings.get_sale!(id)
    render(conn, "show.json", sale: sale)
  end

  def update(conn, %{"id" => id, "sale" => sale_params}) do
    sale = Listings.get_sale!(id)

    with {:ok, %Sale{} = sale} <- Listings.update_sale(sale, sale_params) do
      render(conn, "show.json", sale: sale)
    end
  end

  def delete(conn, %{"id" => id}) do
    sale = Listings.get_sale!(id)

    with {:ok, %Sale{}} <- Listings.delete_sale(sale) do
      send_resp(conn, :no_content, "")
    end
  end
end
