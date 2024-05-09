import { getStudentById } from "@/_server/modules";
import { StudentCard } from "@/components/StudentCard";
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
      <div>
        <div className="sm:w-1/2 mb-8">
          <StudentCard {...data.studentData} />
        </div>
        {data.tuition.length ? (
          <TuitionReport data={data.tuition} />
        ) : (
          <p className="font-bold text-xl">No Data</p>
        )}
      </div>
    );

  return null;
}
