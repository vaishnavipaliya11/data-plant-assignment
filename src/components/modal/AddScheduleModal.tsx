import React, { useState } from "react";
import { Button, Popover, Space } from "antd";
import { ModalForm } from "../ModalForm/ModalForm";
import "../../styles.css";
import { useAppSelector } from "../../app/hooks";

export const AddScheduleModal = () => {
  // const{isPopOverOpen}= useAppSelector(store=>store.schedule)
  const [isPopOverOpen, setIsPopOver] = useState(false);
  return (
    <div className="add-btn-container">
      <Popover
        open={isPopOverOpen}
        content={<ModalForm hide={() => setIsPopOver(false)} />}
        trigger="click"
        placement="bottomRight"
      >
        <Button
          type="primary"
          className="primay-btn"
          onClick={() => setIsPopOver(true)}
        >
          Add +{" "}
        </Button>
      </Popover>
    </div>
  );
};
