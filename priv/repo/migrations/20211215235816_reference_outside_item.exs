defmodule Yabe.Repo.Migrations.ReferenceOutsideItem do
  use Ecto.Migration

  def change do
    alter table(:outside_sales) do
      modify :item_id, references(:outside_items, on_delete: :delete_all)
    end

    create_if_not_exists index(:outside_sales, [:item_id])
  end
end
