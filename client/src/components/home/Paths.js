import { useNavigate } from "react-router-dom";
import CustomizedList from "../basic/CustomizedList";
import Path from "../basic/Path";
import { generatePaths } from "./paths.helper";

const children = (data) => {
  return <Path data={data}></Path>;
};

const Paths = ({ data }) => {
  const navigate = useNavigate();
  const paths = generatePaths(data, navigate);
  return <CustomizedList data={paths} child={children} />;
};
export default Paths;
