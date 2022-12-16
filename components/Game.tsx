import { NextPage } from "next";
import { useEffect, useState } from "react";
import Select from "react-select";
import gameService from "../services/gameService";
import socketService from "../services/socketService";

const Game: NextPage = () => {
    const Numbers = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
        { value: 7, label: "7" },
        { value: 8, label: "8" },
        { value: 9, label: "9" },
        { value: 10, label: "10" },
    ];
    const [selectedOptions, setSelectedOptions] = useState(null);
    const [selectedOptions2, setSelectedOptions2] = useState(null);
    const [playerOneMove, setPlayerOneMove] = useState(true);
    const setHandle = (e) => {
        setSelectedOptions(Array.isArray(e) ? e.map((number) => number.value) : []);
        setPlayerOneMove(!playerOneMove);
    };
    const setHandle2 = (e) => {
        setPlayerOneMove(!playerOneMove);
        setSelectedOptions2(Array.isArray(e) ? e.map((number) => number.value) : []);
    };

    // const handleUpdate = () => {
    //     if (socketService.socket) {
    //         gameService.updateGame(socketService.socket, selectedOptions, selectedOptions2);
    //     }
    // }

    // const handleGameUpdate = () => {
    //     if (socketService.socket)
    //         gameService.onGameUpdate(socketService.socket, (newMatrix1, newMatrix2) => {
    //             setSelectedOptions(newMatrix1);
    //             setSelectedOptions2(newMatrix2);
    //             // setPlayerTurn(true);
    //         });
    // };

    // useEffect(() => {
    //     handleGameUpdate();
    // }, []);

    return (
        <div className="columns-2 hover:columns-2">
            <div className='w-full h-screen text-center'>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div>
                        <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                                Player 1
                            </h5>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Select 5 numbers</p>
                            <ul className="my-4 space-y-3">
                                <li>
                                    {/* {numbers.map((number) => (
                                        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                            <span className="flex-1 ml-3 whitespace-nowrap">{number}</span>
                                        </a>
                                    ))} */}
                                    <Select id="selectWarna"
                                        instanceId="selectWarna"
                                        isMulti
                                        name="colors"
                                        className="basic-multi-select"
                                        classNamePrefix="select" options={Numbers} onChange={setHandle}
                                        isDisabled={!playerOneMove} />
                                </li>
                                {/* <div>{selectedOptions}</div> */}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div>
                        <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                                Player 2
                            </h5>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Select 5 numbers</p>
                            <ul className="my-4 space-y-3">
                                <li>
                                    {/* {numbers.map((number) => (
                                        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                            <span className="flex-1 ml-3 whitespace-nowrap">{number}</span>
                                        </a>
                                    ))} */}
                                    <Select id="selectWarna2"
                                        instanceId="selectWarna2"
                                        isMulti
                                        name="colors"
                                        className="basic-multi-select"
                                        classNamePrefix="select" options={Numbers} onChange={setHandle2}
                                        isDisabled={playerOneMove} />
                                </li>
                                {/* <div>{selectedOptions}</div> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Game