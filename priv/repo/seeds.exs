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
  {:ok, buyer1} = Accounts.register_user(%{email: "testbuyer1@example.com", password: "password1234", role: "buyer"})
  {:ok, buyer2} = Accounts.register_user(%{email: "testbuyer2@example.com", password: "password1234", role: "buyer"})
  {:ok, seller1} = Accounts.register_user(%{email: "testseller1@example.com", password: "password1234", role: "seller"})
  {:ok, seller1} = Accounts.register_user(%{email: "testseller2@example.com", password: "password1234", role: "seller"})

  Repo.delete_all(Listings.Item)
  {:ok, _item} = Listings.create_item(%{
    name: "iPhone 22",
    description: "some cool thing",
    price: 12345,
    image_url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
    seller_id: user2.id
  })
  {:ok, _item} = Listings.create_item(%{
    name: "Toyota Camry",
    description: "Used 2005 Toyota camry with 5000000 miles.",
    price: 1550000,
    image_url: "https://www.carspecs.us/photos/99d40350b9ef703ce76b469bc3b6b5615ed19ab0-2000.jpg",
    seller_id: user2.id
  })
  {:ok, _item} = Listings.create_item(%{
    name: "My other Toyota Camry",
    description: "Used 2005 Toyota camry with 6000000 miles.",
    price: 1450032,
    image_url: "https://www.carspecs.us/photos/99d40350b9ef703ce76b469bc3b6b5615ed19ab0-2000.jpg",
    seller_id: user2.id
  })
  {:ok, _item} = Listings.create_item(%{
    name: "Nintendo Switch",
    description: "new oled nintendo switch. I need more text for a long description so here is some more text.",
    price: 30000,
    image_url: "https://jamonline.ph/wp-content/uploads/2021/07/Nintendo-Switch-OLED-Philippines-scaled.jpg",
    seller_id: seller1.id
  })
  {:ok, _item} = Listings.create_item(%{
    name: "Samsung Smart TV",
    description: "Used TV",
    price: 19999,
    image_url: "http://www.bhphotovideo.com/images/images2000x2000/samsung_un60fh6200fxza_un_60fh6200f_60_smart_full_1008106.jpg",
    seller_id: seller1.id
  })
end
