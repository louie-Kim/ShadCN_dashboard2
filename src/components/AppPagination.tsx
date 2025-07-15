// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// const AppPagination = () => {
//   return (
//     <div>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href="payments" />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">1</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">2</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">3</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext href="/" />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };

// export default AppPagination;

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Table } from "@tanstack/react-table";

interface AppPaginationProps<TData> {
  table: Table<TData>;
}

const AppPagination = <TData,>({ table }: AppPaginationProps<TData>) => {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex;

  const handlePageClick = (page: number) => {
    table.setPageIndex(page);
  };

  const pagesToShow = () => {
    const total = pageCount;
    // console.log("total", total);
    const current = pageIndex;
    // console.log("current", current);

    const maxVisible = 5;
    const start = Math.max(0, Math.min(current - 2, total - maxVisible));
    // console.log("start", start);
    const end = Math.min(total, start + maxVisible);
    // console.log("end", end);
    // Array.from({ length: 5 } -> [undefined, undefined, undefined, undefined, undefined] , 인덱스 값만 빌려옴
    // start: 4 -> [4, 5, 6, 7, 8] ->   {page + 1} ->  [5, 6, 7, 8, 9]

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              table.previousPage();
            }}
            aria-disabled={!table.getCanPreviousPage()}
          />
        </PaginationItem>

        {pagesToShow().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === pageIndex}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(page);
              }}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pageCount > 5 && pageIndex + 3 < pageCount && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              table.nextPage();
            }}
            aria-disabled={!table.getCanNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;
