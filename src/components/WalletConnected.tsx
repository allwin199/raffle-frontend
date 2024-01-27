"use client";

import LotteryEntrance from "./LotteryEntrance";
import { useAccount } from "wagmi";

const WalletConnected = () => {
    const { isConnected } = useAccount();

    return (
        <div className="px-20 py-4">
            {!isConnected ? (
                <div>Connect your wallet to take part in the Raffle.</div>
            ) : (
                <LotteryEntrance />
            )}
        </div>
    );
};

export default WalletConnected;
