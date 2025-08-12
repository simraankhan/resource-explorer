"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";
import { Fragment } from "react";
import CharacterCard from "./CharacterCard";
import { QueryKey } from "@/queries/query-key";
import { fetchCharacters } from "@/api";

const CharacterList = ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const {
    data,
    error,
    isLoading,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: [QueryKey.characters, { name: searchParams?.name }],
    queryFn: ({ signal, pageParam }) =>
      fetchCharacters(signal, pageParam.page, { name: pageParam?.name }),
    getNextPageParam: (response) => {
      let page = null;
      try {
        const nextUrl = response?.info?.next;
        const url = new URL(nextUrl);
        page = url.searchParams.get("page");
      } catch (error) {
        console.error(error);
        page = null;
      }

      return {
        page: page ? Number(page) : 2,
        name: searchParams?.name ?? "",
      };
    },
    initialData: { pageParams: [], pages: [] },
    initialPageParam: { page: 1, name: searchParams.name },
    select(data) {
      if (searchParams?.sort) {
        return {
          ...data,
          pages: data.pages.map((group) => {
            return {
              ...group,
              results: group.results.sort((a, b) => {
                return searchParams?.sort === "asc"
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name);
              }),
            };
          }),
        };
      }
      return data;
    },
  });

  if (isLoading) return <Loading />;

  if (error) return <Error refetch={refetch} />;
  console.log({ data });

  if (data?.pages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h2 className="font-semibold text-white">No data found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 pb-20">
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          <div className="grid grid-cols-4 gap-4 max-sm:flex flex-1 flex-col">
            {group.results.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </div>
          <div className="my-3"></div>
        </Fragment>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isLoading}
        className="btn-secondary mx-auto mt-4"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
};

export default CharacterList;
