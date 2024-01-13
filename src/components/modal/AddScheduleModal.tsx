import React from "react";
import { Button, Popover, Space } from 'antd';
import { ModalForm } from "../ModalForm/ModalForm";
import "../../styles.css"

export const AddScheduleModal = () => {
  return (
    <div className="add-btn-container">
      <Popover content={<ModalForm/>} title="Title" trigger="click" placement="bottomRight">
        <Button type="primary" className="primay-btn">Add + </Button>
      </Popover>
    </div>
  );
};
