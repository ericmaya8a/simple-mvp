"use server";
import { prisma } from "@/config/db/client";
import { PaymentType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type State = {
  errors?: {
    studentId?: string[];
    date?: string[];
    amount?: string[];
    paymentType?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  studentId: z.string(),
  date: z.string(),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than 0." }),
  paymentType: z.enum(
    [PaymentType.CARD, PaymentType.CASH, PaymentType.TRANSFER],
    { invalid_type_error: "Please select a Payment Type" }
  ),
});

export async function addTuition(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validateFields = FormSchema.safeParse(Object.fromEntries(formData));

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Failed to add Tuition",
    };
  }
  const { studentId, date, amount, paymentType } = validateFields.data;
  const dDate = date.split("-");

  try {
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
  } catch (error) {
    return { message: "Data Base Error: Failed to add Tuition" };
  }

  revalidatePath(`/student/[studentId]`, "page");
  return { message: "success" };
}
