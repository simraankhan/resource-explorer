import { CharacterStatus } from "@/types";

const RenderStatus = ({ status }: { status: CharacterStatus }) => {
  let color: string = "text-gray-500";

  switch (status.toLowerCase()) {
    case "alive":
      color = "bg-green-500";
      break;
    case "dead":
      color = "bg-red-700";
      break;
    case "unknown":
      color = "bg-gray-500";
      break;
  }

  return (
    <div className="flex flex-row items-center gap-1">
      <div className={`size-2 rounded-full ${color}`} />
      <span className="text-light-200 font-semibold text-[14px]">{status}</span>
    </div>
  );
};

export default RenderStatus;
