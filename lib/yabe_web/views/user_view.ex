defmodule YabeWeb.UserView do
  use YabeWeb, :view
  alias YabeWeb.UserView

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    user = Yabe.Repo.preload(user, :roles)
    [role | rest] = user.roles

    %{
      id: user.id,
      email: user.email,
      role: role.name
    }
  end
end
