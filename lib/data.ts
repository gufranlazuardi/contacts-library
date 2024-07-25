import { prisma } from "@/lib/prisma";

export const getContact = async (
  query: string,
  currentPage: number
) => {
  try {
    const response = await prisma.contact.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return response;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
    });
    return contact;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};
