defmodule Yabe.Repo.Migrations.CreateItems do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :name, :string
      add :description, :string
      add :price, :integer
      add :seller_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:items, [:seller_id])
  end
end
