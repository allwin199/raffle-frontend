"use client";

import { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const LotteryEntrance = () => {
    const [enteringRaffle, setEnteringRaffle] = useState(false);

    const { contract } = useContract(
        "0xA4ef0128E0BD906c1d3D3AF704861Af1641d4E74"
    );

    const {
        data: recentWinner,
        isLoading: recentWinnerLoading,
        isSuccess: recentWinnerSuccess,
    } = useContractRead(contract, "getRecentWinner");

    const {
        data: entranceFee,
        isLoading: entranceFeeLoading,
        isSuccess: entranceFeeSuccess,
    } = useContractRead(contract, "getEntranceFee");

    const {
        data: numPlayers,
        isLoading: numPlayersLoading,
        isSuccess: numPlayersSuccess,
        refetch: refetchPlayers,
    } = useContractRead(contract, "getNumPlayers");

    const enterRaffle = async () => {
        setEnteringRaffle(true);
        try {
            const data = await contract?.call("enterRaffle", [], {
                value: entranceFee,
            });
            console.info("contract call successs", data);
            refetchPlayers();
        } catch (err) {
            console.error("contract call failure", err);
        } finally {
            setEnteringRaffle(false);
        }
    };

    return (
        <div>
            <button
                onClick={() => enterRaffle()}
                disabled={enteringRaffle}
                className="border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2"
            >
                {!enteringRaffle ? "Enter Raffle" : "Entering..."}
            </button>

            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-[#222222] rounded p-6">
                    Entrance Fee
                    {!entranceFeeLoading && entranceFeeSuccess ? (
                        <p className="text-sm mt-4">
                            {ethers.utils.formatEther(entranceFee.toString())}{" "}
                            ETH
                        </p>
                    ) : (
                        <p className="mt-4">Loading...</p>
                    )}
                </div>
                <div className="bg-[#222222] rounded p-6">
                    Number of Players
                    {!numPlayersLoading && numPlayersSuccess ? (
                        <p className="text-sm mt-4">{Number(numPlayers)} </p>
                    ) : (
                        <p className="mt-4">Loading...</p>
                    )}
                </div>
                <div className="bg-[#222222] rounded p-6">
                    Recent Winner
                    {recentWinnerSuccess && !recentWinnerLoading ? (
                        <p className="text-sm mt-4">
                            {recentWinner?.slice(0, 4)}...
                            {recentWinner?.slice(-6)}
                        </p>
                    ) : (
                        <p className="mt-4">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LotteryEntrance;
