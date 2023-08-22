'use client'
import Link from "next/link";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import Loading from "../loading";
import HeaderSwitch from "./headerswitch";

export default function Header() {
    const [isDarkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('theme') == 'true') {
            document.body.classList.add('dark');
            setDarkMode(true)
        } else {
            setDarkMode(document.body.classList.contains('dark'));
        }
        setIsLoading(false)
    }, []);
    const linkstyle = `text-pink-500 text-lg px-2 py-1 align-middle font-semibold cursor-pointer dark:text-orange-400 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-orange-400 hover:dark:text-black' : 'hover:bg-pink-400 hover:text-white'}`;
    const ulVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    };
    const listItemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1, x: 0
        },
    };

    return (
        <header className="text flex justify-between fixed w-full items-center p-6 ">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <img className="h-10" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zakarylong.com%2Fwp-content%2Fuploads%2F2013%2F10%2FCupcake-Logo-Stroked.png" alt="" />
                    <motion.ul variants={ulVariant} initial="hidden" animate="visible" className=" flex space-x-5 items-center">
                        <motion.li variants={listItemVariant} className={linkstyle} whileHover={{ scale: 1.2 }}>
                            <Link href="/">Home</Link>
                        </motion.li>
                        <motion.li variants={listItemVariant} className={linkstyle} whileHover={{ scale: 1.2 }}>
                            <Link href="/">Menu</Link>
                        </motion.li>
                        <motion.li variants={listItemVariant} className={linkstyle} whileHover={{ scale: 1.2 }}>
                            <Link href="/">Make a Order</Link>
                        </motion.li>
                        <HeaderSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
                    </motion.ul>
                </>
            )}
        </header>
    )
}
