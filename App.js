const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello Wodjsfklsdklfjdklsfjl!");
});

app.listen(port, () =>
  console.log(`adsljdklasjldjadqweqwlja http://localhost:${port}`)
);
