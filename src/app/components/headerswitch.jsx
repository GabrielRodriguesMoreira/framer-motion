import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Switch } from '@radix-ui/react-switch';

export default function HeaderSwitch({ isDarkMode, setDarkMode }) {
    function toggle() {
        document.body.classList.toggle('dark');
        const newDarkMode = !isDarkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('theme', String(newDarkMode))
    }

    return (
        <Switch
            onCheckedChange={toggle}
            className={`relative w-11 h-6 rounded-full ${isDarkMode ? 'bg-orange-400' : 'bg-pink-400'
                } transition-colors flex justify-start items-center`}
        >
            <span
                className={`${isDarkMode ? 'translate-x-5 bg-amber-950 text-orange-400' : 'text-pink-400 translate-x-1 bg-white'
                    } flex justify-center items-center w-5 h-5 p-1 transform rounded-full transition-transform`}
            >
                {isDarkMode ? <MoonIcon  /> : <SunIcon />}
            </span>
        </Switch>
    )

}