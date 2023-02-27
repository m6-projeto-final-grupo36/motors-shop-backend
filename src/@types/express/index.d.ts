import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        account: string;
      };
      announcement: {
        id: string;
      };
      validatedBody: any;
    }
  }
}
