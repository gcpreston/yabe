defmodule YabeWeb.OutsideItemControllerTest do
  use YabeWeb.ConnCase

  import Yabe.ListingsFixtures

  alias Yabe.Listings.OutsideItem

  @create_attrs %{
    description: "some description",
    image_url: "some image_url",
    name: "some name",
    price: 42,
    seller: "some seller"
  }
  @update_attrs %{
    description: "some updated description",
    image_url: "some updated image_url",
    name: "some updated name",
    price: 43,
    seller: "some updated seller"
  }
  @invalid_attrs %{description: nil, image_url: nil, name: nil, price: nil, seller: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all outside_items", %{conn: conn} do
      conn = get(conn, Routes.outside_item_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create outside_item" do
    test "renders outside_item when data is valid", %{conn: conn} do
      conn = post(conn, Routes.outside_item_path(conn, :create), outside_item: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.outside_item_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "description" => "some description",
               "image_url" => "some image_url",
               "name" => "some name",
               "price" => 42,
               "seller" => "some seller"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.outside_item_path(conn, :create), outside_item: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update outside_item" do
    setup [:create_outside_item]

    test "renders outside_item when data is valid", %{conn: conn, outside_item: %OutsideItem{id: id} = outside_item} do
      conn = put(conn, Routes.outside_item_path(conn, :update, outside_item), outside_item: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.outside_item_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "description" => "some updated description",
               "image_url" => "some updated image_url",
               "name" => "some updated name",
               "price" => 43,
               "seller" => "some updated seller"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, outside_item: outside_item} do
      conn = put(conn, Routes.outside_item_path(conn, :update, outside_item), outside_item: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete outside_item" do
    setup [:create_outside_item]

    test "deletes chosen outside_item", %{conn: conn, outside_item: outside_item} do
      conn = delete(conn, Routes.outside_item_path(conn, :delete, outside_item))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.outside_item_path(conn, :show, outside_item))
      end
    end
  end

  defp create_outside_item(_) do
    outside_item = outside_item_fixture()
    %{outside_item: outside_item}
  end
end
