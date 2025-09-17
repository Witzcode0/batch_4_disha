import React, { useState } from 'react';

function Theme() {
    const lightTheme = {
        backgroundColor: "white",
        color: "black",
        width: "100%",
        height: "100px",
        border: "10px double black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const darkTheme = {
        backgroundColor: "black",
        color: "white",
        width: "100%",
        height: "100px",
        border: "10px double white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const [isDark, setDark] = useState(false);

    const ThemeToggle = () => {
        setDark(!isDark)
    }

    return (
        <div style={!isDark ? lightTheme : darkTheme}>
            <span>{isDark ? "Dark Theme 🌛" : "Light Theme 🌞"}</span> <br/>
            <button onClick={ThemeToggle}>
                click
            </button>
        </div>
    )
}

export default Theme