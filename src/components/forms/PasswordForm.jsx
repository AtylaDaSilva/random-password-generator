//React
import { React } from "react";

//Components
import PasswordLengthRange from "../inputs/PasswordLengthRange";
import StartsWithInput from "../inputs/StartsWithInput";
import EndsWithInput from "../inputs/EndsWithInput";
import ResultInput from "../inputs/ResultInput";
import Options from "../accordions/Options";
import CopyToClipboard from '../buttons/CopyToClipboard';

export default function PasswordForm(props) {
    const { formData } = props;
    const { handleChange, handleSubmit } = props.callbacks;
    return (
        <form
            onSubmit={handleSubmit}
            className='container h-100 w-100'
        >
            { /*Row 01 */}
            <div className="row mb-3">
                <div className="col">
                    <div id="password-length-container">
                        <PasswordLengthRange
                            formData={formData}
                            callbacks={{ handleChange }}
                        />
                    </div>
                </div>
            </div>

            { /*Row 02 */}
            <div className="row mb-3">
                <div className="col">
                    <div className='d-flex flex-column'>
                        <StartsWithInput
                            formData={formData}
                            callbacks={props.callbacks}
                        />
                        <EndsWithInput
                            formData={formData}
                            callbacks={props.callbacks}
                        />
                    </div>
                </div>
            </div>

            { /*Row 03 */}
            <div className="row">
                <div className="col-8">
                    <div
                        id="result-container"
                        className='d-flex flex-column justify-content-center align-self-start'
                    >
                        <ResultInput formData={formData} />

                        <div id="submit-container" className='d-flex flex-row align-items-center'>
                            <button className='btn btn-primary me-1' type="submit">
                                Generate Password
                            </button>

                            <CopyToClipboard modules={props.modules} copyContent={formData.result} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div id="options-container">
                        <Options
                            formData={formData}
                            callbacks={props.callbacks}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}