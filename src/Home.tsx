import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./Slice";
import { RootState } from "./Store";

const Home = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state.demo);

  const handleClick = (word: string) => {
    dispatch(changeName(word));
  };

  return (
    <div>
      Welcome to home
      {<button onClick={() => handleClick("name")}> Button</button>}
      {selector?.name}
    </div>
  );
};

export default Home;
