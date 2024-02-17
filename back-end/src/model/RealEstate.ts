import { Schema, Types, model } from "mongoose";
import { RealEstateType } from "./../schema/resolvers/types";
import { User } from "./User";

const RealEstateSchema = new Schema<RealEstateType>({
  city: { type: String, required: true },
  bathrooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  isForSale: { type: Boolean, required: true },
  price: { type: Number },
  propertyType: { type: String, required: true },
  realtorId: { type: Types.ObjectId, required: true, ref: User },
  squareFootage: { type: Number, required: true },
  state: { type: String, required: true },
  yearBuilt: { type: Number, required: true },
  zipCode: { type: String, required: true },
});

export const RealEstate = model("RealEstate", RealEstateSchema);
