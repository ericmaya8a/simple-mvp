import { getLastTuitions } from "@/_server/modules";
import { TuitionReport } from "@/components/TuitionReport";

export default async function TuitionsPage() {
  const data = await getLastTuitions();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Last 5 Tuitions</h1>
      <TuitionReport data={data} />
    </>
  );
}
