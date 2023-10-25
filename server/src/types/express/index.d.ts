export {}

declare global {
  namespace Express {
    export interface Request {
      user?: any;
    }
    export interface ProcessEnv {
      [key: string]: string | undefined
  }
  }
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
    id?: string;
  }
}