'use client';

import { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    DatePicker,
    Row,
    Col,
    Table,
    Space,
    Divider,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const roomTypes = [
    { value: 'single', label: 'Single' },
    { value: 'double', label: 'Double' },
    { value: 'suite', label: 'Suite' },
];

const taxTypes = [
    { value: 'gst', label: 'GST' },
    { value: 'vat', label: 'VAT' },
];

const serviceNames = [
    { value: 'laundry', label: 'Laundry' },
    { value: 'food', label: 'Food & Beverages' },
];

const guestNames = [
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Mrs.', label: 'Mrs.' },

];

const cityNames = [
    { value: 'new_delhi', label: 'New Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
];

const { Option } = Select;

interface FormValues {
    [key: string]: any;
}

const NewReservation = () => {
    const [form] = Form.useForm();
    const [roomAllotmentData, setRoomAllotmentData] = useState([
        {
            key: '1',
            reservationDate: '01-01-2025',
            arrivalDate: '02-01-2025',
            arrivalTime: '11:00 AM',
            checkedOutDate: '05-01-2025',
            checkedOutTime: '11:00 AM',
            numberOfDays: 3,
            roomType: 'Single',
            company: 'Tosskey',
            planType: 'EP',
            taxType: 'GST',
            roomCharge: 5000,
        },
    ]);

    const onFinish = (values: FormValues) => {
        console.log('Received values of form:', values);
    };

    interface RoomAllotmentRecord {
        key: string;
        reservationDate: string;
        arrivalDate: string;
        arrivalTime: string;
        checkedOutDate: string;
        checkedOutTime: string;
        numberOfDays: number;
        roomType: string;
        company: string;
        planType: string;
        taxType: string;
        roomCharge: number;
    }

    const handleDeleteRoom = (key: string) => {
        setRoomAllotmentData(roomAllotmentData.filter(item => item.key !== key));
    };

    const roomAllotmentColumns = [
        { title: 'Reservation Date', dataIndex: 'reservationDate', key: 'reservationDate' },
        { title: 'Arrival Date', dataIndex: 'arrivalDate', key: 'arrivalDate' },
        { title: 'Arrival Time', dataIndex: 'arrivalTime', key: 'arrivalTime' },
        { title: 'Checked Out Date', dataIndex: 'checkedOutDate', key: 'checkedOutDate' },
        { title: 'Checked Out Time', dataIndex: 'checkedOutTime', key: 'checkedOutTime' },
        { title: 'Number of Days', dataIndex: 'numberOfDays', key: 'numberOfDays' },
        { title: 'Room Type', dataIndex: 'roomType', key: 'roomType' },
        { title: 'Company', dataIndex: 'company', key: 'company' },
        { title: 'Plan Type', dataIndex: 'planType', key: 'planType' },
        { title: 'Tax Type', dataIndex: 'taxType', key: 'taxType' },
        { title: 'Room Charge', dataIndex: 'roomCharge', key: 'roomCharge' },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: RoomAllotmentRecord) => (
                <Space size="middle">
                    <a onClick={() => handleDeleteRoom(record.key)}>Delete</a>
                </Space>
            ),
        },
    ];

    interface ServiceRecord {
        key: string;
        serviceName: string;
        taxType: string;
        qty: number;
        price: number;
        totalAmt: number;
        remark: string;
    }

    const servicesColumns = [
        { title: 'Service Name', dataIndex: 'serviceName', key: 'serviceName' },
        { title: 'Tax Type', dataIndex: 'taxType', key: 'taxType' },
        { title: 'Quantity', dataIndex: 'qty', key: 'qty' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Total Amount', dataIndex: 'totalAmt', key: 'totalAmt' },
        { title: 'Remark', dataIndex: 'remark', key: 'remark' },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: ServiceRecord) => (
                <Space size="middle">
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <div className="bg-gray  mt-10">
            <div className="flex items-center justify-between ">
                <h2 className="text-2xl font-semibold text-gray-800">📝 New Reservation</h2>
                <Button
                    type="default"
                    className="!bg-green-600 !text-white !px-6 !py-3 rounded-lg text-lg hover:!bg-green-700 h-auto font-medium"
                    onClick={() => form.submit()}
                >
                    Save
                </Button>

            </div>


            <div className="px-6 py-8 max-w-7xl mx-auto w-full">
                <div className="space-y-8">

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Details</h3>
                        <Form
                            form={form}
                            name="personal_details"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <Form.Item name="guest_name" label="Guest">
                                    <Select placeholder="Select a guest">
                                        {guestNames.map(guest => (
                                            <Option key={guest.value} value={guest.value}>{guest.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'Please enter first name!' }]}>
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item name="last_name" label="Last Name">
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                                <Form.Item name="email" label="Email">
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item name="mobile_no" label="Mobile No">
                                    <Input placeholder="Mobile No" />
                                </Form.Item>
                                <Form.Item name="country" label="Country">
                                    <Input placeholder="Country" />
                                </Form.Item>
                                <Form.Item name="address" label="Address">
                                    <Input placeholder="Address" />
                                </Form.Item>
                                <Form.Item name="city" label="City">
                                    <Select placeholder="Select a city">
                                        {cityNames.map(city => (
                                            <Option key={city.value} value={city.value}>{city.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="zip_code" label="Zip Code">
                                    <Input placeholder="Zip Code" />
                                </Form.Item>
                                <Form.Item name="dob" label="Date of Birth">
                                    <DatePicker className="w-full" />
                                </Form.Item>
                                <Form.Item name="gender" label="Gender">
                                    <Select placeholder="Gender">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="visit_purpose" label="Visit Purpose">
                                    <Input placeholder="Visit Purpose" />
                                </Form.Item>
                            </div>
                        </Form>
                    </div>

                    <Divider className="my-6" />

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Guest Details</h3>
                        <Form
                            form={form}
                            name="guest_details"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Form.Item name="guest_first_name" label="First Name">
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item name="guest_last_name" label="Last Name">
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                                <Form.Item name="guest_email" label="Email">
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item name="guest_mobile_no" label="Mobile No">
                                    <Input placeholder="Mobile No" />
                                </Form.Item>
                                <Form.Item name="guest_address" label="Address">
                                    <Input placeholder="Address" />
                                </Form.Item>
                                <Form.Item name="guest_dob" label="Date of Birth">
                                    <DatePicker className="w-full" />
                                </Form.Item>
                                <Form.Item name="guest_gender" label="Gender">
                                    <Select placeholder="Gender">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>

                    <Divider className="my-6" />


                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Room Allotment Information</h3>
                        <Form form={form} name="room_allotment_form" onFinish={onFinish} layout="vertical">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <Form.Item name="allotment_arrival_date" label="Arrival Date">
                                    <DatePicker className="w-full" />
                                </Form.Item>
                                <Form.Item name="allotment_arrival_time" label="Arrival Time">
                                    <Input type="time" />
                                </Form.Item>
                                <Form.Item name="allotment_checkout_date" label="Checkout Date">
                                    <DatePicker className="w-full" />
                                </Form.Item>
                                <Form.Item name="allotment_checkout_time" label="Checkout Time">
                                    <Input type="time" />
                                </Form.Item>
                                <Form.Item name="allotment_room_category" label="Room Type">
                                    <Select placeholder="Select a category">
                                        {roomTypes.map(type => (
                                            <Option key={type.value} value={type.value}>{type.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="allotment_plan_type" label="Plan Type">
                                    <Select placeholder="Select a plan">
                                        <Option value="ep">EP</Option>
                                        <Option value="cp">CP</Option>
                                        <Option value="map">MAP</Option>
                                        <Option value="ap">AP</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="allotment_tax_type" label="Tax Type">
                                    <Select placeholder="Select a tax type">
                                        {taxTypes.map(type => (
                                            <Option key={type.value} value={type.value}>{type.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="allotment_no_of_rooms" label="Number of Rooms">
                                    <Input type="number" />
                                </Form.Item>
                                <Form.Item name="allotment_no_of_adults" label="Number of Adults">
                                    <Input type="number" />
                                </Form.Item>
                                <Form.Item name="allotment_no_of_child" label="Number of Children">
                                    <Input type="number" />
                                </Form.Item>
                            </div>
                            <Button type="primary" htmlType="submit" className="mt-4">
                                Add Room
                            </Button>
                        </Form>
                    </div>

                    <Divider className="my-6" />

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Room Allotment Details</h3>
                        <Table
                            columns={roomAllotmentColumns}
                            dataSource={roomAllotmentData}
                            pagination={false}
                        />
                    </div>

                    <Divider className="my-6" />

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Services</h3>
                        <Form name="dynamic_services_form" onFinish={onFinish} layout="vertical">
                            <Form.List name="services">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline" wrap>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'serviceName']}
                                                    label="Service Name"
                                                >
                                                    <Select placeholder="Select a service">
                                                        {serviceNames.map(service => (
                                                            <Option key={service.value} value={service.value}>{service.label}</Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'taxType']}
                                                    label="Tax Type"
                                                >
                                                    <Select placeholder="Select a tax type">
                                                        {taxTypes.map(type => (
                                                            <Option key={type.value} value={type.value}>{type.label}</Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'qty']}
                                                    label="Qty"
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'price']}
                                                    label="Price"
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'remark']}
                                                    label="Total Amount"
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} className="self-center" />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add Service
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Form>
                    </div>

                    <Divider className="my-6" />
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Billing Information</h3>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <Form.Item name="total_amount" label="Total Amount">
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item name="discount" label="Discount">
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item name="tax" label="Tax">
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item name="billing_amount" label="Billing Amount">
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item name="billing_instruction" label="Billing Instruction">
                            <Input.TextArea rows={2} />
                        </Form.Item>
                        <Form.Item name="payment_mode" label="Mode of Payment">
                            <Select placeholder="Select a mode of payment">
                                <Option value="card">Card</Option>
                                <Option value="cash">Cash</Option>
                                <Option value="upi">UPI</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
            </div>

            <Space>
                <Button
                    className="!bg-gray-500 !text-white !px-6 !py-3 !text-base"
                >
                    Room Allotment
                </Button>
                <Button
                    className="!bg-gray-500 !text-white !px-6 !py-3 !text-base"
                >
                    Advance Deposite Details
                </Button>

                <Button
                    className="!px-6 !py-3  !text-base"
                >
                    Reset
                </Button>

                <Button
                    type="primary"
                    onClick={() => form.submit()}
                    className="!px-6 !py-3 !text-base"
                >
                    Save F10
                </Button>

                <Button
                    className="!bg-red-700 !text-white !px-6 !py-3 !text-base"
                >
                    Close
                </Button>


            </Space>
        </div>

    );
};

export default NewReservation;
