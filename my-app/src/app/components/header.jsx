'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

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

    return (
        <header className="fixed w-full h-10 bg-cyan-200 dark:bg-slate-600">
            <button onClick={toggle}>
                <i className="text-xl">
                    {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
                </i>
            </button>
        </header>
    )
}
