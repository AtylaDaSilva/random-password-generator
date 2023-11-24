//React
import { React } from "react";

export default function StartsWithInput(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                name="startsWith"
                id="starts-with-input"
                className='form-control'
                placeholder='Starts with'
                value={formData.startsWith}
                onChange={handleChange}
            />
            <label htmlFor="starts-with-input">Starts with</label>
        </div>
    );
}