"use server";

import { prisma } from "@/config/db/client";
import { PaymentType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
  studentId: z.string(),
  date: z.string(),
  amount: z.coerce.number(),
  paymentType: z.enum([
    PaymentType.CARD,
    PaymentType.CASH,
    PaymentType.TRANSFER,
  ]),
});

export async function addTuition(formData: FormData) {
  const { studentId, date, amount, paymentType } = FormSchema.parse(
    Object.fromEntries(formData)
  );
  const dDate = date.split("-");

  await prisma.tuition.create({
    data: {
      date: new Date(
        parseInt(dDate[0]),
        parseInt(dDate[1]) - 1,
        parseInt(dDate[2])
      ),
      amount,
      paymentType,
      studentId,
    },
  });

  revalidatePath(`/student/${studentId}`);
}
