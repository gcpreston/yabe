defmodule Yabe.Repo.Migrations.AddImageToItem do
  use Ecto.Migration

  def change do
    alter table("items") do
      add :image_url, :string
      modify :description, :text
    end
  end
end
