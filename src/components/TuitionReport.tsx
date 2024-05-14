type TuitionReportProps = {
  data: {
    id: string;
    date: string;
    amount: string;
    paymentType: string;
  }[];
};

export function TuitionReport({ data }: TuitionReportProps) {
  return (
    <div className="border rounded-md p-4">
      <div className="grid grid-cols-3 gap-4">
        <span className="font-bold text-xl">Date</span>
        <span className="font-bold text-xl">Amount</span>
        <span className="font-bold text-xl">Payment Type</span>
      </div>
      {data.map(({ id, date, amount, paymentType }) => (
        <div key={id} className="grid grid-cols-3 gap-4">
          <span>{date}</span>
          <span>{amount}</span>
          <span className="capitalize">{paymentType}</span>
        </div>
      ))}
    </div>
  );
}
