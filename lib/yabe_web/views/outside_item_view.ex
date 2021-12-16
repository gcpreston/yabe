defmodule YabeWeb.OutsideItemView do
  use YabeWeb, :view
  alias YabeWeb.OutsideItemView

  def render("index.json", %{outside_items: outside_items}) do
    %{data: render_many(outside_items, OutsideItemView, "outside_item.json")}
  end

  def render("show.json", %{outside_item: outside_item}) do
    %{data: render_one(outside_item, OutsideItemView, "outside_item.json")}
  end

  def render("outside_item.json", %{outside_item: outside_item}) do
    %{
      id: outside_item.id,
      description: outside_item.description,
      name: outside_item.name,
      price: outside_item.price,
      image_url: outside_item.image_url,
      seller: %{ email: outside_item.seller }
    }
  end
end
