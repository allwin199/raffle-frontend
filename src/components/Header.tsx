"use client";

import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
    return (
        <div className="px-14 py-2 border-b-2 border-gray-500 flex justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">
                {" "}
                Decentralized Lottery
            </h1>
            <ConnectWallet btnTitle="Connect" />
        </div>
    );
};

export default Header;
