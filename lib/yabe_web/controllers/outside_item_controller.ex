defmodule YabeWeb.OutsideItemController do
  use YabeWeb, :controller

  alias Yabe.Listings
  alias Yabe.Listings.OutsideItem

  action_fallback YabeWeb.FallbackController

  def index(conn, _params) do
    outside_items = Listings.list_outside_items()
    render(conn, "index.json", outside_items: outside_items)
  end

  def create(conn, %{"outside_item" => outside_item_params}) do
    with {:ok, %OutsideItem{} = outside_item} <- Listings.create_outside_item_if_not_exists(outside_item_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.outside_item_path(conn, :show, outside_item))
      |> render("show.json", outside_item: outside_item)
    end
  end

  def show(conn, %{"id" => id}) do
    outside_item = Listings.get_outside_item!(id)
    render(conn, "show.json", outside_item: outside_item)
  end

  def update(conn, %{"id" => id, "outside_item" => outside_item_params}) do
    outside_item = Listings.get_outside_item!(id)

    with {:ok, %OutsideItem{} = outside_item} <- Listings.update_outside_item(outside_item, outside_item_params) do
      render(conn, "show.json", outside_item: outside_item)
    end
  end

  def delete(conn, %{"id" => id}) do
    outside_item = Listings.get_outside_item!(id)

    with {:ok, %OutsideItem{}} <- Listings.delete_outside_item(outside_item) do
      send_resp(conn, :no_content, "")
    end
  end
end
