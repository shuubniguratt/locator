import { z } from "zod";

import { WeekDays } from "@acme/utils";

import { CreateMeetingsSchema } from "./meeting";

export const CreateDaySchema = z.object({
  name: z.nativeEnum(WeekDays),
  meetings: z.array(CreateMeetingsSchema),
  groupId: z.string(),
});
