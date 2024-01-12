import { AddScheduleModal } from "../components/modal/AddScheduleModal";
import { DataTable } from "../components/table/DataTable";

export const Dashboard: React.FC = () => {
  return <div>
    <DataTable/>
    <AddScheduleModal/>
  </div>;
};
