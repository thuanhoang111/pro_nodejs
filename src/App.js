import express from "express";
import morgan from "morgan";
import { engine, create } from "express-handlebars";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(morgan("combined"));
const port = 3000;

const hbs = create({ extname: ".hbs" });
// Template  engine

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.set("views", path.resolve(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () =>
  console.log(`adsljdklasjldjadqweqwlja http://localhost:${port}`)
);
