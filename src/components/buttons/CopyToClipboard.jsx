import { React, useState } from 'react';

export default function CopyToClipboard(props) {
    const { toast } = props.callbacks;
    const [buttonState, setButtonState] = useState(false);
    
    //Render
    return (
        <button
            className='btn btn-outline-primary fs-6'
            type='button'
            data-bs-toggle="tooltip"
            title="Copy to clipboard"
            data-bs-placement="right"
            onClick={() => {
                //Copy contents to clipboard
                navigator.clipboard.writeText(props.copyContent);

                //Update button state
                setButtonState(() => {
                    //Flip back to original state after a short period of time
                    //Note: useing setButtonState(currentState) causes the button to flip incorrectly of the button is pressed too many times in quick succession
                    setTimeout(() => {
                        setButtonState(false);
                    }, 2000);

                    //Flip button state
                    return true;
                })

                toast("Copied!")
            }}
        >
            {
                (buttonState === false)
                    ? <i className="bi bi-clipboard-fill"></i>
                    : <i className="bi bi-clipboard-check-fill"></i>
            }
        </button>
    );
}