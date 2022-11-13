import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";

export default function CustomerTable() {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => , [])

  useTable({
    columns,
    data
  })
  return (
    <div>
    </div>
  );
}
