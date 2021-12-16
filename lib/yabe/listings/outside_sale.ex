defmodule Yabe.Listings.OutsideSale do
  use Ecto.Schema
  import Ecto.Changeset

  schema "outside_sales" do
    field :quantity, :integer
    belongs_to :item, Yabe.Listings.OutsideItem
    belongs_to :buyer, Yabe.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(outside_sale, attrs) do
    outside_sale
    |> cast(attrs, [:quantity, :item_id, :buyer_id])
    |> cast_assoc(:item)
    |> cast_assoc(:buyer)
    |> validate_required([:quantity, :item_id, :buyer_id])
  end
end
