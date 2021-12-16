defmodule Yabe.Listings do
  @moduledoc """
  The Listings context.
  """

  import Ecto.Query, warn: false
  alias Yabe.Repo

  alias Yabe.Listings.{Item, Sale, OutsideSale}
  alias Yabe.Accounts.User

  @doc """
  Returns the list of items.

  ## Examples

      iex> list_items()
      [%Item{}, ...]

  """
  def list_items do
    Repo.all(Item)
  end

  @doc """
  Gets a single item.

  Raises `Ecto.NoResultsError` if the Item does not exist.

  ## Examples

      iex> get_item!(123)
      %Item{}

      iex> get_item!(456)
      ** (Ecto.NoResultsError)

  """
  def get_item!(id), do: Repo.get!(Item, id)

  @doc """
  Creates a item.

  ## Examples

      iex> create_item(%{field: value})
      {:ok, %Item{}}

      iex> create_item(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_item(attrs \\ %{}) do
    %Item{}
    |> Item.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a item.

  ## Examples

      iex> update_item(item, %{field: new_value})
      {:ok, %Item{}}

      iex> update_item(item, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_item(%Item{} = item, attrs) do
    item
    |> Item.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a item.

  ## Examples

      iex> delete_item(item)
      {:ok, %Item{}}

      iex> delete_item(item)
      {:error, %Ecto.Changeset{}}

  """
  def delete_item(%Item{} = item) do
    Repo.delete(item)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking item changes.

  ## Examples

      iex> change_item(item)
      %Ecto.Changeset{data: %Item{}}

  """
  def change_item(%Item{} = item, attrs \\ %{}) do
    Item.changeset(item, attrs)
  end

  @doc """
  Returns the list of sales.

  ## Examples

      iex> list_sales()
      [%Sale{}, ...]

  """
  def list_sales do
    Repo.all(Sale)
  end

  def list_sales_of_item(%Item{} = item) do
    query =
      from s in Sale,
        where: s.item_id == ^item.id

    Repo.all(query)
  end

  @doc """
  Return the sales where the user is the buyer.
  """
  def list_purchases_of_user(%User{} = user) do
    query =
      from s in Sale,
        where: s.buyer_id == ^user.id

    Repo.all(query)
  end

  def list_outside_purchases_of_user(%User{} = user) do
    query =
      from o in OutsideSale,
        where: o.buyer_id == ^user.id

    Repo.all(query)
  end

  @doc """
  Return the sales where the user is the seller.
  """
  def list_sales_of_user(%User{} = user) do
    query =
      from s in Sale,
        join: i in assoc(s, :item),
        where: i.seller_id == ^user.id

    Repo.all(query)
  end

  @doc """
  Gets a single sale.

  Raises `Ecto.NoResultsError` if the Sale does not exist.

  ## Examples

      iex> get_sale!(123)
      %Sale{}

      iex> get_sale!(456)
      ** (Ecto.NoResultsError)

  """
  def get_sale!(id), do: Repo.get!(Sale, id)

  @doc """
  Gets a single sale without raising.

  ## Examples

      iex> get_sale(123)
      {:ok, %Sale{}}

      iex> get_sale(456)
      {:error, :not_found}
  """
  def get_sale(id) do
    if sale = Repo.get(Sale, id) do
      {:ok, sale}
    else
      {:error, :not_found}
    end
  end

  @doc """
  Get the total of quantities of sales for an item.

  ## Examples

      iex> get_quantity_sold(some_item_with_sales)
      5

      iex> get_quantity_sold(some_item_without_sales)
      0
  """
  def get_quantity_sold(%Item{} = item) do
    query =
      from s in Sale,
        where: s.item_id == ^item.id,
        select: sum(s.quantity)

    Repo.one(query) || 0
  end

  @doc """
  Creates a sale.

  ## Examples

      iex> create_sale(%{field: value})
      {:ok, %Sale{}}

      iex> create_sale(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_sale(attrs \\ %{}) do
    %Sale{}
    |> Sale.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a sale.

  ## Examples

      iex> update_sale(sale, %{field: new_value})
      {:ok, %Sale{}}

      iex> update_sale(sale, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_sale(%Sale{} = sale, attrs) do
    sale
    |> Sale.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a sale.

  ## Examples

      iex> delete_sale(sale)
      {:ok, %Sale{}}

      iex> delete_sale(sale)
      {:error, %Ecto.Changeset{}}

  """
  def delete_sale(%Sale{} = sale) do
    Repo.delete(sale)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking sale changes.

  ## Examples

      iex> change_sale(sale)
      %Ecto.Changeset{data: %Sale{}}

  """
  def change_sale(%Sale{} = sale, attrs \\ %{}) do
    Sale.changeset(sale, attrs)
  end

  @doc """
  Returns the list of outside_sales.

  ## Examples

      iex> list_outside_sales()
      [%OutsideSale{}, ...]

  """
  def list_outside_sales do
    Repo.all(OutsideSale)
  end

  @doc """
  Gets a single outside_sale.

  Raises `Ecto.NoResultsError` if the Outside sale does not exist.

  ## Examples

      iex> get_outside_sale!(123)
      %OutsideSale{}

      iex> get_outside_sale!(456)
      ** (Ecto.NoResultsError)

  """
  def get_outside_sale!(id), do: Repo.get!(OutsideSale, id)


  @doc """
  Get the total of quantities of sales for an outside item, by ID.

  ## Examples

      iex> get_outside_quantity_sold(123)
      5

      iex> get_outside_quantity_sold(456)
      0
  """
  def get_outside_quantity_sold(item_id) do
    query =
      from s in OutsideSale,
        where: s.item_id == ^item_id,
        select: sum(s.quantity)

    Repo.one(query) || 0
  end

  @doc """
  Creates a outside_sale.

  ## Examples

      iex> create_outside_sale(%{field: value})
      {:ok, %OutsideSale{}}

      iex> create_outside_sale(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_outside_sale(attrs \\ %{}) do
    %OutsideSale{}
    |> OutsideSale.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a outside_sale.

  ## Examples

      iex> update_outside_sale(outside_sale, %{field: new_value})
      {:ok, %OutsideSale{}}

      iex> update_outside_sale(outside_sale, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_outside_sale(%OutsideSale{} = outside_sale, attrs) do
    outside_sale
    |> OutsideSale.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a outside_sale.

  ## Examples

      iex> delete_outside_sale(outside_sale)
      {:ok, %OutsideSale{}}

      iex> delete_outside_sale(outside_sale)
      {:error, %Ecto.Changeset{}}

  """
  def delete_outside_sale(%OutsideSale{} = outside_sale) do
    Repo.delete(outside_sale)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking outside_sale changes.

  ## Examples

      iex> change_outside_sale(outside_sale)
      %Ecto.Changeset{data: %OutsideSale{}}

  """
  def change_outside_sale(%OutsideSale{} = outside_sale, attrs \\ %{}) do
    OutsideSale.changeset(outside_sale, attrs)
  end

  alias Yabe.Listings.OutsideItem

  @doc """
  Returns the list of outside_items.

  ## Examples

      iex> list_outside_items()
      [%OutsideItem{}, ...]

  """
  def list_outside_items do
    Repo.all(OutsideItem)
  end

  @doc """
  Gets a single outside_item.

  Raises `Ecto.NoResultsError` if the Outside item does not exist.

  ## Examples

      iex> get_outside_item!(123)
      %OutsideItem{}

      iex> get_outside_item!(456)
      ** (Ecto.NoResultsError)

  """
  def get_outside_item!(id), do: Repo.get!(OutsideItem, id)

  @doc """
  Creates a outside_item.

  ## Examples

      iex> create_outside_item(%{field: value})
      {:ok, %OutsideItem{}}

      iex> create_outside_item(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_outside_item(attrs \\ %{}) do
    %OutsideItem{}
    |> OutsideItem.changeset(attrs)
    |> Repo.insert()
  end

  def create_outside_item_if_not_exists(attrs \\ %{}) do
    if Repo.exists?(from o in OutsideItem, where: o.id == ^attrs["id"]) do
      {:ok, get_outside_item!(attrs["id"])}
    else
      %OutsideItem{}
      |> OutsideItem.changeset(attrs)
      |> Repo.insert()
    end
  end

  @doc """
  Updates a outside_item.

  ## Examples

      iex> update_outside_item(outside_item, %{field: new_value})
      {:ok, %OutsideItem{}}

      iex> update_outside_item(outside_item, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_outside_item(%OutsideItem{} = outside_item, attrs) do
    outside_item
    |> OutsideItem.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a outside_item.

  ## Examples

      iex> delete_outside_item(outside_item)
      {:ok, %OutsideItem{}}

      iex> delete_outside_item(outside_item)
      {:error, %Ecto.Changeset{}}

  """
  def delete_outside_item(%OutsideItem{} = outside_item) do
    Repo.delete(outside_item)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking outside_item changes.

  ## Examples

      iex> change_outside_item(outside_item)
      %Ecto.Changeset{data: %OutsideItem{}}

  """
  def change_outside_item(%OutsideItem{} = outside_item, attrs \\ %{}) do
    OutsideItem.changeset(outside_item, attrs)
  end
end
