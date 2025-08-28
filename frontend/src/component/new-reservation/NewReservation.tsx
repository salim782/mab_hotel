"use client";
import { Form, Input, Select, DatePicker, Button, Row, Col } from "antd";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { Checkbox, Divider, Table } from "antd";
import type { CheckboxOptionType, TableColumnsType } from "antd";

const { Option } = Select;

export interface Reservation {
  key: React.Key;
  title?: string;
  firstName: string;
  lastName: string;
  email: string;
  pickDropFacility?: string;
  visitPurpose?: string;
  arrivalFrom?: string;
  departureTo?: string;
  reservationType?: string;
  mobileNo?: string;
  mobile2?: string;
   country?: { _id: string; name: string; code: string };
  state?: { _id: string; name: string; isoCode: string };
  city?: { _id: string; name: string };
  zipCode?: string;
  address?: string;
  bookedBy?: string;
  dob?: string;
  gender?: string;
  employeeType?: string;
}

const columns: TableColumnsType<Reservation> = [
  {
    title: "Name",
    key: "1",
    render: (_, record) => `${record.firstName} ${record.lastName}`,
  },
  { title: "Email", dataIndex: "email", key: "2" },
  { title: "Pick and Drop Facility", dataIndex: "pickDropFacility", key: "3" },
  { title: "Arrival From", dataIndex: "arrivalFrom", key: "4" },
  { title: "Departure To", dataIndex: "departureTo", key: "5" },
  { title: "Reservation Type", dataIndex: "reservationType", key: "6" },
  { title: "Mobile No", dataIndex: "mobileNo", key: "7" },
  {
    title: "Country",
    key: "8",
    render: (record) => record.country?.name || "-",
  },
{
  title: "State",
  key: "9",
  render: (_, record) => record.state?.name || "-",
},
{
  title: "City",
  key: "10",
  render: (_, record) => record.city?.name || "-",
},

  { title: "Address", dataIndex: "address", key: "11" },
  { title: "Booked By", dataIndex: "bookedBy", key: "12" },
  { title: "Gender", dataIndex: "gender", key: "13" },
  { title: "Employee Type", dataIndex: "employeeType", key: "14" },
  { title: "DOB", dataIndex: "dob", key: "15" },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <span>
        <a onClick={() => console.log("Edit", record)}>Edit</a>
        <Divider type="vertical" />
        <a onClick={() => console.log("Delete", record)}>Delete</a>
      </span>
    ),
  },
];

const defaultCheckedList = columns.map((item) => item.key);

export default function NewReservation() {
  const [form] = Form.useForm();
  const router = useRouter();

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [data, setData] = useState<Reservation[]>([]);

  const [countries, setCountries] = useState<
    { lable: string; value: string }[]
  >([]);

  const [city, setCity] = useState<{ lable: string; value: string }[]>([]);

  const [states, setStates] = useState<{ lable: string; value: string }[]>([]);
  const [countryId, setCountryId] = useState<string>("");
  const [stateCode, setStateCode] = useState<string>("");
  // const [countryCode, setCountryCode] = useState<string>("");

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("http://localhost:3000/countries");
        const result = await res.json();
        console.log("Raw Countries API:", result);

        const formatted = result.map((c: any) => ({
          label: c.name,
          value: c._id,
        }));
        console.log("Countries Options:", formatted);
        setCountries(formatted);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!countryId) return; // 👈 guard
    const fetchStates = async () => {
      try {
        const res = await fetch(`http://localhost:3000/states/${countryId}`);
        if (!res.ok) throw new Error("Failed to fetch states");
        const result = await res.json();
        console.log("Raw states API:", result);
        const formatted = result.map((c: any) => ({
          label: c.name,
          value: c.isoCode,
        }));
        console.log("states Options:", formatted);
        setStates(formatted);
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };
    fetchStates();
  }, [countryId]);

  useEffect(() => {
    if (!countryId || !stateCode) {
      setCity([]);
      return;
    }

    const fetchCities = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/cities/${countryId}/${stateCode}`
        );
        console.log("Raw city API:", res);

        if (!res.ok) throw new Error("Failed to fetch");

        const result = await res.json();

        const formatted = result.map((c: any) => ({
          label: c.name,
          value: c.name,
        }));

        console.log("City Options:", formatted);
        setCity(formatted);
      } catch (error) {
        console.error("Failed to fetch city:", error);
      }
    };

    fetchCities();
  }, [countryId, stateCode]);

  const onFinish = async (values: any) => {
    console.log("Form Values:", values);

    try {
      const response = await fetch("http://localhost:3000/new-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: 'include'
      });
      const saved = await response.json();
      console.log("reservation created:", saved);

      if (response.ok) {
        setData((prev) => [
          ...prev,
          {
            key: saved.id || String(prev.length + 1),
            ...saved,
          },
        ]);

        toast.success("Reservation created!");
        form.resetFields();
      } else {
        toast.error(saved.message || "Creation failed!");
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
            <Form.Item name="mobile2" label="Mobile No. 2">
              <Input placeholder="Enter alternate number" />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 4 */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="country" label="Country">
              <Select
                placeholder="Select Country"
                options={countries}
                onChange={(value) => setCountryId(value)} // 👈 yahi se countryId milega
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="state" label="State">
              <Select
                placeholder="Select State"
                options={states}
                onChange={(value) => setStateCode(value)}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item name="city" label="City">
              <Select
                placeholder="Select City"
                options={city}
                onChange={(value) => form.setFieldValue("city", value)}
              />
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
            <Form.Item name="employeeType" label="Employee ID">
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
        // value={checkedList}
        options={options as CheckboxOptionType[]}
        onChange={(value) => {
          setCheckedList(value as string[]);
        }}
      />
      <Table<Reservation>
        columns={newColumns}
        dataSource={data}
        style={{ marginTop: 24 }}
      />
    </div>
  );
}
