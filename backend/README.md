## API Endpoints

### Authentication Routes

- **POST** `/api/v1/auth/register`

  - **Request Body**:
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```

- **POST** `/api/v1/auth/login`

  - **Request Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "accessToken": "string",
      "refreshToken": "string",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```

- **POST** `/api/v1/auth/logout`

  - **Request Body**: (No body required)
  - **Response**:
    ```json
    {
      "message": "User logged out successfully"
    }
    ```

- **POST** `/api/v1/auth/profile`
  - **Request Headers**:
    - `Authorization: Bearer <accessToken>`
  - **Response**:
    ```json
    {
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```

### Product Routes

- **GET** `/api/v1/products`

  - **Response**:
    ```json
    [
      {
        "id": "string",
        "name": "string",
        "price": "number",
        "description": "string",
        "imageUrl": "string"
      }
    ]
    ```

- **GET** `/api/v1/products/:id`

  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "price": "number",
      "description": "string",
      "imageUrl": "string"
    }
    ```

- **POST** `/api/v1/products`

  - **Request Body**:
    ```json
    {
      "name": "string",
      "price": "number",
      "description": "string",
      "imageUrl": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Product added successfully",
      "product": {
        "id": "string",
        "name": "string",
        "price": "number",
        "description": "string",
        "imageUrl": "string"
      }
    }
    ```

- **PUT** `/api/v1/products/:id`

  - **Request Body**:
    ```json
    {
      "name": "string",
      "price": "number",
      "description": "string",
      "imageUrl": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Product updated successfully",
      "product": {
        "id": "string",
        "name": "string",
        "price": "number",
        "description": "string",
        "imageUrl": "string"
      }
    }
    ```

- **DELETE** `/api/v1/products/:id`
  - **Response**:
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```

### Cart Routes

- **GET** `/api/v1/cart/:userId`

  - **Response**:
    ```json
    {
      "items": [
        {
          "productId": "string",
          "quantity": "number"
        }
      ],
      "total": "number"
    }
    ```

- **POST** `/api/v1/cart/add`

  - **Request Body**:
    ```json
    {
      "userId": "string",
      "productId": "string",
      "quantity": "number"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Item added to cart successfully"
    }
    ```

- **PUT** `/api/v1/cart/update`

  - **Request Body**:
    ```json
    {
      "userId": "string",
      "productId": "string",
      "quantity": "number"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Cart updated successfully"
    }
    ```

- **DELETE** `/api/v1/cart/remove`
  - **Request Body**:
    ```json
    {
      "userId": "string",
      "productId": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Item removed from cart successfully"
    }
    ```

### Order Routes

- **POST** `/api/v1/orders`

  - **Request Body**:
    ```json
    {
      "userId": "string",
      "items": [
        {
          "productId": "string",
          "quantity": "number"
        }
      ],
      "total": "number"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Order placed successfully",
      "order": {
        "id": "string",
        "userId": "string",
        "items": [...],
        "total": "number",
        "status": "string"
      }
    }
    ```

- **GET** `/api/v1/orders/user-orders`

  - **Request Headers**:
    - `Authorization: Bearer <accessToken>`
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "userId": "string",
        "items": [...],
        "total": "number",
        "status": "string"
      }
    ]
    ```

- **GET** `/api/v1/orders/:id`

  - **Response**:
    ```json
    {
      "id": "string",
      "userId": "string",
      "items": [...],
      "total": "number",
      "status": "string"
    }
    ```

- **PUT** `/api/v1/orders/:id/status`
  - **Request Body**:
    ```json
    {
      "status": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Order status updated successfully"
    }
    ```

### Payment Routes

- **POST** `/api/v1/payments/pay`

  - **Request Body**:
    ```json
    {
      "orderId": "string",
      "paymentMethod": "string",
      "amount": "number"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Payment processed successfully",
      "paymentId": "string"
    }
    ```

- **GET** `/api/v1/payments/status/:orderId`
  - **Response**:
    ```json
    {
      "orderId": "string",
      "status": "string",
      "amount": "number"
    }
    ```
