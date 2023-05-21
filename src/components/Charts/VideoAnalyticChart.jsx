"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "react-apexcharts";

// import { ApexCharts } from "@/components/Charts/ApexBaseChart";

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//     ssr: false,
// });

export default function VideoAnalyticChart() {
    const srs = [
        {
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.0],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1332885600000, 34.46],
                [1334786400000, 32.91],
                [1334872800000, 33.06],
                [1335132000000, 32.62],
                [1335218400000, 32.4],
                [1360537200000, 38.64],
                [1360623600000, 38.89],
                [1360710000000, 38.81],
                [1360796400000, 38.61],
                [1360882800000, 38.63],
                [1361228400000, 38.99],
                [1361314800000, 38.77],
                [1361401200000, 38.34],
                [1361487600000, 38.55],
                [1361746800000, 38.11],
                [1361833200000, 38.59],
                [1361919600000, 39.6],
            ],
        },
    ];

    const opt = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 350,
            zoom: {
                autoScaleYaxis: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
            style: "hollow",
        },
        xaxis: {
            type: "datetime",
            min: new Date("01 Mar 2012").getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100],
            },
        },
    };

    const [series, setSeries] = useState(srs);
    const [options, setOptions] = useState(opt);
    const [selection, setSelection] = useState("one_month");
    const [timeline, setTimeline] = useState({ selection: "one_month" });
    const [chart, setChart] = useState(null);

    useEffect(() => {
        switch (timeline) {
            case "one_month":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("28 Jan 2013").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            case "six_months":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("27 Sep 2012").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            case "one_year":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("27 Feb 2012").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            case "ytd":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("01 Jan 2013").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            case "all":
                ApexCharts.exec(
                    "area-datetime",
                    "zoomX",
                    new Date("23 Jan 2012").getTime(),
                    new Date("27 Feb 2013").getTime()
                );
                break;
            default:
        }
    }, [selection]);

    const globalClass =
        "inline-block px-3 py-1 mr-2 bg-secondary text-white bg-[#046ED1] font-medium text-sm";

    return (
        <div id="chart">
            <div className="toolbar">
                <button
                    id="one_month"
                    onClick={() => setSelection("one_month")}
                    className={
                        selection === "one_month"
                            ? `active ${globalClass}`
                            : `${globalClass}`
                    }
                >
                    1M
                </button>
                &nbsp;
                <button
                    id="six_months"
                    onClick={() => setSelection("six_months")}
                    className={
                        selection === "six_months"
                            ? `active ${globalClass}`
                            : `${globalClass}`
                    }
                >
                    6M
                </button>
                &nbsp;
                <button
                    id="one_year"
                    onClick={() => setSelection("one_year")}
                    className={
                        selection === "one_year"
                            ? `active ${globalClass}`
                            : `${globalClass}`
                    }
                >
                    1Y
                </button>
                &nbsp;
                <button
                    id="ytd"
                    onClick={() => setSelection("ytd")}
                    className={
                        selection === "ytd"
                            ? `active ${globalClass}`
                            : `${globalClass}`
                    }
                >
                    YTD
                </button>
                &nbsp;
                <button
                    id="all"
                    onClick={() => setSelection("all")}
                    className={
                        selection === "all"
                            ? `active ${globalClass}`
                            : `${globalClass}`
                    }
                >
                    ALL
                </button>
            </div>

            {series && options ? (
                <div id="chart-timeline">
                    
                    {typeof window !== undefined && (
                        <ApexCharts
                            options={options}
                            series={series}
                            type="area"
                            height={350}
                        />
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
