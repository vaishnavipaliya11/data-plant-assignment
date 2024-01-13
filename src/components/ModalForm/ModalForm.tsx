import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  TimePicker,
  TimePickerProps,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { postData } from "../../features/schedules/helpers/postData";
import { FormInputTypes } from "../../types";
import dayjs from "dayjs";

export const ModalForm = () => {
  const { Option } = Select;
  const dispatch = useAppDispatch();

  const [formInput, setFormInput] = useState<FormInputTypes>({
    title: "",
    frequency: "Weekly",
    timing: "",
    subject: "",
    repeat: {},
  });

  const [monthlyRepeat, setMonthlyRepeat] = useState("");
  const handleFrequencyChange = (value: any) => {
    console.log(value, "handleFrequencyChange");

    setFormInput((prevData) => ({ ...prevData, frequency: value }));
  };

  const handleTimeChange = (value: any) => {
    const timeValue = dayjs(value).format("hh:mm a");
    setFormInput((prevData) => ({ ...prevData, timing: timeValue }));
  };

  const handelFormInput = (e: any) => {
    const { name, value } = e.target;
    console.log(e.target.name, "e.target.name");

    setFormInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = () => {
    if (formInput.frequency === "Monthly") {
      const payload = { ...formInput, repeat: { [monthlyRepeat]: true } };
      dispatch(postData(payload));
    } else {
      dispatch(postData(formInput));
    }
  };
  const repeatHandler = (e: any) => {
    console.log(e, "repeatHandler");
    let selectedDay = e;
    setFormInput((prevData) => ({
      ...prevData,
      repeat: {
        ...prevData.repeat,
        [selectedDay]: prevData.repeat[selectedDay] ? false : true,
      },
    }));
  };

  const monthlyRepeatHandler = (e: any) => {
    console.log(e, "monthlyRepeatHandler");

    const selectedDay = e;
    setMonthlyRepeat(e);
    // setFormInput((prevData) => ({
    //   ...prevData,
    //   repeat: {
    //     ...prevData.repeat,
    //     [selectedDay]: prevData.repeat[selectedDay] ? false : true,
    //   },
    // }));
  };
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const Repeat = () => {
    switch (formInput.frequency) {
      case "Weekly":
        return (
          <Checkbox.Group name="repeat">
            {weekDays.map((day) => (
              <div
                className="repeat-input"
                onClick={() => repeatHandler(day)}
                style={{
                  backgroundColor: formInput.repeat[day] ? "#172554" : "",
                  color: formInput.repeat[day] ? "#FFF" : "#172554",
                }}
              >
                <span> {day[0]}</span>
              </div>
            ))}
          </Checkbox.Group>
        );
      case "Monthly":
        return (
          <Select
            value={monthlyRepeat}
            onChange={(e) => monthlyRepeatHandler(e)}
            options={[
              { value: "firstMonday", label: "First Monday" },
              { value: "lastFriday", label: "Last Friday" },
            ]}
          />
        );

      default:
        return null;
    }
  };

  console.log(formInput, "formInput");

  return (
    <Form
      //   {...formItemLayout}
      layout={"horizontal"}
      //   form={form}
      title="Add Schedule"
      style={{ minWidth: 500 }}
    >
      <Form.Item label="Title">
        <Input
          placeholder="input placeholder"
          name="title"
          onChange={(e) => handelFormInput(e)}
        />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea
          placeholder="input placeholder"
          name="description"
          onChange={(e) => handelFormInput(e)}
        />
      </Form.Item>
      <Form.Item label="Subject">
        <Input
          placeholder="input placeholder"
          name="subject"
          onChange={(e) => handelFormInput(e)}
        />
      </Form.Item>
      <Form.Item
        label="Frequency"
        name="frequency"
        rules={[{ required: true, message: "Please select a frequency" }]}
      >
        <Select onChange={handleFrequencyChange}>
          <Option value="Daily">Daily</Option>
          <Option value="Weekly">Weekly</Option>
          <Option value="Monthly">Monthly</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Repeat"
        name="repeat"
        shouldUpdate={(prevValues: any, currentValues: any) =>
          prevValues.frequency !== currentValues.frequency
        }
      >
        <Repeat />
      </Form.Item>
      <Form.Item label="Time">
        <Space>
          <TimePicker
            use12Hours={true}
            showNow={false}
            onChange={(value) => handleTimeChange(value)}
          />
        </Space>
      </Form.Item>
      <Form.Item className="form-btns">
        <Button type="primary" onClick={submitHandler}>
          Submit
        </Button>
        <Button type="default">Cancel</Button>
      </Form.Item>
    </Form>
  );
};
