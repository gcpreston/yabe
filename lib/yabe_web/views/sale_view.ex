defmodule YabeWeb.SaleView do
  use YabeWeb, :view
  alias YabeWeb.SaleView

  def render("index.json", %{sales: sales}) do
    %{data: render_many(sales, SaleView, "sale.json")}
  end

  def render("show.json", %{sale: sale}) do
    %{data: render_one(sale, SaleView, "sale.json")}
  end

  def render("sale.json", %{sale: sale}) do
    %{
      id: sale.id,
      quantity: sale.quantity
    }
  end
end
