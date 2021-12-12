defmodule Yabe.ListingsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Yabe.Listings` context.
  """

  @doc """
  Generate a item.
  """
  def item_fixture(attrs \\ %{}) do
    {:ok, item} =
      attrs
      |> Enum.into(%{
        description: "some description",
        name: "some name",
        price: 42
      })
      |> Yabe.Listings.create_item()

    item
  end
end
