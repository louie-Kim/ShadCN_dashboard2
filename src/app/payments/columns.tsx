"use client";
// columns.tsx (client component) will contain our column definitions.

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { cn } from "@/lib/utils";

export type Payment = {
  id: string;
  amount: number;
  username: string;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    // row selector
    id: "select",
    header: ({ table }) => (
      // table.toggleAllRowsSelected : 전체 행 선택/해제 -> 다음페이지로 넘어가도 유지됨
      //  table.toggleAllPageRowsSelected : 현재 페이지만 행 선택/해제
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    //  enableSorting: false,
    // enableHiding: false,
  },

  {
    accessorKey: "username",
    // header: "User",

    // Make any column header sortable and hideable.
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User" />
    ),
  },

  {
    accessorKey: "email",
    // Sorting button
    // header: ({ column }) => {
    //   // console.log("column", column);

    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Email
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
    
    // Make any column header sortable and hideable.
    // from data-table-column-header
     header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
      cell: ({ row }) => {
      const status = row.getValue("status");
      // console.log("status", status);

      return (
        /**
         * Tailwind
         * <div
            className={`p-1 rounded-md w-max text-xd ${
                status === "pending"
                ? "bg-yellow-500/40"
                : status === "processing"
                ? "bg-blue-500/40"
                : status === "success"
                ? "bg-green-500/40"
                : status === "failed"
                ? "bg-red-500/40"
                : ""
            }`}
            >
         */

        // cn() : 삼항 연산자 없이도 조건부 클래스 적용 가능
        <div
          className={cn(
            `p-1 rounded-md w-full text-xd text-center`,
            status === "pending" && "bg-yellow-500/40",
            status === "success" && "bg-green-500/40",
            status === "failed" && "bg-red-500/40",
            status === "processing" && "bg-blue-500/40"
          )}
        >
          {status as string}
        </div>
      );
    },

  },

  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      //   console.log("row", row);
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      //   console.log("row", row); // 한 행 데이터

      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
