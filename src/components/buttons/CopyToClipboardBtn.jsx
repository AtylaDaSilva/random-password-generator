import { React, useState } from 'react';

export default function CopyToClipboardBtn(props) {
    const { bootstrap } = props.modules;
    /**
     * Updates button image and sets a timeout to revert the image back after a delay.
     */
    function handleButtonClick() { 
        navigator.clipboard.writeText(props.copyContent)
            .then(() => { 
                setCopyButtonImage(() => {
                    //Change button image back to original state after a delay
                    setTimeout(() => {
                        setCopyButtonImage(
                            //Could've used the old state passed as argument by setCopyButtonImage instead of hardcoding the SVG but I kept running into a bug that prevented the image to change back when the copy to clipboard button was clicked too many times in a short period of time
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-clipboard"
                                width="32"
                                height="32"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        );
                    }, 3000)
        
                    //Update button image to a new state
                    return (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-clipboard-check"
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                        </svg>
                    );
                });

                //Show bootstrap toast
                const toastElement = document.querySelector("#copyToClipboardToast");
                if (toastElement) { 
                    const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
                    toast.show();
                }
            })
    }

    //Default button image state
    const [copyButtonImage, setCopyButtonImage] = useState(() => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-clipboard"
                width="32"
                height="32"
                viewBox="0 0 16 16"
            >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
        );
    });
    
    //Render
    return (
        <button
            id='copy-to-clipboard-btn'
            className='copy-to-clipboard-btn'
            type='button'
            data-bs-toggle="tooltip"
            title="Copy to clipboard"
            data-bs-placement="right"
            onClick={handleButtonClick}
        >
            { copyButtonImage }
        </button>
    );
}