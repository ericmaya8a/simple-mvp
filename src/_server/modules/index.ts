import { prisma } from "@/config/db/client";
import { formatCurrency, formatDate, getFullName } from "@/utils";
import { Student, Tuition } from "@prisma/client";

function handleStudentData(data: Student) {
  const { id, firstName, lastName, email, image, birthDate, inscriptionDate } =
    data;
  return {
    id,
    name: getFullName(firstName, lastName),
    email,
    imageUrl: image,
    birthDate: formatDate(birthDate),
    inscriptionDate: formatDate(inscriptionDate),
  };
}

function handleTuitionData(data: Omit<Tuition, "studentId">[]) {
  return data.map(({ id, date, amount, paymentType }) => ({
    id,
    date: formatDate(date),
    amount: formatCurrency(amount),
    paymentType: paymentType.toLowerCase(),
  }));
}

export async function getStudents() {
  const students = await prisma.student.findMany();
  return students.map(handleStudentData);
}

export async function getStudentById(id: string) {
  const studentData = await prisma.student.findUnique({
    where: { id },
    include: {
      tuition: {
        select: {
          id: true,
          date: true,
          amount: true,
          paymentType: true,
        },
        orderBy: { date: "asc" },
      },
    },
  });

  if (!studentData) return null;

  return {
    studentData: handleStudentData(studentData),
    tuition: handleTuitionData(studentData.tuition),
  };
}

export async function getLastTuitions() {
  const tuitionData = await prisma.tuition.findMany({
    orderBy: { date: "desc" },
    select: {
      id: true,
      date: true,
      amount: true,
      paymentType: true,
    },
    take: 5,
  });

  return handleTuitionData(tuitionData);
}
