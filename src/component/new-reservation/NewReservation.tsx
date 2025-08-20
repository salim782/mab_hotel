"use client";
import { Form, Input, Select, DatePicker, Button, Row, Col } from "antd";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Checkbox, Divider, Table } from "antd";
import type { CheckboxOptionType, TableColumnsType } from "antd";

const { Option } = Select;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  { title: "Column 3", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
];

const defaultCheckedList = columns.map((item) => item.key);

export default function NewReservation() {
  const [form] = Form.useForm();
  const router = useRouter();

  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));

  const onFinish = async (values: any) => {
    console.log("Form Values:", values);
    try {
      const response = await fetch("http://localhost:3000/new-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("reservation created:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Reservation created!");
      } else {
        toast.error(data.message || "Creation failed!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ padding: "20px", background: "#fff", borderRadius: 8 }}
      >
        {/* Row 1 */}
        <Row gutter={16}>
          <Col xs={12} sm={6} md={3}>
            <Form.Item name="title" label="Title">
              <Input placeholder="Enter title" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={7}>
            <Form.Item name="firstName" label="First Name">
              <Input placeholder="Enter first name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={7}>
            <Form.Item name="lastName" label="Last Name">
              <Input placeholder="Enter last name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={7}>
            <Form.Item name="pickDropFacility" label="Pick and Drop Facility">
              <Select placeholder="Select">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="visitPurpose" label="Visit Purpose">
              <Select placeholder="Select Purpose">
                <Option value="business">Business</Option>
                <Option value="leisure">Leisure</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, type: "email", message: "Enter valid email" },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="arrivalFrom" label="Arrival From">
              <Input placeholder="City/Location" />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 3 */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="departureTo" label="Departure To">
              <Input placeholder="City/Location" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="reservationType"
              label="Reservation Type"
              rules={[
                { required: true, message: "Please select reservation type" },
              ]}
            >
              <Select placeholder="Select Type">
                <Option value="single">Single</Option>
                <Option value="double">Double</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="mobileNo" label="Mobile No.">
              <Input placeholder="Enter mobile number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="country" label="Country">
              <Select placeholder="Select Country">
                <Option value="india">India</Option>
                <Option value="usa">USA</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 4 */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="state" label="State">
              <Select placeholder="Select State" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="mobile2" label="Mobile No. 2">
              <Input placeholder="Enter alternate number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="city" label="City">
              <Select placeholder="Select City" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="zipCode" label="ZIP Code">
              <Input placeholder="Enter ZIP" />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 5 */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="address" label="Address">
              <Input.TextArea rows={2} placeholder="Enter address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="bookedBy" label="Booked By">
              <Select placeholder="Select Booked By" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="dob" label="DOB">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 6 */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="gender" label="Gender">
              <Select placeholder="Select Gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="employeeType" label="Emp">
              <Input placeholder="Enter Employee ID" />
            </Form.Item>
          </Col>
          {/* <Col xs={24} sm={12} md={6}>
          <Form.Item name="transportMode" label="Transport Mode">
            <Select placeholder="Select Mode" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Form.Item name="voucherNo" label="Confirm Voucher No.">
            <Input placeholder="Enter voucher number" />
          </Form.Item>
        </Col> */}
        </Row>

        {/* Buttons */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Save
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Form.Item>
      </Form>

      <Divider>Columns displayed</Divider>
      <Checkbox.Group
        value={checkedList}
        options={options as CheckboxOptionType[]}
        onChange={(value) => {
          setCheckedList(value as string[]);
        }}
      />
      <Table<DataType>
        columns={newColumns}
        dataSource={data}
        style={{ marginTop: 24 }}
      />
    </div>
  );
}
