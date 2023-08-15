'use client'
import Link from "next/link";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Switch } from '@radix-ui/react-switch';

export default function Header() {
    const [isDarkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const isDark = document.body.classList.contains('dark');
        setDarkMode(isDark);
    }, []);
    function toggle() {
        document.body.classList.toggle('dark');
        setDarkMode(!isDarkMode);
    }
    const linkstyle = "text-gray-800 px-2 py-1 align-middle font-semibold cursor-pointer dark:text-gray-300 rounded-lg transition-colors hover:bg-green-500";

    const listItemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1, x: 0,
        },
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.2,
            },
        },
    };
    const ulVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        },
        
    };

    return (
        <header className="flex justify-between fixed w-full items-center p-6">
            <img className="h-10" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2Fc9%2Fc9fbedf520b978739575e8984381d309.png" alt="" />
            <motion.ul variants={ulVariant} initial="hidden" animate="visible" className="flex space-x-4 items-center">
                <motion.li variants={listItemVariant} whileHover="hover" className={linkstyle}>
                    <Link href='/'>Page 1</Link>
                </motion.li>
                <motion.li variants={listItemVariant} whileHover="hover" className={linkstyle}>
                    <Link href='/'>Page 2</Link>
                </motion.li>
                <motion.li variants={listItemVariant} whileHover="hover" className={linkstyle}>
                    <Link href='/'>Page 3</Link>
                </motion.li>
                <Switch onCheckedChange={toggle} className="relative w-11 h-6 rounded-full bg-zinc-300 transition-colors flex justify-start items-center">
                    <span className={`${isDarkMode ? ' translate-x-5 bg-zinc-900 text-zinc-300'  : ' text-zinc-900 translate-x-1 bg-yellow-400'
                        } flex justify-center items-center w-5 h-5 transform rounded-full transition-transform`} >    {isDarkMode ? <MoonIcon className="h-3 w-3" /> : <SunIcon className="h-3 w-3" />}</span>
                </Switch>
                <HamburgerMenuIcon />
            </motion.ul>
        </header>
    )
}
