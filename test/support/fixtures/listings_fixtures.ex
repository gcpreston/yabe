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

  @doc """
  Generate a sale.
  """
  def sale_fixture(attrs \\ %{}) do
    {:ok, sale} =
      attrs
      |> Enum.into(%{
        quantity: 42
      })
      |> Yabe.Listings.create_sale()

    sale
  end

  @doc """
  Generate a outside_sale.
  """
  def outside_sale_fixture(attrs \\ %{}) do
    {:ok, outside_sale} =
      attrs
      |> Enum.into(%{

      })
      |> Yabe.Listings.create_outside_sale()

    outside_sale
  end
end
