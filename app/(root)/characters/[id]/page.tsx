import CharacterDetails from "@/components/CharacterDetails";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;

  return (
    <>
      <CharacterDetails id={Number(id)} />
    </>
  );
};

export default Page;
