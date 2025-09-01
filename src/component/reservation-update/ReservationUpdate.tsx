import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { Option } from "antd/es/mentions";
import { City, Country, State } from "country-state-city";
import React, { useState } from "react";

const ReservationUpdate = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log(values, "**********");
  };

  return (
    <div>
      <Form
        form={form}
        // autoComplete="off"
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
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Country"
                onChange={(value) => {
                  setSelectedCountry(value);
                  setSelectedState("");
                  form.setFieldsValue({ state: undefined, city: undefined });
                }}
                // showSearch
              >
                {countries.map((c) => (
                  <Option key={c.isoCode} value={c.isoCode}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Select
                placeholder="Select State"
                onChange={(value) => {
                  setSelectedState(value);
                  form.setFieldsValue({ city: undefined });
                }}
                disabled={!selectedCountry}
                // showSearch
              >
                {states.map((s) => (
                  <Option key={s.isoCode} value={s.isoCode}>
                    {s.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Select
                placeholder="Select City"
                disabled={!selectedState}
                // showSearch
              >
                {cities.map((city) => (
                  <Option key={city.name} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
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
    </div>
  );
};

export default ReservationUpdate;
