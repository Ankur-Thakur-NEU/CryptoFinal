import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

const Navbar: NextPage = () => {
    const { account, library } = useWeb3React();

    const triedToEagerConnect = useEagerConnect();

    const isConnected = typeof account === "string" && !!library;
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }
    // const address = useAddress();
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image width='125' height='80' src="/../public/striker-logo.png" alt="/" />

                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                {triedToEagerConnect ? <ETHBalance /> : <Account triedToEagerConnect={triedToEagerConnect} />
                                    // {isConnected && (
                                    //     <section>
                                    //         <ETHBalance />

                                    //         <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
                                    //     </section>
                                    // )}
                                }
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image width='87' height='35' src="/../public/striker-logo.png" alt="/" />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-green-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>
                                    {/* <ConnectWallet /> */}
                                    {triedToEagerConnect ? <ETHBalance /> : <Account triedToEagerConnect={triedToEagerConnect} />
                                    }
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration'>
                                    <FaDiscord />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar