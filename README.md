# Cow Hut Admin With Auth

### Live Link: https://goru-hut-v1.vercel.app

# [Task Description](https://github.com/Apollo-Level2-Web-Dev/cow-hut-admin-with-auth/blob/main/README.md)

### Application Routes:

## Main part

### Auth (User)

- Route: https://goru-hut-v1.vercel.app/api/v1/auth/login (POST)
- Route: https://goru-hut-v1.vercel.app/api/v1/auth/signup (POST)
- Route: https://goru-hut-v1.vercel.app/api/v1/auth/refresh-token (POST)

### Auth (Admin)

- Route: https://goru-hut-v1.vercel.app/api/v1/admins/create-admin (POST)
- Route: https://goru-hut-v1.vercel.app/api/v1/admins/login (POST)

### User

- Route: https://goru-hut-v1.vercel.app/api/v1/users (GET) Include an id that is saved in your database
- Route: https://goru-hut-v1.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- Route: https://goru-hut-v1.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH) Include an id that is saved in your database
- Route: https://goru-hut-v1.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

#### Cows

- Route: https://goru-hut-v1.vercel.app/api/v1/cows (POST)
- Route: https://goru-hut-v1.vercel.app/api/v1/cows (GET)
- Route: https://goru-hut-v1.vercel.app/api/v1/cows/64a2d0b3b73573e34b24fb27 (Single GET) Include an id that is saved in your database
- Route: https://goru-hut-v1.vercel.app/api/v1/cows/64a2d0b3b73573e34b24fb27 (PATCH) Include an id that is saved in your database
- Route: https://goru-hut-v1.vercel.app/api/v1/cows/64a2d0b3b73573e34b24fb27 (DELETE) Include an id that is saved in your database

#### Orders

- Route: https://goru-hut-v1.vercel.app/api/v1/orders (POST)
- Route: https://goru-hut-v1.vercel.app/api/v1/orders (GET)

## Bonus Part

#### Admin

- Route: https://goru-hut-v1.vercel.app/api/v1/admins/create-admin (POST)

#### My Profile

- Route: https://goru-hut-v1.vercel.app/api/v1/users/my-profile (GET)
- Route: https://goru-hut-v1.vercel.app/api/v1/users/my-profile (PATCH)
  -- OPTIONALS --
- Route: https://goru-hut-v1.vercel.app/api/v1/admins/my-profile (GET)
- Route: https://goru-hut-v1.vercel.app/api/v1/admins/my-profile (PATCH)

#### Order:

- Route: https://goru-hut-v1.vercel.app/api/v1/orders/64a26e42a22dd6549180f1c7 (GET)

<hr/>

#### ALL APIs Description :

#### User

- [api/v1/users](https://goru-hut-v1.vercel.app/api/v1/users) (GET) → Can only be accessed by admin
- [api/v1/users/:id](https://goru-hut-v1.vercel.app/api/v1/users/64a1f82087ec1e0f39ffe350) (Single GET) → Can only be accessed by admin
- [api/v1/users/:id](https://goru-hut-v1.vercel.app/api/v1/users/64a1f82087ec1e0f39ffe350) (PATCH) → Can only be accessed by admin
- [api/v1/users/:id](https://goru-hut-v1.vercel.app/api/v1/users/64a1f82087ec1e0f39ffe350) (DELETE) → Can only be accessed by admin

#### Cows

- [api/v1/cows](https://goru-hut-v1.vercel.app/api/v1/cows) (POST) → Can only be accessed by seller
- [api/v1/cows](https://goru-hut-v1.vercel.app/api/v1/cows) (GET) → Can only be accessed by buyer,seller & admin
- [api/v1/cows/:id](https://goru-hut-v1.vercel.app/api/v1/cows/64a2d0b3b73573e34b24fb27) (Single GET) → Can only be accessed by buyer,seller & admin

- [api/v1/cows/:id](https://goru-hut-v1.vercel.app/api/v1/cows/64a2d0b3b73573e34b24fb27) (PATCH) → Can only be accessed by the seller of the cow
- [api/v1/cows/:id](https://goru-hut-v1.vercel.app/api/v1/cows/64a2d0b3b73573e34b24fb27) (DELETE) → Can only be accessed by the seller of the cow

#### Orders

- https://goru-hut-v1.vercel.app/api/v1/orders (POST) → Can only be accessed by the buyer
- https://goru-hut-v1.vercel.app/api/v1/orders (GET) → Can be accessed only by the admin, by the **`specific buyer`** of this order
  & by the **`specific seller`** of this order

## Bonus Part :

#### Update Profile Information (Must be dynamic update)

Route: [/api/v1/users/my-profile](https://goru-hut-v1.vercel.app/api/users/my-profile) (PATCH)

Request Headers: authorization: "Your access token"

## Get a Specific Order Route

Route: [api/v1/orders/:id](https://goru-hut-v1.vercel.app/api/v1/orders/64a26e42a22dd6549180f1c7) (GET)

Request Headers: authorization: "Your access token"

Request Param: order's \_id

#### Orders

- [api/v1/orders/:id](https://goru-hut-v1.vercel.app/api/v1/orders/64a26e42a22dd6549180f1c7) (GET) → Can be accessed only by the admin, by the **`specific buyer`** of this order
  & by the **`specific seller)`** of this order

#### My Profile

- [api/v1/users/my-profile](https://goru-hut-v1.vercel.app/api/v1/users/my-profile) (GET) → Can be accessed only by the **`specific user (buyer, seller)`** of the profile
- [api/v1/users/my-profile](https://goru-hut-v1.vercel.app/api/v1/users/my-profile) (PATCH) → Can be accessed only by the **`specific user (buyer, seller)`** of the profile
- [api/v1/admins/my-profile](https://goru-hut-v1.vercel.app/api/v1/admins/my-profile) (GET) → Can be accessed only by the admin of the profile (Optional Task)
- [api/v1/admins/my-profile](https://goru-hut-v1.vercel.app/api/v1/admins/my-profile) (PATCH) → Can be accessed only by the admin of the profile (Optional Task)
