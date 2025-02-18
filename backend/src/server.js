import app from "./app.js";

const PORT = process.env.PORT;
if (!PORT) console.error("❌ Port is not specified in .env file");

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});