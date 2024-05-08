import { StudentCard } from "@/components/StudentCard";
import { TuitionReport } from "@/components/TuitionReport";
import { formatCurrency, formatDate } from "@/utils";

const date = formatDate(new Date());
const data = {
  id: "5",
  name: "Dana Steward",
  email: "dana-stw@gmail.com",
  imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=dana",
  birthDate: date,
  inscriptionDate: date,
  tuition: [
    { id: "1", date, amount: formatCurrency(1500), paymentType: "CASH" },
    { id: "2", date, amount: formatCurrency(1700), paymentType: "TRANSFER" },
    { id: "3", date, amount: formatCurrency(2500), paymentType: "CASH" },
  ],
};

export default function StudentPage({
  params,
}: {
  params: {
    studentId: string;
  };
}) {
  return (
    <div>
      <div className="sm:w-1/2 mb-8">
        <StudentCard {...data} />
      </div>
      <TuitionReport data={data.tuition} />
    </div>
  );
}
