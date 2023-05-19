import React from "react";
import Layout from "@/components/CreatorLayout/Layout";
import UploadVideoForm from "@/components/Form/UploadVideoForm";

const UploadVideo = () => {
    return (
        <Layout>
            <div className="pb-20">
                <div className="grow py-2 mb-3">
                    <h1 className="text-xl font-medium">Upload video</h1>
                    <p className="text-[#7F8691] text-base">
                        Add your videos to zesha to start earning
                    </p>
                </div>
                <UploadVideoForm />
            </div>
        </Layout>
    );
};

export default UploadVideo;
