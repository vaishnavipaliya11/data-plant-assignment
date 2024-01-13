import { Popover } from "antd";
import  { useState } from "react";
import { ModalForm } from "../ModalForm/ModalForm";
import { EditOutlined } from "@ant-design/icons";
import { FormInputTypes } from "../../types";

export const EditSchedule = ({ record }: { record: FormInputTypes }) => {
  const [isPopOverOpen, setIsPopOver] = useState(false);
  return (
    <Popover
      content={
        <ModalForm
          hide={() => setIsPopOver(false)}
          formData={record as FormInputTypes}
        />
      }
      title="Title"
      trigger="click"
      open={isPopOverOpen}
      placement="bottomRight"
    >
      <span onClick={()=> setIsPopOver(true)}>
        <EditOutlined  />
      </span>
    </Popover>
  );
};
