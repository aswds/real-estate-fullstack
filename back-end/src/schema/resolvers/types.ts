import { ObjectId } from "mongoose";

export type Resolver = Record<"Query" | "Mutation", Record<string, Function>>;

// Real-Estate Types
export interface RealEstateInput {
  propertyType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  yearBuilt: number;
  isForSale: boolean;
  realtorId: string;
}
export interface RealEstateType {
  _id: string; // Assuming ID is a string-based unique identifier
  propertyType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  yearBuilt: number;
  isForSale: boolean;
  realtorId: ObjectId; // Assuming a separate `Realtor` interface exists
}

export interface Realtor {
  id: string; // Assuming ID is a string-based unique identifier
  name: string;
  licenseNumber: string;
  contactNumber: string;
  email: string;
}
