defmodule Yabe.Repo.Migrations.CreateSales do
  use Ecto.Migration

  def change do
    create table(:sales) do
      add :quantity, :integer
      add :item_id, references(:items, on_delete: :delete_all)
      add :buyer_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:sales, [:item_id])
    create index(:sales, [:buyer_id])
  end
end
