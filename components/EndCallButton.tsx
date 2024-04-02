"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
    const call = useCall();
    const rounter = useRouter();
    if (!call)
        throw new Error(
            "useStreamCall must be used within a StreamCall component."
        );
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();

    const isMeetingOwner =
        localParticipant &&
        call.state.createdBy &&
        localParticipant.userId === call.state.createdBy.id;

    if (!isMeetingOwner) return null;
    const endCall = async () => {
        await call.endCall();
        rounter.push("/");
    };

    return (
        <Button onClick={endCall} className=" bg-red-700">
            EndCallButton
        </Button>
    );
};

export default EndCallButton;