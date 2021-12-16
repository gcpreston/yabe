defmodule Yabe.Repo.Migrations.CreateOutsideItems do
  use Ecto.Migration

  def change do
    create table(:outside_items) do
      add :description, :text
      add :name, :string
      add :price, :integer
      add :image_url, :string, size: 512
      add :seller, :string

      timestamps()
    end

    alter table(:outside_items) do
      remove :id
      add :id, :integer, primary_key: true
    end
  end
end
