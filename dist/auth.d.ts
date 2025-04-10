declare const generateToken: (userId: string, secret: string) => string;
declare const hashPassword: (password: string) => Promise<string>;
declare const comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
declare const authenticateUser: (secret: string) => (req: any, res: any, next: any) => any;
export { generateToken, hashPassword, comparePassword, authenticateUser };
