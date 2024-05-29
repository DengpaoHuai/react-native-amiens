import { z } from "zod";

export const FormSchema = z.object({
  title: z.string().min(3).max(15),
  description: z.string().min(3).max(150),
  rating: z.string().min(1).max(5),
});

export type Form = z.infer<typeof FormSchema>;

export type Movie = {
  _id: string;
  title: string;
  description: string;
  rating: string;
};
