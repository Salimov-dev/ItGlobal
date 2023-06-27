import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/language.store";

const Sidebar = () => {
  const language = useSelector(getLanguage());

  return <h1>sidebar</h1>;
};

export default Sidebar;
