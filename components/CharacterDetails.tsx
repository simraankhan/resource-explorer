"use client";

import { getCharacterDetailsById } from "@/api";
import { QueryKey } from "@/queries/query-key";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loading from "./Loading";
import Error from "./Error";
import RenderStatus from "./RenderStatus";
import FavouriteToggler from "./FavouriteToggler";

interface Props {
  id: number;
}

const ViewItems = ({ data }: { data: { label: string; value: string }[] }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.label}>
          <p className="text-light-100 text-sm">{item.label}</p>
          <span className="text-primary font-bold">
            {!!item.value ? item.value : "N/A"}
          </span>
        </div>
      ))}
    </>
  );
};

const CharacterDetails = ({ id }: Props) => {
  const {
    data: character,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [QueryKey.characters, id],
    queryFn: ({ queryKey, signal }) =>
      getCharacterDetailsById(Number(queryKey[1]), signal),
  });

  if (isLoading) return <Loading />;

  if (isError || !character) return <Error refetch={refetch} />;

  const {
    name,
    image,
    status,
    gender,
    species,
    created,
    type,
    location: { name: localName },
    origin: { name: orginName },
  } = character;

  const viewItems = [
    { label: "Gender", value: gender },
    { label: "Species", value: species },
    { label: "Type", value: type },
    {
      label: "Created",
      value: created ? new Date(created).toLocaleDateString() : "N/A",
    },
    { label: "Location", value: localName },
    { label: "Origin", value: orginName },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-fill w-full h-[400px]"
      />
      <div className="flex flex-row items-center justify-end px-4">
        <FavouriteToggler id={id} />
      </div>
      <div className="px-4 py-3 text-primary">
        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-2xl font-bold">{character?.name}</h1>
          <RenderStatus status={status} />
        </div>

        <div className="max-xs:flex flex-col grid grid-cols-3 gap-10 mt-10">
          <ViewItems data={viewItems} />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
