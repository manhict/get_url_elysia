import express from "express";
import { handler } from "./elysia-handler"; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng handler Elysia cho các route
app.all("*", async (req, res) => {
  const result = await handler(req);
  res.status(result.message).json(result);
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});