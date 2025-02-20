// Order Routes (/api/orders)
// POST / – Place an order
// GET /user-orders – Get orders of a logged-in user
// GET /:id – Get order details
// PUT /:id/status – Update order status (Admin only)

router.post("/order/create", verifyToken, createOrder); // Place an order
router.get("/order/:id", verifyToken, getOrderById); // Get order details
router.get("/orders", verifyToken, getAllOrders); // Get all orders (for admin/shop owner)
router.put("/order/update/:id", verifyToken, updateOrderStatus); // Update order status
