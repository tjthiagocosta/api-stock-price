import { Router } from "express";
export const router = Router();
import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
});
await client.connect();
// READ
router.get("/:ticker", async (req, res) => {
  const stock = await client.json.get(req.params.ticker);
  res.send(stock);
});
