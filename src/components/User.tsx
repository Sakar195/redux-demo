import { useGet } from "../hooks/useGetData";

const User = () => {
  const { data, isLoading, isSuccess, error, isError } = useGet();
  // const response = useGet();
  return <div>This is the user page</div>;
};

export default User;
