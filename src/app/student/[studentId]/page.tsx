import { getStudentById } from "@/_server/modules";
import { StudentCard } from "@/components/StudentCard";
import { TuitionForm } from "@/components/TuitionForm";
import { TuitionReport } from "@/components/TuitionReport";

export default async function StudentPage({
  params,
}: {
  params: {
    studentId: string;
  };
}) {
  const data = await getStudentById(params.studentId);

  if (data)
    return (
      <>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="sm:w-1/2">
            <StudentCard {...data.studentData} />
          </div>
          <TuitionForm studentId={params.studentId} />
        </div>

        {data.tuition.length ? (
          <TuitionReport data={data.tuition} />
        ) : (
          <p className="font-bold text-xl">No Data</p>
        )}
      </>
    );

  return null;
}
