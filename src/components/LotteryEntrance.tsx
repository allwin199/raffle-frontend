"use client";

import { ethers } from "ethers";
import {
    useWriteContract,
    useReadContracts,
    useWaitForTransactionReceipt,
} from "wagmi";
import { abi } from "../../const/abi";
import { BigNumberish } from "ethers";
import { useEffect } from "react";

const LotteryEntrance = () => {
    const {
        data: hash,
        isPending: isTransactionPending,
        writeContract,
    } = useWriteContract();
    const contractAddress = "0xA4ef0128E0BD906c1d3D3AF704861Af1641d4E74";

    let entranceFee;
    let numPlayers;
    let recentWinner;

    const { data, error, isPending, isFetching, refetch } = useReadContracts({
        contracts: [
            {
                abi,
                address: contractAddress,
                functionName: "getEntranceFee",
            },
            {
                abi,
                address: contractAddress,
                functionName: "getNumPlayers",
            },
            {
                abi,
                address: contractAddress,
                functionName: "getRecentWinner",
            },
        ],
    });

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        });

    useEffect(() => {
        if (!isConfirming && isConfirmed) {
            refetch()
                .then(() => {})
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [isConfirming, isConfirmed, refetch]);

    if (isPending) return <div> Raffle Details Loading...</div>;

    if (!isPending && isFetching) return <div> Raffle Details Loading...</div>;

    if (error) return <div>Something went wrong!</div>;

    const [entranceFeeResult, numPlayersResult, recentWinnerResult] =
        data || [];

    function convertBigIntToString(value: BigNumberish) {
        return ethers.formatUnits(value).toString();
    }

    entranceFee = entranceFeeResult.result;
    numPlayers = numPlayersResult.result;
    recentWinner = recentWinnerResult.result?.toString();

    const entranceFeeInEther = convertBigIntToString(
        entranceFee as BigNumberish
    );

    const numberOfPlayers = numPlayers?.toString();

    const enterRaffle = () => {
        writeContract({
            address: contractAddress,
            abi,
            functionName: "enterRaffle",
            value: ethers.parseEther(entranceFeeInEther),
        });
    };

    if (isConfirming) return <div>Waiting for confirmation...</div>;

    return (
        <div>
            <button
                onClick={() => enterRaffle()}
                disabled={isTransactionPending}
                className="border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2"
            >
                {isTransactionPending ? "Entering Raffle..." : "Enter Raffle"}
            </button>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-[#222222] rounded p-6">
                    Entrance Fee
                    <p className="text-sm mt-4">{entranceFeeInEther} ETH</p>
                </div>
                <div className="bg-[#222222] rounded p-6">
                    Number of Players
                    <p className="text-sm mt-4">{numberOfPlayers}</p>
                </div>
                <div className="bg-[#222222] rounded p-6">
                    Recent Winner
                    <p className="text-sm mt-4">
                        {recentWinner?.slice(0, 4)}...
                        {recentWinner?.slice(-6)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LotteryEntrance;
