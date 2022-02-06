import express, {Request, Response} from 'express';

// @desc   Register User Route
// @route  Post /auth/register
// @access Public
export const test = (req:Request, res: Response, next:Error) => {
    let msg:string = "Hello World";
    res.status(200).json(msg);
  };
  