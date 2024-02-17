import cors from "cors";
import express from "express";
import colors from "colors";
import { configDotenv } from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { Schema } from "./src/schema/schema";
import { connectDb } from "./src/config/db";
const app = express();
configDotenv();
const port = 3000;
connectDb();
app.use(cors());
app.listen(port, () => {
  console.log("hello world");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,

    graphiql: process.env.NODE_ENV === "development",
  })
);
app.get("/", () => {
  console.log("hello world");
});
