import { Link } from "react-router-dom";
import Index from "../componet/index";
function Index() {
  return (
    <>
      <Index />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}
export default index;
