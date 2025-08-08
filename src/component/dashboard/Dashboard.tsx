import React from 'react';
import { Card, Statistic } from 'antd';

// StatCard ke props ke liye type declaration
type StatCardProps = {
  title: string;
  value: number;
  subValue?: number;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, subValue }) => {
  const formattedValue = typeof value === 'number' ? value : 0;
  const formattedSubValue = typeof subValue === 'number' ? subValue : null;

  return (
    <Card className="shadow w-full">
      <div className="text-sm text-gray-500">{title || ''}</div>
      <div className="flex justify-between mt-2 items-start">
        <Statistic value={formattedValue} prefix="₹" />
        {formattedSubValue !== null && (
          <div className="text-sm text-right ml-4">
            <div className="text-green-600 font-semibold">Month</div>
            <div className="text-black">₹{formattedSubValue.toLocaleString()}</div>
          </div>
        )}
      </div>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="shadow p-4">
          <div className="text-sm font-semibold">Arrival</div>
          <div className="text-xs text-gray-600">Total: 0</div>
          <div className="text-xs text-gray-600">Pending: 0</div>
        </Card>
        <Card className="shadow p-4">
          <div className="text-sm font-semibold">Departure</div>
          <div className="text-xs text-gray-600">Total: 9</div>
          <div className="text-xs text-gray-600">Pending: 9</div>
        </Card>
        <Card className="shadow p-4">
          <div className="text-sm font-semibold">Total Booking</div>
          <div className="text-xs text-gray-600">0</div>
        </Card>
        <Card className="shadow p-4">
          <div className="text-sm font-semibold">In House</div>
          <div className="text-xs text-gray-600">10</div>
        </Card>
        <Card className="shadow p-4">
          <div className="text-sm font-semibold">Available Room</div>
          <div className="text-xs text-gray-600">108</div>
        </Card>
        <Card className="bg-green-100 shadow p-4">
          <div className="text-sm font-semibold">UnAlloted Room</div>
        </Card>
      </div>

      {/* Sales and Total Bill */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Sales (Today)" value={1376.0} subValue={1392187.0} />
        <StatCard title="Outstanding Amount" value={0.0} subValue={103545.0} />
        <StatCard title="Total Bill" value={0.0} subValue={57.0} />
      </div>

      {/* Inventory Statistics and Occupancy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Inventory Statistics" className="shadow p-4">
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Sold Room: 1</li>
            <li>Blocked Room: 0</li>
            <li>Available Room: 108</li>
            <li>Complimentary: 0</li>
            <li>House Use: 0</li>
            <li>Same Day Check Out: 0</li>
          </ul>
        </Card>
        <Card title="Occupancy (%)" className="shadow p-4">
          <div className="flex justify-between items-start">
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Today's Checkin: 1</li>
              <li>Continue Room: 9</li>
              <li>Complimentary/House Use: 0</li>
              <li>Total Occupancy: 10</li>
              <li>Total Checkout: 0</li>
            </ul>
            <div className="text-blue-600 text-3xl font-bold flex items-center">9.17%</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
