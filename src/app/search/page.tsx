import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import paths from "@/paths";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    term: string;
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { term } = searchParams;
  if (!term) {
    redirect(paths.home());
  }
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
