import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://cancerTreatment_owner:U90ZsneHpbmG@ep-misty-unit-a57d3fqz.us-east-2.aws.neon.tech/cancerTreatment?sslmode=require"
);
export const db = drizzle(sql, { schema });
