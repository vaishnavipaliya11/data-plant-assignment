import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FormInputTypes } from "../../types";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteSchedule } from "../../features/schedules/helpers/deleteData";
import dayjs from "dayjs";
import { EditSchedule } from "../editSchedules";

export const DataTable = ({ tableData }: { tableData: FormInputTypes[] }) => {
  const dispatch = useAppDispatch();
  const { searchQuery, dataLoading } = useAppSelector(store => store.schedule);

  const searchedData = tableData.filter(data => data.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const columns: ColumnsType<FormInputTypes> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "age",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "address",
    },
    {
      title: "Schedule",
      dataIndex: "frequency",
      key: "address",
      render: (text, { timing }) => {
        // dayjs(value).format("YYYY/MM/DD hh:mm a")
        console.log(`${text} ${timing}`, "text");
        return <p>{`${text} at ${dayjs(timing).format("hh:mm a")}`}</p>;
      },
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <>
              <EditSchedule record={record} />
            </>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(deleteSchedule(record?.id));
                // console.log(id, "record");
              }}
            >
              <DeleteOutlined />{" "}
            </span>
          </Space>
        );
      },
    },
  ];
  return <Table loading={dataLoading} columns={columns} dataSource={searchedData}  />;
};
