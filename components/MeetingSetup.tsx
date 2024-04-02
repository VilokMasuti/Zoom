import {
    Call,
    DeviceSettings,
    VideoPreview,
    useCall,
} from "@stream-io/video-react-sdk";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
    setIsSetupComplete,
}: {
    setIsSetupComplete: (Value: boolean) => void;
}) => {
    const call = useCall();

    if (!call) {
        throw new Error(
            "useStreamCall must be used within a StreamCall component."
        );
    }

    // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
    const [isMicCamToggled, setIsMicCamToggled] = useState(false);
    useEffect(() => {
        if (isMicCamToggled) {
            call.camera.disable();
            call.microphone.disable();
        } else {
            call.camera.enable();
            call.microphone.enable();
        }
    }, [isMicCamToggled, call.camera, call.microphone]);
    return (
        <div className=" flex h-screen w-full flex-col items-center justify-center gap-3 text-yellow-1 ">
            <h1 className=" text-2xl font-bold">Setup </h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className=" flex items-center justify-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        checked={isMicCamToggled}
                        onChange={(e) => setIsMicCamToggled(e.target.checked)}
                    ></input>
                    Join with mic and Camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                className=" rounded-md bg-green-500 px-4 py-2.5"
                onClick={() => {
                    call.join();
                    setIsSetupComplete(true);
                }}
            >
                Join meeting
            </Button>
        </div>
    );
};

export default MeetingSetup;
