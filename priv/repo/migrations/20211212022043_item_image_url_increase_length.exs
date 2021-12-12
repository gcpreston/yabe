defmodule Yabe.Repo.Migrations.ItemImageUrlIncreaseLength do
  use Ecto.Migration

  def change do
    alter table("items") do
      modify :image_url, :string, size: 512
    end
  end
end
