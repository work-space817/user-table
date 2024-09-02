import { memo } from "react";
import UserTable from "../../../components/table/UserTable";

const HomePage = memo(() => {
  return (
    <div className="flex items-center justify-center">
      <UserTable />
    </div>
  );
});

export default HomePage;
