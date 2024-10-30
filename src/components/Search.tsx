import { useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();

  return <div>Search: {params.keywords}</div>;
};

export default Search;
