import React from "react";
import { Button, Popover, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataTableTypes, scheduleDataTableTypes } from "../../types";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { ModalForm } from "../ModalForm/ModalForm";

const columns: ColumnsType<scheduleDataTableTypes> = [
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
      console.log(`${text} ${timing}`, "text");
      return <p>{`${text} at ${timing}`}</p>;
    },
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <>
          <Popover
            content={<ModalForm />}
            title="Title"
            trigger="click"
            placement="bottomRight"
          >
            <span>
              <EditOutlined />
            </span>
          </Popover>
        </>
        <span>
          <DeleteOutlined />{" "}
        </span>
      </Space>
    ),
  },
];

const data: DataTableTypes[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export const DataTable = ({
  tableData,
}: {
  tableData: scheduleDataTableTypes[];
}) => {
  return <Table columns={columns} dataSource={tableData} />;
};
