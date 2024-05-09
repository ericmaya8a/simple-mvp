import { getStudents } from "@/_server/modules";
import Link from "next/link";
import { StudentCard } from "../components/StudentCard";

export default async function Home() {
  const students = await getStudents();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-0">
        {students.map((props) => (
          <Link key={props.id} href={`/student/${props.id}`}>
            <StudentCard {...props} />
          </Link>
        ))}
      </div>
    </>
  );
}
