import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import OverlayTooltip from '../overlays/OverlayTooltip';

export default function ThemeSwicther(props) {
    const [buttonState, setButtonState] = useState(false);
    return (
        <OverlayTooltip
            options={{
                title: `${(buttonState === false) ? "Light" : "Dark"} Theme`
            }}
        >
            <Button
                variant='outline-primary'
                className='d-flex'
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
                        ? <i className="bi bi-brightness-high-fill"></i>
                        : <i className="bi bi-moon-stars-fill"></i>
                }
            </Button>
        </OverlayTooltip>
    );
}