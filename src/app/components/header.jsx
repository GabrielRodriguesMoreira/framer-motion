'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
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
    const linkstyle = "text-gray-800 align-middle font-semibold cursor-pointer dark:text-gray-300 transition-colors";
    return (
        <header className="flex justify-between fixed w-full items-center p-6">
            <img className="h-10" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2Fc9%2Fc9fbedf520b978739575e8984381d309.png" alt="" />
            <ul className="flex space-x-5 align-middle">
                <li><Link href='/' className={linkstyle}>Page 1</Link></li>
                <li><Link href='/' className={linkstyle}>Page 2</Link></li>
                <li><Link href='/' className={linkstyle}>Page 3</Link></li>
                <div className="flex space-x-2 items-center text-gray-800 dark:text-gray-300 transition-colors ">
                    <Switch onCheckedChange={toggle} className="relative w-11 h-6 rounded-full bg-zinc-300 transition-colors flex justify-start items-center">
                        <span className={`${isDarkMode ? 'translate-x-5 bg-zinc-900' : ' translate-x-1 bg-yellow-400'
                            } flex justify-center items-center  w-5 h-5 transform rounded-full transition-transform`} >    {isDarkMode ? <MoonIcon className="h-3 w-3" /> : <SunIcon className="h-3 w-3" />}</span>
                    </Switch>
                </div>
            </ul>
        </header>
    )
}
