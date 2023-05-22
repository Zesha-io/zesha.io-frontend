import Image from "next/image";
import DotsDropdown from "@/components/Dropdowns/DotsDropdown";
import ThumbsDownIcon from "@/components/Icons/ThumbsDownIcon";
import ThumbsUpIcon from "@/components/Icons/ThumbsUpIcon";
import Layout from "@/components/CreatorLayout/Layout";
import { cookies } from "next/headers";

export default async function Videos() {
    function getUser() {
        const cookieStore = cookies();
        const user = JSON.parse(cookieStore.get("zesha_account").value);

        return user;
    }

    async function getVideoData() {
        const user = getUser();

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/users/${user.userId}/videos`
        );

        const data = await res.json();

        if (!res.ok) return [];

        if (data.status) return data.data;

        return [];
    }

    const VideoData = await getVideoData();

    const dateFormat = (date) => {
        const d = new Date(date);

        const month = d.toLocaleString("default", { month: "long" });

        return `${d.getDate()} ${month} ${d.getFullYear()}`;
    };

    console.log(VideoData);
    return (
        <Layout>
            <div className="pb-20">
                <div className="grow py-2 mb-3">
                    <h1 className="text-xl font-medium">Videos</h1>
                    <p className="text-[#7F8691] text-base">
                        All your uploaded videos
                    </p>
                </div>

                <div>
                    <div className="my-3 w-full space-y-4 md:space-y-0 bg-white">
                        <div className=" overflow-x-auto ">
                            <table className="max-w-full w-full leading-normal table-auto overflow-x-auto relative order-table ">
                                {/* <div className="inline-block min-w-full table-auto "> */}
                                <thead className="bg-neutral50 font-semibold ">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-5 py-3  border-b border-gray-200 text-[#667085] text-left text-sm whitespace-nowrap flex-nowrap"
                                        >
                                            Title
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085] text-left text-sm  whitespace-nowrap flex-nowrap"
                                        >
                                            Status
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085] text-left text-sm  whitespace-nowrap flex-nowrap"
                                        >
                                            Date uploaded
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085] text-left text-sm whitespace-nowrap flex-nowrap"
                                        >
                                            Views
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085]  text-left text-sm  whitespace-nowrap flex-nowrap"
                                        >
                                            Earnings ($)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085]  text-left text-sm whitespace-nowrap flex-nowrap"
                                        >
                                            Tips ($)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085]  text-left text-sm whitespace-nowrap flex-nowrap"
                                        >
                                            Likes (vs Dislikes)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 border-b border-gray-200 text-[#667085]  text-left text-sm whitespace-nowrap flex-nowrap"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-20">
                                    {VideoData.map((video, i) => {
                                        return (
                                            <tr key={video.id} id={video.id}>
                                                <td className="px-5 py-5  text-sm whitespace-nowrap inline-flex items-center gap-2">
                                                    <img
                                                        src={
                                                            video.videoThumbnail
                                                        }
                                                        width={80}
                                                        height={50}
                                                        alt=""
                                                        className="rounded-lg"
                                                    />
                                                    <p className="text-[#101828] font-medium">
                                                        {video.title}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm">
                                                    <div className="relative font-normal inline-block leading-tight ">
                                                        <span
                                                            className={`text-xs px-2 py-1 rounded-2xl ${
                                                                video.publishStatus !=
                                                                "PUBLISHED"
                                                                    ? "text-[#344054] bg-[#EBECED]"
                                                                    : "text-[#175CD3] bg-[#EFF8FF]"
                                                            }`}
                                                        >
                                                            {
                                                                video.publishStatus
                                                            }
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5  text-sm">
                                                    <p>
                                                        {dateFormat(
                                                            video.createdAt
                                                        )}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5  text-sm">
                                                    <p>
                                                        {video?.analytics
                                                            ?.totalvideoviews ||
                                                            0}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5  text-sm">
                                                    <p>
                                                        {video?.analytics
                                                            ?.creatorearnings ||
                                                            0}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5  text-sm">
                                                    <p>{0}</p>
                                                </td>
                                                <td className="px-5 py-5  text-sm">
                                                    <div className="flex items-center gap-3">
                                                        <span className="inline-flex  items-center gap-1">
                                                            <ThumbsUpIcon />{" "}
                                                            {video?.analytics
                                                                ?.totallikes ||
                                                                0}
                                                        </span>
                                                        <span className="inline-flex  items-center gap-1">
                                                            <ThumbsDownIcon />{" "}
                                                            {video?.analytics
                                                                ?.totaldislikes ||
                                                                0}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5  text-sm">
                                                    <DotsDropdown
                                                        video={video}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                {/* </div> */}
                            </table>
                        </div>
                        {/* <div className="flex items-center justify-between w-full mt-7 py-4 px-5 gap-3 pagination border-t border-gray-200">
                            <div>
                                <div className="text-neutral700 text-sm">
                                    Page 1 of 10
                                </div>
                            </div>
                            <div className="space-x-3">
                                <button
                                    className="bg-white p-2 rounded-lg border border-[#D0D5DD]"
                                    disabled
                                >
                                    previous
                                </button>
                                <button className="bg-white p-2 rounded-lg border border-[#D0D5DD]">
                                    next
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
