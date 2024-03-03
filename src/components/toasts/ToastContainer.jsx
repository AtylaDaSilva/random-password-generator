//React
import { React } from "react";

export default function ToastContainer(props) {
    const { toastText } = props;
    return (
        <div id="toast-container">
            <div
                id='toast'
                className="toast border-primary align-self-end align-items-center"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex">
                    <div className="toast-body">
                        { toastText }
                    </div>
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    );
}