defmodule Yabe.Accounts.UserRole do
  use Ecto.Schema
  import Ecto.Changeset

  schema "user_roles" do
    belongs_to :user, Yabe.Accounts.User
    belongs_to :role, Yabe.Accounts.Role

    timestamps()
  end

  @doc false
  def changeset(user_role, attrs) do
    user_role
    |> cast(attrs, [])
    |> validate_required([])
  end
end
