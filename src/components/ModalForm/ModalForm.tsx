import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  TimePickerProps,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export const ModalForm = () => {
  const format = "YYYY-MM-DD hh:mm A";
  const url="https://65a02d427310aa1f8144bb38.mockapi.io/api/v1/all"
  return (
    <Form
      //   {...formItemLayout}
      layout={"horizontal"}
      //   form={form}

      //   style={{ maxWidth: 1200 }}
    >
      <Form.Item label="Title">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea placeholder="input placeholder" />
      </Form.Item>
      {/* Subject Frequency Repeat Time */}
      <Form.Item label="Subject">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Frequency">
        <Space wrap>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            //   onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Space>
      </Form.Item>
      <Form.Item label="Repeat">
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          //   onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
      <Form.Item label="Time">
        <Space>
          <DatePicker
            showTime={{ format: "hh:mm A", use12Hours: true }}
            format={format}
            // type={"time"}
            placeholder="Select Date and Time"
          />
        </Space>
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
