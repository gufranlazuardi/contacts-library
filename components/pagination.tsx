"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generatePagination } from "@/lib/formatter";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1; // Jika tidak terdapat item, maka default 1

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}? ${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  interface PaginationNumberProps {
    page: number | string;
    href: string;
    position?: "first" | "last" | "middle" | "single";
    isActive: boolean;
  }

  const PaginationNumber: React.FC<PaginationNumberProps> = ({
    page,
    href,
    position,
    isActive,
  }) => {
    const customPaginationStyle = clsx(
      "flex h-10 w-10 items-center justify-center text-sm border",
      {
        "rounded-1-sm": position === "first" || position === "single",
        "rounded-r-sm": position === "last" || position === "single",
        "z-10 bg-blue-100 border-blue-500 text-white": isActive,
        "hover:bg-gray-100": !isActive && position !== "middle",
        "text-gray-300 pointer-events-none": position === "middle",
      }
    );

    return isActive && position === "middle" ? (
      <div className={customPaginationStyle}>{page}</div>
    ) : (
      <Link href={href} className={customPaginationStyle}>
        {page}
      </Link>
    );
  };

  interface PaginationArrowProps {
    href: string;
    direction: "left" | "right";
    isDisabled: boolean;
  }

  const PaginationArrow: React.FC<PaginationArrowProps> = ({
    href,
    direction,
    isDisabled,
  }) => {
    const customPaginationArrowStyle = clsx(
      "flex h-10 w-10 items-center justify-center text-sm border",
      {
        "pointer-events-none text-gray-300": isDisabled,
        "hover:bg-gray-100": !isDisabled,
        "mr-2": direction === "left",
        "ml-2": direction === "right",
      }
    );

    const icon =
      direction === "left" ? (
        <ChevronLeft size={20} />
      ) : (
        <ChevronRight size={20} />
      );
    return isDisabled ? (
      <div className={customPaginationArrowStyle}>{icon}</div>
    ) : (
      <Link href={href} className={customPaginationArrowStyle}>
        {icon}
      </Link>
    );
  };

  return (
    <Link href="/contacts">
      <div className="inline-flex">
        {/* render panah kiri */}
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        {/* render pagination */}
        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position:
              | "first"
              | "middle"
              | "last"
              | "single"
              | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={index}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        {/* render panah kanan */}
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </Link>
  );
};

export default Pagination;
