import { prisma } from "@/lib/prisma";

export const getContact = async () => {
  try {
    const response = await prisma.contact.findMany();
    return response;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};
