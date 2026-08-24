import express from "express";
import { client } from "@repo/db/client";

const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  const users = await client.user.findMany();
  res.json(users);
});

app.post("/", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({
    data: { username, password },
  });
  res.json({
    message: "user created",
    id: user.id,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
