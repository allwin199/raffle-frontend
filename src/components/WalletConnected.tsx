"use client";

import LotteryEntrance from "./LotteryEntrance";
import { useAddress } from "@thirdweb-dev/react";

const WalletConnected = () => {
    const address = useAddress();

    return (
        <div className="px-20 py-4">
            {!address ? (
                <div>Connect your wallet to take part in the Raffle.</div>
            ) : (
                <LotteryEntrance />
            )}
        </div>
    );
};

export default WalletConnected;
