import { useEffect } from "react";
import { AddScheduleModal } from "../components/modal/AddScheduleModal";
import { DataTable } from "../components/table/DataTable";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getData } from "../features/schedules/helpers/getData";
import { Sidebar } from "../components/sidebar/Sidebar";
import "../styles.css"

export const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.schedule);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="main-container">
      <Sidebar />
      <div  className="data-display-container">
        <AddScheduleModal />
        <DataTable tableData={data} />
      </div>
    </div>
  );
};
