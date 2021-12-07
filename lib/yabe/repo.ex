defmodule Yabe.Repo do
  use Ecto.Repo,
    otp_app: :yabe,
    adapter: Ecto.Adapters.Postgres
end
