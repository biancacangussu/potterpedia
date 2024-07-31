import { Pagination } from "@nextui-org/react";

interface CardsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CardsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CardsPaginationProps) {
  return (
    <div className="flex flex-col gap-5">
      <Pagination
        total={totalPages}
        color="secondary"
        page={currentPage}
        onChange={onPageChange}
      />
    </div>
  );
}
