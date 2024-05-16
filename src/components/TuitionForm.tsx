"use client";

import { addTuition } from "@/_server/actions";
import { PaymentType } from "@prisma/client";
import { useFormState } from "react-dom";
import { ErrorMessage } from "./ErrorMessage";
import { SubmitButtonForm } from "./SubmitButtonForm";

const options = Object.keys(PaymentType);

const initialState = { message: null, errors: {} };

export function TuitionForm({ studentId }: { studentId: string }) {
  const [formState, formAction] = useFormState(addTuition, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="studentId" value={studentId} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        <div>
          <label className="block" htmlFor="date">
            Date
          </label>
          <input
            className="border rounded-md p-2"
            type="date"
            name="date"
            id="date"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
          {formState.errors?.date ? (
            <ErrorMessage errors={formState.errors.date} />
          ) : null}
        </div>
        <div>
          <label className="block" htmlFor="amount">
            Amount
          </label>
          <input
            className="border rounded-md p-2"
            type="number"
            name="amount"
            id="amount"
            min="0"
            step=".01"
          />
          {formState.errors?.amount ? (
            <ErrorMessage errors={formState.errors.amount} />
          ) : null}
        </div>
        <div>
          <label className="block" htmlFor="paymentType">
            Payment Type
          </label>
          <select
            className="border rounded-md p-2"
            name="paymentType"
            id="paymentType"
          >
            {options.map((option) => (
              <option value={option} key={option}>
                {option.toLowerCase()}
              </option>
            ))}
          </select>
          {formState.errors?.paymentType ? (
            <ErrorMessage errors={formState.errors.paymentType} />
          ) : null}
        </div>
        <div className="flex items-end">
          <SubmitButtonForm />
        </div>
      </div>
    </form>
  );
}
