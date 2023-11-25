//React
import { React } from "react";

export default function PasswordLengthRange(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;
    return (
        <div className='d-flex flex-column'>
            <label htmlFor="password-range-input">
                Password Length
                <span className='badge bg-primary ms-1'>{formData.passwordLength}</span>
            </label>
            <input
                type="range"
                name="passwordLength"
                id="password-range-input"
                value={formData.passwordLength}
                onChange={handleChange}
                min={6}
                max={100}
            />
        </div>
    );
}