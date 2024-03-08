//React
import { React } from "react";
import { Form, Badge } from "react-bootstrap";

export default function PasswordLengthRange(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;
    return (
        <div className='d-flex flex-column'>
            <Form.Label>
                Password Length
                <Badge pill bg="primary" className="ms-1">{formData.passwordLength}</Badge>
            </Form.Label>
            <Form.Range
                name="passwordLength"
                id="password-range-input"
                value={formData.passwordLength}
                onChange={handleChange}
                min={20}
                max={100}
            />
        </div>
    );
}