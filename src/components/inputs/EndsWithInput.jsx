//React
import { React } from "react";

export default function EndsWithInput(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    return (
        <div className="form-floating">
            <input
                type="text"
                name="endsWith"
                id="ends-with-input"
                className='form-control'
                placeholder='Starts with'
                value={formData.endsWith}
                onChange={handleChange}
            />
            <label htmlFor="starts-with-input">Ends with</label>
        </div>
    );
}