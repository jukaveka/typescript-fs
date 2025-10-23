import { z } from "zod";

export const ISODateSchema = z.iso.date();

export type ISODate = z.infer<typeof ISODateSchema>;
