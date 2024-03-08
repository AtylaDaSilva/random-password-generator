import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import OverlayTooltip from '../overlays/OverlayTooltip';

export default function ShowHidePassword({ callbacks }) {
    const [show, setShow] = useState(false);
    const { toast } = callbacks;
    return (
        <OverlayTooltip
            options={{ title: (!show ? "Show" : "Hide"), placement: "bottom" }}
        >
            <Button
                variant='outline-primary'
                className='mx-1'
                onClick={() => {
                    //Get result input reference and change type according to state
                    const result_input = document.querySelector("#result-input");
                    if (result_input) {
                        result_input.type = (!show) ? "text" : "password";
                        setShow(!show);
                        toast(`${(show) ? "Hiding" : "Showing"} password`);
                    }
                }}
            >
                {
                    (!show)
                        ? <i className="bi bi-eye-slash"></i>
                        : <i className="bi bi-eye-fill"></i>
                }
            </Button>
        </OverlayTooltip>
    );
}