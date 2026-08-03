import Cards from "../componet/dashboard/cards";
import Header from "../componet/dashboard/header";
import Table from "../componet/dashboard/table";
function Dashboard() {
  const users = [
    {
      firstName: "faith",
      lastName: "kibuna",
      username: "f_kibuna",
      email: "faith.kibuna@example.com",
      phone: "+212612345678",
      dob: "1992-04-18",
      gender: "Female",
      createdAt: "2026-07-12",
    },
    {
      firstName: "john",
      lastName: "Karim",
      username: "bakari",
      email: "john.karim@example.com",
      phone: "+212698765432",
      dob: "1988-11-02",
      gender: "Male",
      createdAt: "2024-01-27",
    },
    {
      firstName: "jane",
      lastName: "june",
      username: "wambui",
      email: "jane.june@example.com",
      phone: "+212655443322",
      dob: "1995-07-09",
      gender: "Female",
      createdAt: "2024-05-06",
    },
    {
      firstName: "denis",
      lastName: "muchuri",
      username: "mushiri",
      email: "denis.muchuri@example.com",
      phone: "+212600112233",
      dob: "1990-12-21",
      gender: "Male",
      createdAt: "2024-02-14",
    },
    {
      firstName: "Sara",
      lastName: "hanna",
      username: "sarah",
      email: "sara.hanna@example.com",
      phone: "+212677889900",
      dob: "1998-09-30",
      gender: "Female",
      createdAt: "2024-06-01",
    },
  ];

  const usersThisMonth = users.filter((user) => {
    const createdAt = new Date(user.createdAt);
    const now = new Date();
    return (
      createdAt.getMonth() === now.getMonth() &&
      createdAt.getFullYear() === now.getFullYear()
    );
  });

  return (
    <div>
      <Header />
      <Cards />
      <Table />
    </div>
  );
}
export default Dashboard;
