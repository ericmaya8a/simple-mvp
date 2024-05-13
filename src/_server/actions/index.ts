"use server";

import { prisma } from "@/config/db/client";
import { PaymentType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
  studentId: z.string(),
  amount: z.coerce.number(),
  paymentType: z.enum([
    PaymentType.CARD,
    PaymentType.CASH,
    PaymentType.TRANSFER,
  ]),
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

  revalidatePath(`/student/${studentId}`);
}
