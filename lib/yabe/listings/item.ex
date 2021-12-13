defmodule Yabe.Listings.Item do
  use Ecto.Schema
  import Ecto.Changeset

  schema "items" do
    field :description, :string
    field :name, :string
    field :price, :integer
    field :image_url, :string

    # NOTE: No validation if user is a seller
    belongs_to :seller, Yabe.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:name, :description, :price])
    |> validate_required([:name, :description, :price])
  end
end
