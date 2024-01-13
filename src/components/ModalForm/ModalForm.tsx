import { Button, Checkbox, Form, Input, Select, Space, TimePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { postData } from "../../features/schedules/helpers/postData";
import { FormInputTypes } from "../../types";
import dayjs from "dayjs";
import { editSchedule } from "../../features/schedules/helpers/editData";

const defaultFormValue = {
  title: "",
  frequency: "Weekly",
  timing: "",
  subject: "",
  repeat: {},
  description: "",
  id: "",
};
export const ModalForm = ({ formData, hide }: { formData?: FormInputTypes; hide?: () => void }) => {
  const { Option } = Select;
  const dispatch = useAppDispatch();

  const [formInput, setFormInput] = useState<FormInputTypes>(
    formData ? formData : defaultFormValue
  );

  const [monthlyRepeat, setMonthlyRepeat] = useState(
    formData ? Object.keys(formInput.repeat)[0] : ""
  );
  const handleFrequencyChange = (value: any) => {
    console.log(value, "handleFrequencyChange");
    setMonthlyRepeat("");
    setFormInput(prevData => ({ ...prevData, repeat: {} }));
    setFormInput(prevData => ({ ...prevData, frequency: value }));
  };

  const handleTimeChange = (value: any) => {
    const timeValue = dayjs(value).format("YYYY/MM/DD hh:mm a");
    setFormInput(prevData => ({ ...prevData, timing: timeValue }));
  };

  const handelFormInput = (e: any) => {
    const { name, value } = e.target;
    console.log(e.target.name, "e.target.name");

    setFormInput(prevData => ({ ...prevData, [name]: value }));
  };

  const repeatHandler = (e: any) => {
    console.log(e, "repeatHandler");
    let selectedDay = e;
    setFormInput(prevData => ({
      ...prevData,
      repeat: {
        ...prevData.repeat,
        [selectedDay]: prevData.repeat[selectedDay] ? false : true,
      },
    }));
  };

  const monthlyRepeatHandler = (e: any) => {
    console.log(e, "monthlyRepeatHandler");

    setMonthlyRepeat(e);
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const Repeat = () => {
    switch (formInput.frequency) {
      case "Weekly":
        return (
          <Checkbox.Group name="repeat">
            {weekDays.map(day => (
              <div
                className="repeat-input"
                onClick={() => repeatHandler(day)}
                // value={formInput.frequency}
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
            onChange={e => monthlyRepeatHandler(e)}
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

  const submitHandler = () => {
    if (formInput.frequency === "Monthly") {
      const payload = { ...formInput, repeat: { [monthlyRepeat]: true } };
      dispatch(postData(payload));
    } else {
      dispatch(postData(formInput));
    }

    if (hide) {
      hide();
    }
    
  };

  const editHandler = () => {
    if (formInput.frequency === "Monthly") {
      const payload = { ...formInput, repeat: { [monthlyRepeat]: true } };
      dispatch(editSchedule({ id: formData?.id as string, payload }));
    } else {
      dispatch(editSchedule({ id: formData?.id as string, payload: formInput }));
    }
    if (hide) {
      hide();
    }
  };
  return (
    <Form
      layout={"horizontal"}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      title="Add Schedule"
      style={{ width: 390, padding: 0, margin: 0 }}
    >
      <Form.Item label="Title">
        <Input
          placeholder="Enter Title"
          name="title"
          value={formInput.title}
          onChange={e => handelFormInput(e)}
        />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea
          placeholder="Enter Description"
          name="description"
          value={formInput.description}
          onChange={e => handelFormInput(e)}
        />
      </Form.Item>
      <Form.Item label="Subject">
        <Input
          placeholder="Enter Subject"
          name="subject"
          value={formInput.subject}
          onChange={e => handelFormInput(e)}
        />
      </Form.Item>
      <Form.Item label="Frequency" name="frequency">
        <Select
          onChange={handleFrequencyChange}
          defaultValue={formInput.frequency}
          value={formInput.frequency}
          options={[
            { value: "Daily", label: "Daily" },
            { value: "Weekly", label: "Weekly" },
            { value: "Monthly", label: "Monthly" },
          ]}
        />
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
            value={formInput.timing ? dayjs(formInput.timing) : null}
            use12Hours={true}
            showNow={false}
            allowClear={false}
            onChange={value => handleTimeChange(value)}
          />
        </Space>
      </Form.Item>
      <Form.Item>
        <div className="form-btns">
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              formInput?.title === "" ||
              formInput.description === "" ||
              formInput.frequency === "" ||
              formInput.subject === "" ||
              formInput.timing === ""
                ? true
                : false
            }
            onClick={() => {
              formData ? editHandler() : submitHandler();
            }}
          >
            {formData ? "Save" : "Submit"}
          </Button>
          <Button type="default" onClick={() => (hide ? hide() : "")}>
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
