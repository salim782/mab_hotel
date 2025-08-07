
import { Card, Input, Select, DatePicker, TimePicker, InputNumber, Button, Table, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";


const { Option } = Select;

const NewReservation = () => {
  const [form] = Form.useForm();

  const columns: ColumnsType<any> = [
    { title: "Reservation Date", dataIndex: "reservationDate" },
    { title: "Arrival Date", dataIndex: "arrivalDate" },
    { title: "Arrival Time", dataIndex: "arrivalTime" },
    { title: "Checked Out Date", dataIndex: "checkedOutDate" },
    { title: "Checked Out Time", dataIndex: "checkedOutTime" },
    { title: "No. of Days", dataIndex: "noOfDays" },
    { title: "Room No.", dataIndex: "roomNo" },
    { title: "Room Category", dataIndex: "roomCategory" },
    { title: "Plan Type", dataIndex: "planType" },
    { title: "Room Type", dataIndex: "roomType" },
    { title: "Tax Type", dataIndex: "taxType" },
    { title: "Room Charge", dataIndex: "roomCharge" },
    { title: "Discount", dataIndex: "discount" },
    { title: "Male", dataIndex: "male" },
    { title: "Female", dataIndex: "female" },
    { title: "Child", dataIndex: "child" },
    { title: "Amount", dataIndex: "amount" },
    { title: "Total Tax", dataIndex: "totalTax" },
    { title: "Net Amount", dataIndex: "netAmount" },
  ];

  const dataSource = [
    {
      key: "1",
      reservationDate: "07/28/2025",
      arrivalDate: "07/28/2025",
      arrivalTime: "10:00",
      checkedOutDate: "07/29/2025",
      checkedOutTime: "11:01",
      noOfDays: 1,
      roomNo: 1,
      roomCategory: "DELUXE",
      planType: "CP",
      roomType: "DOUBLE",
      taxType: "Exclusive",
      roomCharge: "₹2,500.00",
      discount: "₹0.00",
      male: 1,
      female: 1,
      child: 1,
      amount: "₹2,500.00",
      totalTax: "₹300.00",
      netAmount: "₹2,800.00",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📝 New Reservation</h2>

      <Card title="Rooms Allotment Details" className="mb-6">
        <Table
          columns={columns}
          dataSource={dataSource}
          size="small"
          scroll={{ x: 1200 }}
          pagination={false}
        />
      </Card>

      <Card title="Service Details" className="mb-6">
        <Form form={form} layout="vertical">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Form.Item name="serviceName" label="Service Name">
              <Select placeholder="Select Service">
                <Option value="Laundry">Laundry</Option>
                <Option value="Spa">Spa</Option>
              </Select>
            </Form.Item>

            <Form.Item name="taxType" label="Tax Type">
              <Select placeholder="Exclusive">
                <Option value="Exclusive">Exclusive</Option>
              </Select>
            </Form.Item>

            <Form.Item name="qty" label="QTY">
              <InputNumber min={1} className="w-full" />
            </Form.Item>

            <Form.Item name="price" label="Price">
              <InputNumber min={0} className="w-full" />
            </Form.Item>
          </div>

          <Form.Item name="remark" label="Remark">
            <Input placeholder="Remark" />
          </Form.Item>

          <Button type="dashed" icon={<PlusOutlined />}>
            Add
          </Button>
        </Form>
      </Card>

      <Card title="Payment & Notes" className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Form.Item label="Billing Instructions">
            <Input.TextArea placeholder="Instructions..." />
          </Form.Item>

          <Form.Item label="Pay Mode">
            <Select placeholder="Select PayMode">
              <Option value="Cash">Cash</Option>
              <Option value="Card">Card</Option>
              <Option value="UPI">UPI</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Special Remark">
            <Input.TextArea placeholder="Remarks..." />
          </Form.Item>
        </div>
      </Card>

      <div className="flex gap-3 justify-end mt-4">
        <Button>Room Allotment</Button>
        <Button>Advance Deposit Details</Button>
        <Button danger>Close</Button>
        <Button type="default">Reset</Button>
        <Button type="primary">Save (F10)</Button>
      </div>
    </div>
  );
};

export default NewReservation;
