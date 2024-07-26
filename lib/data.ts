import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5;

export const getContact = async (
  query: string,
  currentPage: number
) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const response = await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
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

export const getContactPages = async (query: string) => {
  try {
    // pake .count suapaya angka paginationnya kebaca
    const response = await prisma.contact.count({
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
    const totalPages = Math.ceil(Number(response) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};
