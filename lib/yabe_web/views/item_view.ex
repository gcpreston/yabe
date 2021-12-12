defmodule YabeWeb.ItemView do
  use YabeWeb, :view
  alias YabeWeb.ItemView

  def render("index.json", %{items: items}) do
    %{data: render_many(items, ItemView, "item.json")}
  end

  def render("show.json", %{item: item}) do
    %{data: render_one(item, ItemView, "item.json")}
  end

  def render("item.json", %{item: item}) do
    %{
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      seller_id: item.seller_id,
      image_url: item.image_url
    }
  end
end
