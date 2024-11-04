// "use server";

// import { z } from "zod"; // Assure-toi d'avoir installé Zod
// import { prisma } from "@/lib/db"; // Chemin vers ton instance Prisma
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// // Schéma de validation avec Zod
// const EmployeeSchema = z.object({
//   creatorName: z.string().min(6),
//   roomName: z.string().min(6),
//   participants: z.array(z.string().min(1)), // Tableau de noms de participants
// });

// // Fonction pour enregistrer une salle et ses participants
// export const saveEmployee = async (prevState: any, formData: FormData) => {
//   const validatedFields = EmployeeSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validatedFields.success) {
//     return {
//       Error: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   try {
//     // Créer la salle avec les participants
//     await prisma.room.create({
//       data: {
//         creatorName: validatedFields.data.creatorName,
//         roomName: validatedFields.data.roomName,
//         Participant:validatedFields.data.participants
//       },
//     });
//   } catch (error) {
//     return { message: "Failed to create new room" };
//   }

//   revalidatePath("/employee");
//   redirect("/employee");
// };

// // Fonction pour récupérer la liste des salles
// export const getEmployeelist = async () => {
//   try {
//     const rooms = await prisma.room.findMany({
//       select: {
//         id: true,
//         creatorName: true,
//         roomName: true,
//         participants: true,
//       },
//       orderBy: {
//         creatorName: "asc", // Tu peux changer cela si tu veux trier par un autre champ
//       },
//     });
//     return rooms;
//   } catch (error) {
//     throw new Error("Failed to fetch rooms data");
//   }
// };
