import { addTuition } from "@/_server/actions";
import { PaymentType } from "@prisma/client";

const options = Object.keys(PaymentType);

export function TuitionForm({ studentId }: { studentId: string }) {
  return (
    <form action={addTuition}>
      <input type="hidden" name="studentId" value={studentId} />
      <div className="mb-3">
        <label className="block" htmlFor="amount">
          Amount
        </label>
        <input
          className="border rounded-md p-2"
          type="number"
          name="amount"
          id="amount"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block" htmlFor="paymentType">
          Payment Type
        </label>
        <select
          className="border rounded-md p-2"
          name="paymentType"
          id="paymentType"
          required
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option.toLowerCase()}
            </option>
          ))}
        </select>
      </div>
      <button
        className="p-3 bg-blue-600 text-white uppercase rounded"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
