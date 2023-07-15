/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { AuthModel, IUser } from './auth.interface';

const AuthSchema = new Schema<IUser, AuthModel>(
  {
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.password; // Remove the password field from the response
        return ret;
      },
    },
  }
);

AuthSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<IUser, 'email' | 'password'> | null> {
  return await Auth.findOne({ email }, { password: 1, email: 1, id: 1 });
};

AuthSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// hashing admin password
AuthSchema.pre('save', async function (next) {
  // hashing admin password
  const user = this;
  if (user.password) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bycrypt_salt_rounds)
    );
  }
  next();
});
export const Auth = model<IUser, AuthModel>('User', AuthSchema);
