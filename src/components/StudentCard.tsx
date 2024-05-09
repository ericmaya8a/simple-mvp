import { BsFillCake2Fill } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Avatar } from "./Avatar";

type StudentCardProps = {
  name: string;
  imageUrl: string;
  email: string;
  birthDate: string;
  inscriptionDate: string;
};

export function StudentCard({
  name,
  imageUrl,
  email,
  birthDate,
  inscriptionDate,
}: StudentCardProps) {
  return (
    <div className="bg-white border-2 rounded-md p-4 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <Avatar imageUrl={imageUrl} />
        <span className="font-bold text-xl">{name}</span>
      </div>
      <p className="flex items-center gap-1 italic text-gray-500 mt-2">
        <MdOutlineMailOutline /> {email}
      </p>
      <p className="flex items-center gap-1 italic text-gray-500 mt-2">
        <BsFillCake2Fill /> {birthDate}
      </p>
      <p className="flex items-center gap-1 italic text-gray-500 mt-2">
        <FaCalendarCheck /> {inscriptionDate}
      </p>
    </div>
  );
}
