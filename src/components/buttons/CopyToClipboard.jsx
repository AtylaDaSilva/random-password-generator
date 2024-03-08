import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import OverlayTooltip from '../overlays/OverlayTooltip';

export default function CopyToClipboard({ copyContent, btnVariant, tooltip, className, callbacks }) {
    const { toast } = callbacks;
    const [buttonState, setButtonState] = useState(false);

    //Render
    return (
        (tooltip)
            ? (
                <OverlayTooltip
                    options={{ title: tooltip.title, placement: tooltip.placement || "bottom" }}
                >
                    <Button
                        variant={btnVariant || "primary"}
                        className={className}
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
            )
            : (
                <Button
                    variant={btnVariant || "primary"}
                    className={className}
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
            )
    );
}