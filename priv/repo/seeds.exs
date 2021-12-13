# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Yabe.Repo.insert!(%Yabe.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

# NOTE: Only run this if you haven't had data in your DB yet
# To run, change false to true

if false do
  alias Yabe.Repo
  alias Yabe.Accounts
  alias Yabe.Listings

  Repo.delete_all(Accounts.User)
  {:ok, user1} = Accounts.register_user(%{email: "testuser1@example.com", password: "password1234", role: "buyer"})
  {:ok, user2} = Accounts.register_user(%{email: "testuser2@example.com", password: "password1234", role: "seller"})

  Repo.delete_all(Item)
  {:ok, _item} = Listings.create_item(%{
    name: "iphone 22",
    description: "some cool thing",
    price: 12345,
    image_url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
    seller_id: user2.id
  })
end
