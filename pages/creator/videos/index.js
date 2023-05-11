import DotsDropdown from '../../../components/Dropdowns/DotsDropdown';
import ThumbsDownIcon from '../../../components/Icons/ThumbsDownIcon';
import ThumbsUpIcon from '../../../components/Icons/ThumbsUpIcon';
import Layout from '../../../components/Layout/Layout';
import { VideoData } from '../../../utils/data';

export default function Videos() {
  console.log(VideoData);
  return (
    <Layout>
      <div>
        <div className="grow py-2 mb-3">
          <h1 className="text-xl font-medium">Videos</h1>
          <p className="text-[#7F8691] text-base">All your uploaded videos</p>
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
                        <td className="px-5 py-5  text-sm whitespace-nowrap">
                          <p>{video.title}</p>
                        </td>
                        <td className="px-5 py-5 text-sm">
                          <div className="relative  flex items-center md:justify-start font-normal inline-block text-successGreen600 leading-tight ">
                            {video.status}
                          </div>
                        </td>
                        <td className="px-5 py-5  text-sm">
                          <p>{video.date_uploaded}</p>
                        </td>
                        <td className="px-5 py-5  text-sm">
                          <p>{video.views}</p>
                        </td>
                        <td className="px-5 py-5  text-sm">
                          <p>{video.earnings}</p>
                        </td>
                        <td className="px-5 py-5  text-sm">
                        <p>{video.tips}</p>
                        </td>
                        <td className="px-5 py-5  text-sm">
                          <div className='flex items-center gap-3'>
                            <span className='inline-flex  items-center gap-1'>
                              <ThumbsUpIcon/> {video.up_votes}
                            </span>  
                            <span className='inline-flex  items-center gap-1'>
                              <ThumbsDownIcon/> {video.down_votes}
                            </span>  
                          </div>
                        </td>
                        <td className="px-5 py-5  text-sm">
                          <DotsDropdown video={video}/>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* </div> */}
              </table>
            </div>
            <div className="flex items-center justify-between w-full mt-7 py-4 px-5 gap-3 pagination border-t border-gray-200">
              {/* <div> */}
              <div className="text-neutral700 text-sm">Page 1 of 10</div>

              {/* </div> */}
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
