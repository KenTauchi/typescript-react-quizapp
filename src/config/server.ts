import express from "express";
const app = express();
const PORT: string | number = process.env.PORT || 8000;

app.use("*", (req, res) => {
  res.send("../App.tsx");
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));
