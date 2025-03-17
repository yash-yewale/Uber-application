# API Documentation

## Endpoint: `/users/register`

### Description:
This endpoint is used to register a new user. The user provides their first name, last name, email, password, and optional `socketId`. Upon successful registration, the user is stored in the database, and a JSON Web Token (JWT) is returned.

---

### Method:
**POST**

---

### Request Body:
The request body should be sent in JSON format and must include the following fields:

| Field        | Type   | Required | Description                                                                 |
|--------------|--------|----------|-----------------------------------------------------------------------------|
| `fullname`   | Object | Yes      | The user's full name, which contains the `firstname` and `lastname` fields. |
| `firstname`  | String | Yes      | The user's first name (minimum 2 characters, maximum 10 characters).        |
| `lastname`   | String | Yes      | The user's last name (minimum 2 characters, maximum 10 characters).         |
| `email`      | String | Yes      | The user's email address (must be a valid email).                           |
| `password`   | String | Yes      | The user's password (must be strong: at least 8 characters with uppercase, lowercase, numbers, and symbols). |
| `socketId`   | String | No       | An optional socket ID for real-time communication.                          |

---

### Response:
#### Success Response:
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "success": true,
    "token": "<jwt_token>",
    "message": "User registered successfully",
    "data": {
      "fullname": {
        "firstname": "<firstname>",
        "lastname": "<lastname>"
      },
      "email": "<email>",
      "password": "<hashed_password>",
      "socketId": "<socket_id>"
    }
  }









## Endpoint: `/user/login`

### Description
The `/user/login` endpoint is used to authenticate a user by verifying their credentials (email and password). Upon successful login, it generates a JWT token for the user.

---

### HTTP Method
`POST`

---

### Request URL



---

### Request Headers
- **Content-Type**: `application/json`

---

### Request Body
The body of the request should be a JSON object containing the following fields:

| Field      | Type     | Required | Description                               |
|------------|----------|----------|-------------------------------------------|
| `email`    | `string` | Yes      | The registered email of the user.         |
| `password` | `string` | Yes      | The password associated with the user.    |

**Example Request Body:**
```json
{
  "email": "user@example.com",
  "password": "StrongPassword@123"
}







