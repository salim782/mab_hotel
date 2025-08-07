"use client";

import React, { useEffect, useMemo, useState } from "react";
import { DatePicker, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";

type RoomData = {
    key: number;
    roomCategory: string;
    [key: `date_${number}`]: {
        booked: number;
        available: number;
    };
};

const roomCategories = [
    "DELUXE (11)", "SUPER DELUXE (13)", "PREMIUM EXECUTIVE ROOM (6)", "EXECUTIVE ROOM (5)",
    "FAMILY COTTAGE (4)", "SUIT ROOM (4)", "SINGLE ROOM (6)", "STANDARD ROOM (4)",
    "CONNECTING ROOMS (3)", "CABANA (5)", "PRESIDENTIAL ROOM (1)", "V.I.P ROOM (1)",
    "GUEST ROOM (1)", "PRIVATE ROOM (5)",
];

const getBgColor = (val: number): string => {
    if (val <= 2) return "bg-yellow-500 text-white";
    return "bg-green-600 text-white";
};

const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const dates = useMemo(() => {
        const year = selectedDate.year();
        const month = selectedDate.month();
        const daysInMonth = selectedDate.daysInMonth();

        return Array.from({ length: daysInMonth }, (_, i) => {
            const date = dayjs(new Date(year, month, i + 1));
            return {
                key: i,
                label: date.format("DD MMM"),
                weekday: date.format("ddd"),
            };
        });
    }, [selectedDate]);

    const columns: ColumnsType<RoomData> = [
        {
            title: "ROOM CATEGORY",
            dataIndex: "roomCategory",
            fixed: "left",
            width: 200,
        },
        ...dates.map((d, index) => ({
            title: (
                <div className="text-center">
                    <div className="font-semibold">{d.label}</div>
                    <div className="text-xs text-gray-600">{d.weekday}</div>
                </div>
            ),
            dataIndex: `date_${index}` as keyof RoomData,
            align: "center" as const,
            width: 100,
            render: (val: { booked: number; available: number }) => (
                <div className="flex justify-center gap-1">
                    <span className={`px-2 py-1 rounded text-sm ${getBgColor(val.booked)}`}>
                        {val.booked}
                    </span>
                    <span className="px-2 py-1 rounded text-sm bg-green-600 text-white">
                        {val.available}
                    </span>
                </div>
            ),
        })),
    ];

    const data: RoomData[] = useMemo(() => {
        if (!mounted) return [];

        return roomCategories.map((category, i) => {
            const row: RoomData = {
                key: i,
                roomCategory: category,
            };

            dates.forEach((_, dIndex) => {
                const booked = Math.floor(Math.random() * 2);
                const available = Math.max(0, 1 - booked);
                row[`date_${dIndex}`] = { booked, available };
            });

            return row;
        });
    }, [mounted, dates]);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                    🗓️ Reservation Calendar
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 font-bold">Date</span>
                    <DatePicker
                        className="w-48 cursor-pointer"
                        value={selectedDate}
                        onChange={(date) => date && setSelectedDate(date)}
                        format="DD-MM-YYYY"
                    />

                </div>
            </div>
            {mounted && (
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    scroll={{ x: 1500 }}
                    pagination={false}
                    size="small"
                />
            )}
        </div>
    );
};

export default ReservationCalendar;
