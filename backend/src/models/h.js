const products = [
  ...Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: [
      "Men's Casual Shirt",
      "Men's Formal Shirt",
      "Men's Slim Fit Jeans",
      "Men's Chinos",
      "Men's Sneakers",
      "Men's Leather Wallet",
      "Men's Sports Watch",
      "Men's Sunglasses",
      "Men's Hoodie",
      "Men's Bomber Jacket",
    ][i % 10],
    description: `High-quality men's fashion item: ${
      [
        "Shirt",
        "Jeans",
        "Chinos",
        "Shoes",
        "Wallet",
        "Watch",
        "Sunglasses",
        "Hoodie",
        "Jacket",
      ][i % 9]
    }. Comfortable and stylish for everyday wear.`,
    price: Math.floor(Math.random() * 3000) + 800,
    discountPrice: Math.floor(Math.random() * 2500) + 700,
    category: ["T-shirt", "Pants", "Accessories"][
      Math.floor(Math.random() * 3)
    ],
    images: [
      `https://example.com/images/mens-product${i + 1}-front.jpg`,
      `https://example.com/images/mens-product${i + 1}-back.jpg`,
    ],
    stock: Math.floor(Math.random() * 100) + 10,
    ratings: (Math.random() * 2 + 3).toFixed(1),
    reviews: Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
      (_, j) => ({
        user: `User ${j + 1}`,
        comment: `Review ${j + 1} for men's product ${i + 1}.`,
        rating: Math.floor(Math.random() * 2) + 4,
      })
    ),
    sizes: ["S", "M", "L", "XL", "XXL"].slice(
      0,
      Math.floor(Math.random() * 5) + 1
    ),
    colors: ["Black", "White", "Blue", "Red", "Gray"].slice(
      0,
      Math.floor(Math.random() * 5) + 1
    ),
    material: ["Cotton", "Denim", "Leather", "Polyester", "Synthetic"][
      Math.floor(Math.random() * 5)
    ],
  })),
];

console.log(products);







{
  "categories": [
    { "id": 1, "name": "T-Shirts" },
    { "id": 2, "name": "Shirts" },
    { "id": 3, "name": "Jeans" },
    { "id": 4, "name": "Trousers" },
    { "id": 5, "name": "Jackets" },
    { "id": 6, "name": "Sweaters" },
    { "id": 7, "name": "Shorts" },
    { "id": 8, "name": "Shoes" },
    { "id": 9, "name": "Accessories" }
  ],
  "products": [
    {
      "id": 101,
      "name": "Basic Cotton T-Shirt",
      "category_id": 1,
      "price": 599,
      "discount": 10,
      "stock": 50,
      "brand": "Brand A",
      "size": ["S", "M", "L", "XL"],
      "color": ["Black", "White", "Blue"],
      "description": "A high-quality cotton t-shirt for daily wear.",
      "images": ["tshirt1.jpg", "tshirt2.jpg"],
      "ratings": 4.5
    },
    {
      "id": 102,
      "name": "Slim Fit Denim Jeans",
      "category_id": 3,
      "price": 1499,
      "discount": 15,
      "stock": 40,
      "brand": "Brand B",
      "size": ["30", "32", "34", "36"],
      "color": ["Blue", "Black"],
      "description": "Stylish slim fit jeans with a comfortable stretch.",
      "images": ["jeans1.jpg", "jeans2.jpg"],
      "ratings": 4.7
    },
    {
      "id": 103,
      "name": "Casual Checkered Shirt",
      "category_id": 2,
      "price": 1299,
      "discount": 12,
      "stock": 30,
      "brand": "Brand C",
      "size": ["M", "L", "XL"],
      "color": ["Red", "Green", "Blue"],
      "description": "A trendy checkered shirt for casual occasions.",
      "images": ["shirt1.jpg", "shirt2.jpg"],
      "ratings": 4.6
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "password": "hashed_password",
      "address": "123 Street, City, Country",
      "phone": "9876543210",
      "orders": [201]
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com",
      "password": "hashed_password",
      "address": "456 Street, City, Country",
      "phone": "8765432109",
      "orders": [202]
    }
  ],
  "orders": [
    {
      "id": 201,
      "user_id": 1,
      "products": [
        { "product_id": 101, "quantity": 2 },
        { "product_id": 102, "quantity": 1 }
      ],
      "total_amount": 2698,
      "status": "Delivered",
      "payment_method": "Credit Card",
      "order_date": "2025-03-03"
    },
    {
      "id": 202,
      "user_id": 2,
      "products": [
        { "product_id": 103, "quantity": 1 }
      ],
      "total_amount": 1299,
      "status": "Shipped",
      "payment_method": "Cash on Delivery",
      "order_date": "2025-03-02"
    }
  ],
  "reviews": [
    {
      "id": 1,
      "product_id": 101,
      "user_id": 1,
      "rating": 5,
      "comment": "Great quality and comfortable!"
    },
    {
      "id": 2,
      "product_id": 102,
      "user_id": 2,
      "rating": 4,
      "comment": "Fits well but slightly tight."
    }
  ]
}
