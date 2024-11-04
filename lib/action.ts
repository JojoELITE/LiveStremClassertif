"use server";

import { z } from "zod";
import { prisma } from "@/lib/db"; // Assure-toi d'importer ton instance Prisma
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Schéma de validation pour créer un live
const LiveSchema = z.object({
  title: z.string().min(1),
  host: z.string().min(1),
  viewers: z.array(z.string().min(1)), // Tableau de noms de spectateurs
});

// Fonction pour créer une session de live
export const createLiveSession = async (formData: FormData) => {
  const validatedFields = LiveSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const liveSession = await prisma.live.create({
      data: {
        title: validatedFields.data.title,
        host: validatedFields.data.host,
        viewers: {
          create: validatedFields.data.viewers.map((name: string) => ({ name })), // Créer des spectateurs
        },
      },
    });

    // Optionnel : tu peux retourner la session créée
    return liveSession;
  } catch (error) {
    return { message: "Failed to create live session" };
  }

  revalidatePath("/live"); // Met à jour la page
  redirect("/live"); // Redirige vers la page des lives
};
