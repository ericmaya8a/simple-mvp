"use server";

import { prisma } from "@/config/db/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
  studentId: z.string(),
  amount: z.coerce.number(),
  paymentType: z.enum(["CASH", "CARD", "TRANSFER"]),
});

export async function addTuition(formData: FormData) {
  const { studentId, amount, paymentType } = FormSchema.parse(
    Object.fromEntries(formData)
  );

  await prisma.tuition.create({
    data: {
      date: new Date(),
      amount,
      paymentType,
      studentId,
    },
  });

  revalidatePath("/student/[studentId]");
  revalidatePath("/tuitions");
}
