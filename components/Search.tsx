"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  placeholderText: string;
  searchParams: Record<string, string>;
}
const Search = ({ placeholderText, searchParams }: Props) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(
    searchParams?.name ? searchParams?.name : ""
  );

  useEffect(() => {
    if (!searchTerm) return;

    const delay = setTimeout(() => {
      const urlParam = new URLSearchParams();
      urlParam.append("name", searchTerm);
      router.push(
        `/?${urlParam.toString()}${
          searchParams?.sort ? "&sort=" + searchParams.sort : ""
        }`
      );
    }, 300);

    return () => {
      clearTimeout(delay);
    };
  }, [searchTerm, router]);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholderText}
          className="search-input"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm ?? undefined}
        />
        {searchTerm ? (
          <Link href="/" onClick={() => setSearchTerm("")}>
            <Image
              src="/icons/close.svg"
              alt="Close"
              width={20}
              height={20}
              className="object-contain !text-white size-7"
            />
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Search;
