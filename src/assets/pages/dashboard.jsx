import { link } from "react-router-dom";
import Dashboard from "../assets/componet/dashboard";
function Dashboard() {
  return (
    <>
      <Dashboard />
      <link to="/login">login</link>
      <link to="/register">Register</link>
    </>
  );
}
export default Dashboard;
