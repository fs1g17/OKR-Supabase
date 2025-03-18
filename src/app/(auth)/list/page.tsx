"use client";

import { list } from "@/api/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function List() {
  const [data, setData] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const res = await list();
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className="border rounded-md p-4">
      {data.map(({ id, name }) => (
        <Link href={`/okr/${id}`}>{name}</Link>
      ))}
    </div>
  );
}
