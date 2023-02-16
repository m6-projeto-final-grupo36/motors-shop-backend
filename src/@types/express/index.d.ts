import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      advertiser: {
        id: string;
      };
    }
  }
}
