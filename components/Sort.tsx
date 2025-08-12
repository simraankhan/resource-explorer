"use client";

import { QueryKey } from "@/queries/query-key";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Sort = ({ searchParams }: { searchParams: Record<string, string> }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [sort, setSort] = useState(
    searchParams?.sort ? searchParams?.sort : ""
  );

  useEffect(() => {
    if (!sort) return;
    router.push(
      `/?sort=${sort}${searchParams?.name ? "&name=" + searchParams.name : ""}`
    );
  }, [sort, router]);

  return (
    <div className="my-5 text-primary flex items-center gap-x-3">
      <p className="font-semibold">Sort by: </p>
      <div className="flex items-center gap-x-3">
        <input
          type="radio"
          id="asc"
          name="sort"
          value="asc"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        />
        <label htmlFor="asc">Ascending</label>
      </div>
      <div className="flex items-center gap-x-3">
        <input
          type="radio"
          id="desc"
          name="sort"
          value="desc"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        />
        <label htmlFor="desc">Descending</label>
      </div>
      {sort ? (
        <Link
          href="/"
          onClick={() => {
            setSort("");
            queryClient.invalidateQueries({ queryKey: [QueryKey.characters] });
          }}
          className="text-light-100"
        >
          Clear
        </Link>
      ) : null}
    </div>
  );
};

export default Sort;
