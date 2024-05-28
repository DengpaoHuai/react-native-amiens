import { z } from "zod";

export const FormSchema = z.object({
  title: z.string().min(3).max(15),
  description: z.string().min(3).max(150),
  rating: z.number().min(1).max(5),
});

export type Form = z.infer<typeof FormSchema>;
