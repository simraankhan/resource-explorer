import { Character } from "@/types";
import Image from "next/image";
import Link from "next/link";
import RenderStatus from "./RenderStatus";
import FavouriteToggler from "./FavouriteToggler";

const CharacterCard = ({ id, image, name, status }: Character) => {
  return (
    <div className="flex flex-col gap-2">
      <Link href={`/characters/${id}`}>
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-contain size-full rounded-md"
          />
          <div className="flex flex-row items-center justify-end absolute -bottom-3 -right-3">
            <FavouriteToggler id={id} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-primary font-semibold">{name}</h2>
          <RenderStatus status={status} />
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
