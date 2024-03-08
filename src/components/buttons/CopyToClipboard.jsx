import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import OverlayTooltip from '../overlays/OverlayTooltip';

export default function CopyToClipboard({ copyContent, callbacks }) {
    const { toast } = callbacks;
    const [buttonState, setButtonState] = useState(false);
    
    //Render
    return (
        <OverlayTooltip
            options={{ title: "Copy", placement: "bottom" }}
        >
            <Button
                variant='outline-primary'
                className='fs-6 mx-1'
                type='button'
                onClick={() => {
                    //Copy contents to clipboard
                    navigator.clipboard.writeText(copyContent);
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
                    toast("Copied!");
                }}
            >
                {
                    (buttonState === false)
                        ? <i className="bi bi-clipboard"></i>
                        : <i className="bi bi-clipboard-check-fill"></i>
                }
            </Button>
        </OverlayTooltip>
    );
}