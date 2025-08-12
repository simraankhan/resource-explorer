import CharacterList from "@/components/CharacterList";
import Search from "@/components/Search";
import Sort from "@/components/Sort";

const Home = async ({
  _,
  searchParams,
}: {
  _: string;
  searchParams: Promise<Record<string, string>>;
}) => {
  const query = await searchParams;

  return (
    <div className="px-5 xs:px-10 md:px-16">
      <div className="flex flex-row justify-center my-10">
        <Search placeholderText="Search a character" searchParams={query} />
      </div>
      <Sort searchParams={query} />
      <CharacterList searchParams={query} />
    </div>
  );
};

export default Home;
