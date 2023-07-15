#### Goodreaders Book catelog Express Server

#### API URL : https://goodreaders-api.vercel.app/api/v1

#### FRONTEND URL : https://goodreaders.vercel.app/api/v1

## [POSTMAN DOCUMENTATION](https://documenter.getpostman.com/view/15074292/2s946fdsdf)

# Authentication

- [POST SIGN UP] (https://goodreaders-api.vercel.app/api/v1/auth/signup)

      {
      "password": "hasan123",
      "fullName": "Hasan Ali",
      "email": "hasan@gmail.com"
      }

- [POST LOGIN user] (https://goodreaders-api.vercel.app/api/v1/auth/login)
  {
  "password": "ridwan123",
  "email": "ridwan@gmail.com"
  }

- [POST refresh token] (https://goodreaders-api.vercel.app/api/v1/auth/refresh-token)

# Books

- [GET all books] (https://goodreaders-api.vercel.app/api/v1/book?searchTerm=Dr)

![Headers](./.ss/all_books_header.png)

- [GET sigle book] (https://goodreaders-api.vercel.app/api/v1/book/64b2fcb08e4a4d3ea5c02d6f)

- [DELETE delete book] (https://goodreaders-api.vercel.app/api/v1/book/64b318ecaaeaf90075c2fa2a)

![HEADERs](./.ss/auth_header.png)

- [PATCH update book] (https://goodreaders-api.vercel.app/api/v1/book/64b2f279e1ca0a499e9f769a)

      	{
      	"title": "Chemistry Test Book"
      	}

  ![HEADERs](./.ss/auth_header.png)

- [POST create book] (https://goodreaders-api.vercel.app/api/v1/book)

      	{
      		"title": "Chemistry Test Book",
      		"author": "Ridwan Alam",
      		"genre": "education",
      		"publication": "20-12-2020",
      		"addedBy": "64b2f323e1ca0a499e9f769e"
      	}

  ![HEADERs](./.ss/auth_header.png)

  - [POST add review] (https://goodreaders-api.vercel.app/api/v1/review)

        {
        "review": "Nice Book",
        "bookId": "64b2f390e1ca0a499e9f76a2",
        "reviewerId": "64b2e8e70b3e12782cf339bc"
        }

  ![HEADERs](./.ss/auth_header.png)

  - [GET reviews] (https://goodreaders-api.vercel.app/api/v1/review/64b2f390e1ca0a499e9f76a2)

# Wishlist (BONUS PART):

- [POST add wishlist] (https://goodreaders-api.vercel.app/api/v1/wishlist)

      		{
      			"bookId": "64b2f2f3e1ca0a499e9f769c",
      			"userId": "64b2e8e70b3e12782cf339bc"
      		}

  ![HEADERs](./.ss/auth_header.png)

- [get wishlists] (https://goodreaders-api.vercel.app/api/v1/wishlist/)

  ![HEADERs](./.ss/auth_header.png)

- [Delete from watch list Copy] (https://goodreaders-api.vercel.app/api/v1/wishlist/64b310946c9cc223b303ac99)

  ![HEADERs](./.ss/auth_header.png)

# Reading List (BONUS PART):

- [POST add ReadingList] (https://goodreaders-api.vercel.app/api/v1/reading)

      		{
      			"bookId": "64b2f2f3e1ca0a499e9f769c",
      			"userId": "64b2e8e70b3e12782cf339bc"
      		}

  ![HEADERs](./.ss/auth_header.png)

- [get reading list] (https://goodreaders-api.vercel.app/api/v1/reading/)

  ![HEADERs](./.ss/auth_header.png)

- [Delete from reading list Copy] (https://goodreaders-api.vercel.app/api/v1/reading/64b310946c9cc223b303ac99)

  ![HEADERs](./.ss/auth_header.png)
