import { customerRef, db } from "../firebase/initFirestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useState, useEffect } from "react";

const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CustomerTable() {
  const q = query(customerRef, limit(50));
  const c = useCollectionData(q);
  const [customers, setCustomers] = useState(c);

  useEffect(() = async => {
    setCustomers([...c]);
  }, []);

  const theme = useTheme(getTheme());
  const COLUMNS = [
    { label: "First", renderCell: (customer) => customer.first_name },
    { label: "Last", renderCell: (customer) => customer.last_name },
    { label: "Email", renderCell: (customer) => customer.email },
    { label: "Address", renderCell: (customer) => customer.address },
    { label: "Invoice", renderCell: (customer) => customer.invoice },
  ];

  return (
    <>
      <CompactTable columns={COLUMNS} data={customers} theme={theme} />
    </>
  );
}
