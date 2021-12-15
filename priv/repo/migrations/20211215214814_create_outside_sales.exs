defmodule Yabe.Repo.Migrations.CreateOutsideSales do
  use Ecto.Migration

  def change do
    create table(:outside_sales) do
      add :quantity, :integer
      add :item_id, :integer
      add :buyer_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:outside_sales, [:buyer_id])
  end
end
