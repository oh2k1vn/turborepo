import { Checkbox } from "@repo/ui/components/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export const SelectColumn = <TData extends object>(): ColumnDef<TData> => ({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  });
  
