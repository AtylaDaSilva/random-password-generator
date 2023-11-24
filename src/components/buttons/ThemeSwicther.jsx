import { React, useState } from 'react';

export default function ThemeSwicther(props) {
    const [buttonState, setButtonState] = useState(false);
    
    return (
        <button
            className='btn btn-outline-primary mt-2 d-flex'
            data-bs-toggle="tooltip"
            data-bs-title="Change Theme"
            data-bs-placement="bottom"
            onClick={() => {
                //Update state
                setButtonState(currentState => !currentState);

                //Set the data-bs-theme attribute of the html element
                const htmlElement = document.querySelector("html");
                const currentTheme = htmlElement.getAttribute("data-bs-theme");
                
                htmlElement.setAttribute("data-bs-theme", (currentTheme === "dark") ? "light" : "dark");
            }}
                
        >
            {
                (buttonState)
                    ? <i class="bi bi-brightness-high-fill"></i>
                    : <i class="bi bi-moon-stars-fill"></i>
            }
        </button>
    );
}