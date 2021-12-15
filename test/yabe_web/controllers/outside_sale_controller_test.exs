defmodule YabeWeb.OutsideSaleControllerTest do
  use YabeWeb.ConnCase

  import Yabe.ListingsFixtures

  alias Yabe.Listings.OutsideSale

  @create_attrs %{

  }
  @update_attrs %{

  }
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all outside_sales", %{conn: conn} do
      conn = get(conn, Routes.outside_sale_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create outside_sale" do
    test "renders outside_sale when data is valid", %{conn: conn} do
      conn = post(conn, Routes.outside_sale_path(conn, :create), outside_sale: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.outside_sale_path(conn, :show, id))

      assert %{
               "id" => ^id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.outside_sale_path(conn, :create), outside_sale: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update outside_sale" do
    setup [:create_outside_sale]

    test "renders outside_sale when data is valid", %{conn: conn, outside_sale: %OutsideSale{id: id} = outside_sale} do
      conn = put(conn, Routes.outside_sale_path(conn, :update, outside_sale), outside_sale: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.outside_sale_path(conn, :show, id))

      assert %{
               "id" => ^id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, outside_sale: outside_sale} do
      conn = put(conn, Routes.outside_sale_path(conn, :update, outside_sale), outside_sale: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete outside_sale" do
    setup [:create_outside_sale]

    test "deletes chosen outside_sale", %{conn: conn, outside_sale: outside_sale} do
      conn = delete(conn, Routes.outside_sale_path(conn, :delete, outside_sale))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.outside_sale_path(conn, :show, outside_sale))
      end
    end
  end

  defp create_outside_sale(_) do
    outside_sale = outside_sale_fixture()
    %{outside_sale: outside_sale}
  end
end
