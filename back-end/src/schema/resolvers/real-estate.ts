import { RealEstate } from "../../model/RealEstate";
import { User } from "../../model/User";
import { RealEstateType, RealEstateInput, Resolver } from "./types";
import _ from "lodash";
const realEstateResolver: Resolver = {
  Query: {
    async getRealEstate(parentValue, args): Promise<RealEstateType> {
      return await RealEstate.findById(args.id);
    },
    async getAllRealEstate(): Promise<RealEstateType[]> {
      return await RealEstate.find();
    },
  },
  Mutation: {
    async createRealEstate(
      parentValue,
      args: { input: RealEstateInput }
    ): Promise<RealEstateType> {
      const { input } = args;

      try {
        // user already signed in
        if (
          input &&
          !Object.values(input).every(
            (val) => val !== null && val !== undefined
          )
        )
          throw new Error("Please make sure you entered all fields.");
        const newRealEstate = new RealEstate({
          ...input,
        });

        const result = await newRealEstate.save();

        return result;
      } catch (error) {
        console.log(error);
      }
    },
    async updateRealEstate(
      parentValue,
      { _id, input }
    ): Promise<RealEstateType> {
      if (_.isEmpty(input)) throw new Error("Please enter all fields");
      const result = await RealEstate.findOneAndUpdate(
        { _id },
        {
          ...input,
        }
      );

      return result;
    },
    async deleteRealEstate(_, { _id }): Promise<RealEstateType> {
      const deletedRealEstate = await RealEstate.findOneAndDelete({ _id });

      return deletedRealEstate;
    },
  },
};

export { realEstateResolver };

// 30 днів
