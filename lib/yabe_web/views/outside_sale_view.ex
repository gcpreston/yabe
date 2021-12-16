defmodule YabeWeb.OutsideSaleView do
  use YabeWeb, :view
  alias YabeWeb.OutsideSaleView

  alias Yabe.Listings

  def render("index.json", %{outside_sales: outside_sales}) do
    %{data: render_many(outside_sales, OutsideSaleView, "outside_sale.json")}
  end

  def render("show.json", %{outside_sale: outside_sale}) do
    %{data: render_one(outside_sale, OutsideSaleView, "outside_sale.json")}
  end

  def render("quantity_sold.json", %{item_id: item_id}) do
    %{data: %{quantity_sold: Listings.get_outside_quantity_sold(item_id)}}
  end

  def render("outside_sale.json", %{outside_sale: outside_sale}) do
    outside_sale = Yabe.Repo.preload(outside_sale, [:item, :buyer])
    %{
      id: outside_sale.id,
      quantity: outside_sale.quantity,
      item: render_one(outside_sale.item, YabeWeb.OutsideItemView, "outside_item.json"),
      buyer: render_one(outside_sale.buyer, YabeWeb.UserView, "user.json")
    }
  end
end
