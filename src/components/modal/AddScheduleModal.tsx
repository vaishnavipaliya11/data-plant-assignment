import React, { useState } from "react";
import { Button, Popover, Space } from "antd";
import { ModalForm } from "../ModalForm/ModalForm";
import "../../styles.css";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSearchQuery } from "../../features/schedules/scheduleSlice";

const { Search } = Input;

export const AddScheduleModal = () => {
  const [isPopOverOpen, setIsPopOver] = useState(false);
  const dispatch = useAppDispatch();

  const handleSearch = (searchString: string) => {
    dispatch(setSearchQuery(searchString));
  };

  return (
    <div className="add-btn-container">
      <Search placeholder="input search text" allowClear onSearch={handleSearch} style={{ width: 200 }} />

      <Popover
        open={isPopOverOpen}
        content={<ModalForm hide={() => setIsPopOver(false)} />}
        trigger="click"
        placement="bottomRight"
      >
        <Button type="primary" className="primay-btn" onClick={() => setIsPopOver(true)}>
          Add +{" "}
        </Button>
      </Popover>
    </div>
  );
};
