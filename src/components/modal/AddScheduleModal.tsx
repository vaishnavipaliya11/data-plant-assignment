import React from "react";
import { Button, Popover, Space } from 'antd';
import { ModalForm } from "../ModalForm/ModalForm";

export const AddScheduleModal = () => {
  return (
    <div>
      <Popover content={<ModalForm/>} title="Title" trigger="click" placement="bottomRight">
        <Button>Add + </Button>
      </Popover>
    </div>
  );
};
