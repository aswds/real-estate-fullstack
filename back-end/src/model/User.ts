import { Schema, model } from "mongoose";

const UserScheme = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

export const User = model("User", UserScheme);
