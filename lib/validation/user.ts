import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .email()
    .regex(/@vitapstudent\.ac\.in$/, "Must be a VITAP student email"),
  password: z.string().min(6), // You can add more criteria based on your security requirements
  age: z.number().min(16).max(100), // Assuming you want to accept ages between 18 and 100
  gender: z.enum(["Male", "Female", "Other"]), // Assuming you want these three options for gender
});
export default formSchema;
