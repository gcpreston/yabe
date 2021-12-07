defmodule YabeWeb.PageController do
  use YabeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
