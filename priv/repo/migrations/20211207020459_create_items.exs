defmodule Yabe.Repo.Migrations.CreateItems do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :name, :string
      add :description, :text
      add :price, :integer
      add :image_url, :string, size: 512
      add :seller_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:items, [:seller_id])
  end
end
