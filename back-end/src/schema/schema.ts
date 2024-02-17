import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { realEstateResolver, userResolver } from "./resolvers";

const realEsateTypes = readFileSync(
  "src/schema/typedefs/real-estate.gql",
  "utf-8"
);
const userTypes = readFileSync("src/schema/typedefs/user.gql", "utf-8");
const typeDefs = mergeTypeDefs([realEsateTypes, userTypes]);
const resolvers = mergeResolvers([realEstateResolver, userResolver]);
const Schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export { Schema };
