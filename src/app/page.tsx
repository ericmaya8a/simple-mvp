import { formatDate } from "@/utils";
import Link from "next/link";
import { StudentCard } from "../components/StudentCard";

const date = formatDate(new Date());
const students = [
  {
    id: "1",
    name: "John Doe",
    email: "john-doe@gmail.com",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=john",
    birthDate: date,
    inscriptionDate: date,
  },
  {
    id: "2",
    name: "Mila Day",
    email: "mila-day@gmail.com",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=mila",
    birthDate: date,
    inscriptionDate: date,
  },
  {
    id: "3",
    name: "Dan Smith",
    email: "dan-smith@gmail.com",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=dan",
    birthDate: date,
    inscriptionDate: date,
  },
  {
    id: "4",
    name: "Paul Mile",
    email: "paul-mile@gmail.com",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=paul",
    birthDate: date,
    inscriptionDate: date,
  },
  {
    id: "5",
    name: "Dana Steward",
    email: "dana-stw@gmail.com",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=dana",
    birthDate: date,
    inscriptionDate: date,
  },
];

export default function Home() {
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
