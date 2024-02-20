//React
import { React } from "react";

export default function ResultInput(props) {
    const { formData } = props;

    return (
        <div className="form-floating flex-grow-1 mb-2">
            <input
                type="password"
                name="result"
                id="result-input"
                className='form-control'
                placeholder='Result'
                value={formData.result}
                readOnly
            />
            <label htmlFor="result-input">Result</label>
        </div>
    );
}