defmodule Yabe.ListingsTest do
  use Yabe.DataCase

  alias Yabe.Listings

  describe "items" do
    alias Yabe.Listings.Item

    import Yabe.ListingsFixtures

    @invalid_attrs %{description: nil, name: nil, price: nil}

    test "list_items/0 returns all items" do
      item = item_fixture()
      assert Listings.list_items() == [item]
    end

    test "get_item!/1 returns the item with given id" do
      item = item_fixture()
      assert Listings.get_item!(item.id) == item
    end

    test "create_item/1 with valid data creates a item" do
      valid_attrs = %{description: "some description", name: "some name", price: 42}

      assert {:ok, %Item{} = item} = Listings.create_item(valid_attrs)
      assert item.description == "some description"
      assert item.name == "some name"
      assert item.price == 42
    end

    test "create_item/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Listings.create_item(@invalid_attrs)
    end

    test "update_item/2 with valid data updates the item" do
      item = item_fixture()
      update_attrs = %{description: "some updated description", name: "some updated name", price: 43}

      assert {:ok, %Item{} = item} = Listings.update_item(item, update_attrs)
      assert item.description == "some updated description"
      assert item.name == "some updated name"
      assert item.price == 43
    end

    test "update_item/2 with invalid data returns error changeset" do
      item = item_fixture()
      assert {:error, %Ecto.Changeset{}} = Listings.update_item(item, @invalid_attrs)
      assert item == Listings.get_item!(item.id)
    end

    test "delete_item/1 deletes the item" do
      item = item_fixture()
      assert {:ok, %Item{}} = Listings.delete_item(item)
      assert_raise Ecto.NoResultsError, fn -> Listings.get_item!(item.id) end
    end

    test "change_item/1 returns a item changeset" do
      item = item_fixture()
      assert %Ecto.Changeset{} = Listings.change_item(item)
    end
  end

  describe "sales" do
    alias Yabe.Listings.Sale

    import Yabe.ListingsFixtures

    @invalid_attrs %{quantity: nil}

    test "list_sales/0 returns all sales" do
      sale = sale_fixture()
      assert Listings.list_sales() == [sale]
    end

    test "get_sale!/1 returns the sale with given id" do
      sale = sale_fixture()
      assert Listings.get_sale!(sale.id) == sale
    end

    test "create_sale/1 with valid data creates a sale" do
      valid_attrs = %{quantity: 42}

      assert {:ok, %Sale{} = sale} = Listings.create_sale(valid_attrs)
      assert sale.quantity == 42
    end

    test "create_sale/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Listings.create_sale(@invalid_attrs)
    end

    test "update_sale/2 with valid data updates the sale" do
      sale = sale_fixture()
      update_attrs = %{quantity: 43}

      assert {:ok, %Sale{} = sale} = Listings.update_sale(sale, update_attrs)
      assert sale.quantity == 43
    end

    test "update_sale/2 with invalid data returns error changeset" do
      sale = sale_fixture()
      assert {:error, %Ecto.Changeset{}} = Listings.update_sale(sale, @invalid_attrs)
      assert sale == Listings.get_sale!(sale.id)
    end

    test "delete_sale/1 deletes the sale" do
      sale = sale_fixture()
      assert {:ok, %Sale{}} = Listings.delete_sale(sale)
      assert_raise Ecto.NoResultsError, fn -> Listings.get_sale!(sale.id) end
    end

    test "change_sale/1 returns a sale changeset" do
      sale = sale_fixture()
      assert %Ecto.Changeset{} = Listings.change_sale(sale)
    end
  end
end
