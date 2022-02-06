import express, { Request, Response } from "express";
const User = require("../models/User");

// @desc   Register User 
// @route  POST http://localhost:3000/auth/register
// @access Public
export const registerUser = async (req: Request, res: Response, next: Error) => {
  const { firstName, lastName, email, password } = req.body;
  // console.log(req.body);
  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  })
  let msg = "User successfully created";
  res.status(201).json(user)
};

// @desc   Delete User
// @route  DELETE http://localhost:3000/auth/delete/:id
// @access Public
export const deleteUser = async (req: Request, res: Response, next: Error) => {
  const user = await User.findById(req.params.id)
  try {
    user.remove();
    res.status(200).json({ msg: `User ${req.params.id} is successfully deleted` })
  } catch (error) {
    res.status(401).json({msg : "User not found"});
  }
};