import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (userId: string, secret: string): string => {
  return jwt.sign({ id: userId }, secret, { expiresIn: "30d" });
};

const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

const authenticateUser = (secret: string) => {
  return (req: any, res: any, next: any) => {
    const token = req.header("authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ error: "Access Denied: No token provided" });
    }
    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  };
};

export { generateToken, hashPassword, comparePassword, authenticateUser };
