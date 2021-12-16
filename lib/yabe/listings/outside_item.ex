defmodule Yabe.Listings.OutsideItem do
  use Ecto.Schema
  import Ecto.Changeset

  schema "outside_items" do
    field :description, :string
    field :image_url, :string
    field :name, :string
    field :price, :integer
    field :seller, :string

    timestamps()
  end

  @doc false
  def changeset(outside_item, attrs) do
    outside_item
    |> cast(attrs, [:id, :description, :name, :price, :image_url, :seller])
    |> validate_required([:id, :description, :name, :price, :image_url, :seller])
  end
end
