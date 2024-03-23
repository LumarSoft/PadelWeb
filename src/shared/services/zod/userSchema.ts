import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  document: z.string().length(8),
  phoneNumber: z.string(),
});
