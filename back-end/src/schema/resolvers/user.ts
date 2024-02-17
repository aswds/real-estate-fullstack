import { User } from "../../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Error } from "mongoose";

type SignInReturnType = {
  userId: string;
  token: string;
  tokenExpiration: string;
};

const userResolver = {
  Query: {
    async users() {
      return User.find();
    },
    async user(_, { id }) {
      const result = await User.findById(id);
      return result;
    },
  },
  Mutation: {
    async signUp(_, args) {
      const { input } = args;
      const {
        name,
        surname,
        email,
        password,
        role,
        realtorData,
        licenseNumber,
        contactNumber,
      } = input;
      try {
        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) throw new Error("User already exists");
        const hashedPassword = await bcrypt.hash(password, 12);
        let user = null;
        if (role === "REALTOR" && licenseNumber && contactNumber) {
          user = new User({
            name,
            email,
            surname,
            password: hashedPassword,
            role,
            ...realtorData,
          });
        } else if (role === "USER" || role === "ADMIN") {
          user = new User({
            name,
            email,
            surname,
            role,
            password: hashedPassword,
          });
        } else {
          throw new Error("Please check if all required fields filled in.");
        }

        const result = await user.save();
        if (!result) throw new Error("error");
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    async signIn(_, { email, password }): Promise<SignInReturnType> {
      try {
        const user = await User.findOne({ email });
        if (!user)
          throw new Error("Please check if login and password are correct.");
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) throw new Error("Wrong Password!");

        const token = jwt.sign(
          { userID: user.id, email: user.email },
          "supersecretkey",
          { expiresIn: "1h" }
        );
        return { userId: user.id, tokenExpiration: "1h", token };
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export { userResolver };
