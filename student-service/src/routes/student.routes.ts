import express, { Request, Response } from "express";
import { Student } from "../models/student.model";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const student = new Student(req.body);

  await student.save();

  res.json(student);
});

router.get("/", async (req:Request, res:Response) => {
  const students = await Student.find();

  res.json(students);
});

export default router;