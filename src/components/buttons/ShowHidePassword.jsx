import { React, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ShowHidePassword(props) {
    const [show, setShow] = useState(false);
    const {toast} = props.callbacks;

    return (
        <Button
            variant='outline-primary'
            className='mx-1'
            data-bs-toggle="tooltip"
            data-bs-title="Show/Hide Password"
            data-bs-placement="bottom"
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
    );
}