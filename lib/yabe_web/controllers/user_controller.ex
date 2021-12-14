defmodule YabeWeb.UserController do
  use YabeWeb, :controller

  alias Yabe.Accounts

  action_fallback YabeWeb.FallbackController

  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end
end
