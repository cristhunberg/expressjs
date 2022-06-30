import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "Worldfdsfsdfsdfsd" });
});

app.get("/blog", async (req, res) => {
  res.send({ Hello: "Worldfdsfsdfsdfsd" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
