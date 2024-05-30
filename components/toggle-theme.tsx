"use client"
import { useTheme } from "next-themes"
import { useState } from "react"

const ToggleTheme = () => {
    const { setTheme } = useTheme()
    const [dark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark((prevIsDark) => (!prevIsDark));
        setTheme(dark ? "dark" : "light");
        console.log("theme", dark ? "dark" : "light");
    };

    return (
        <div className="">
            <button className="" onClick={toggleTheme}>
                Theme
            </button>
        </div>
    )
}

export default ToggleTheme