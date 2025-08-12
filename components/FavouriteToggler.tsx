"use client";

import useFavorites from "@/hooks/useFavourite";
import Image from "next/image";

const FavouriteToggler = ({
  id,
  className,
}: {
  id: number;
  className?: string;
}) => {
  const { toggle, isFav } = useFavorites();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggle(id);
      }}
    >
      <Image
        src={isFav(id) ? "/icons/heart.png" : "/icons/heart-outline.png"}
        alt="Favourite"
        width={35}
        height={35}
        className={className}
      />
    </button>
  );
};

export default FavouriteToggler;
