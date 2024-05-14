import { addTuition } from "@/_server/actions";
import { PaymentType } from "@prisma/client";

const options = Object.keys(PaymentType);

export function TuitionForm({ studentId }: { studentId: string }) {
  return (
    <form action={addTuition}>
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
            required
          />
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
            required
          />
        </div>
        <div>
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
        <div className="flex items-end">
          <button
            className="p-3 bg-blue-600 text-white uppercase rounded w-20"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}