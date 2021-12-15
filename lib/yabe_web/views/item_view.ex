defmodule YabeWeb.ItemView do
  use YabeWeb, :view
  alias YabeWeb.ItemView
  alias YabeWeb.UserView

  def render("index.json", %{items: items}) do
    %{data: render_many(items, ItemView, "item.json")}
  end

  def render("show.json", %{item: item}) do
    %{data: render_one(item, ItemView, "item.json")}
  end

  def render("item.json", %{item: item}) do
    item = Yabe.Repo.preload(item, :seller)

    %{
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image_url: item.image_url,
      seller: render_one(item.seller, UserView, "user.json"),
      quantity_sold: Yabe.Listings.get_quantity_sold(item)
    }
  end
end
