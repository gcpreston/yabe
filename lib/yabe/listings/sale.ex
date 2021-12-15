defmodule Yabe.Listings.Sale do
  use Ecto.Schema
  import Ecto.Changeset

  schema "sales" do
    field :quantity, :integer
    belongs_to :item, Yabe.Listings.Item
    belongs_to :buyer, Yabe.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(sale, attrs) do
    sale
    |> cast(attrs, [:quantity, :item_id, :buyer_id])
    |> cast_assoc(:item)
    |> cast_assoc(:buyer)
    |> validate_required([:quantity, :item_id, :buyer_id])
  end
end
