import { tailwindStyles } from "./tailwindStyles";
import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import { getDocs } from "firebase/firestore";
import { customerRef } from "../firebase/initFirestore";

const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await getDocs(customerRef);
      setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCustomers();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => customers, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <td></td>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
