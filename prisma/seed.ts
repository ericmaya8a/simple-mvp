const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();
const students = Array.from(Array(15).keys());
const AVATAR_API_PATH = "https://api.dicebear.com/7.x/adventurer/svg?seed=";

function randomDate(date?: Date) {
  return faker.date.between({
    from: date ?? "2021-01-01T00:00:00.000Z",
    to: new Date().toJSON(),
  });
}

function getRandomValue(values: string[]) {
  const random = Math.floor(Math.random() * values.length);
  return values[random];
}

function createTuition(inscriptionDate: Date, index: number) {
  const payments = ["CASH", "CARD", "TRANSFER"];
  let nextDate = new Date(inscriptionDate);
  nextDate.setDate(inscriptionDate.getDate() + 30 * index);
  return {
    date: nextDate,
    amount: Math.floor(Math.random() * 1000) + 1500,
    paymentType: getRandomValue(payments),
  };
}

function createStudent() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName(sex);
  const email = faker.internet.email({
    firstName,
    lastName,
  });

  return {
    firstName,
    lastName,
    birthDate: faker.date.birthdate({ min: 6, max: 45, mode: "age" }),
    inscriptionDate: randomDate(),
    image: `${AVATAR_API_PATH}${firstName}`,
    email,
  };
}

async function load() {
  try {
    students.forEach(async () => {
      const random = Math.floor(Math.random() * 8);
      const randomArray = Array.from(Array(random).keys());
      const student = createStudent();
      const tuitions = randomArray.map((_, index) =>
        createTuition(student.inscriptionDate, index + 1)
      );

      await prisma.student.create({
        data: {
          ...student,
          tuition: {
            create: tuitions,
          },
        },
      });
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

load();
