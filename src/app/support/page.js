import Layout from '@/components/layout/Layout';

export default function Support() {
  return (
    <>
      <Layout>
        <section className=" py-12 lg:py-28 bg-[#FAF9F4]">
          <div className="container mx-auto px-6 max-w-7xl w-full">
            <div className="items-center justify-center flex max-w-xl mx-auto">
              <div className="w-full text-center">
                <div>
                  <h1 className="text-7xl font-bold font-['Recoleta'] text-[#0B0A1D]">
                    Let&apos;s start earning{' '}
                    <span className="text-[#F93D3D]">together</span>
                  </h1>
                </div>
                <div className="mb-10 mt-5">
                  <p className="text-md">
                    Need some help with your Zesha account, or just want to say
                    hi to our team?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-7 py-12 my-5">
          <div className="flex items-center justify-between w-full py-8 px-8 max-w-7xl mx-auto container flex-wrap shadow-md gap-2 ">
            <div className="">
              <h1 className="font-['Recoleta'] text-2xl font-semibold">
                Thought of something we can do better?
              </h1>
            </div>

            <button className="rounded-lg px-5 py-4 text-md bg-[#046ED1] text-white border border-[#046ED1]">
              Suggest a feature
            </button>
          </div>

          <div className="flex items-center justify-between w-full py-8 px-8 max-w-7xl mx-auto container flex-wrap shadow-md gap-2">
            <div className="">
              <h1 className="font-['Recoleta'] text-2xl font-semibold">
                Zesha not working properly for you?
              </h1>
            </div>

            <button className="rounded-lg px-5 py-4 text-md bg-[#046ED1] text-white border border-[#046ED1]">
              Report a problem
            </button>
          </div>
          <div className="flex items-center justify-between w-full py-8 px-8 max-w-7xl mx-auto container flex-wrap shadow-md gap-2">
            <div className="">
              <h1 className="font-['Recoleta'] text-2xl font-semibold">
                Still got something to say? Drop us a message
              </h1>
            </div>

            <button className="rounded-lg px-5 py-4 text-md bg-[#046ED1] text-white border border-[#046ED1]">
              support@zesha.io{' '}
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
