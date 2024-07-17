"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  name: z.string().max(100).min(1),
  phone: z.string().min(10),
});

export const saveContact = async (
  prevState: any,
  formData: FormData
) => {
  const validate = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  // validation
  if (!validate.success) {
    return {
      Error: validate.error?.flatten().fieldErrors,
    };
  }

  // create contact
  try {
    await prisma.contact.create({
      data: {
        name: validate.data.name,
        phone: validate.data.phone,
      },
    });
  } catch (error: any) {
    return {
      message: "Failed to create contact",
    };
  }

  // revalidate
  revalidatePath("/contacts");
  redirect("/contacts");
};
