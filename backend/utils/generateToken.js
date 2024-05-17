import jwt from "jsonwebtoken";

const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateToken;
