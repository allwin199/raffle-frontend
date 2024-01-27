export const abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "entranceFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "interval",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "vrfCoordinatorAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "subscriptionId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "gasLane",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "callbackGasLimit",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "checkUpkeep",
        inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        outputs: [
            {
                name: "upkeepNeeded",
                type: "bool",
                internalType: "bool",
            },
            { name: "", type: "bytes", internalType: "bytes" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "enterRaffle",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "getEntranceFee",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getLastWinnerPickedTimeStamp",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getNumPlayers",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getPlayer",
        inputs: [
            {
                name: "playerIndex",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRaffleState",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRecentWinner",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "performUpkeep",
        inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "rawFulfillRandomWords",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "randomWords",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "EnteredRaffle",
        inputs: [
            {
                name: "player",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PickedWinner",
        inputs: [
            {
                name: "winner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RequestedRaffleWinner",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "OnlyCoordinatorCanFulfill",
        inputs: [
            {
                name: "have",
                type: "address",
                internalType: "address",
            },
            { name: "want", type: "address", internalType: "address" },
        ],
    },
    { type: "error", name: "OnlySimulatedBackend", inputs: [] },
    { type: "error", name: "Raffle__NotEnoughETHSent", inputs: [] },
    { type: "error", name: "Raffle__NotOpen", inputs: [] },
    {
        type: "error",
        name: "Raffle__Sending_RaffleAmountTo_WinnerFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "Raffle__UpkeepNotNeeded",
        inputs: [
            {
                name: "currentBalance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "numPlayers",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "raffleState",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
];
