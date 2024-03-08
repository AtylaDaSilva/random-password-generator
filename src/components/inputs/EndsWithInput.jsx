//React
import { React } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

export default function EndsWithInput(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    return (
        <FloatingLabel controlId="ends-with-input" label="Ends with">
            <Form.Control
                type="text"
                name="endsWith"
                id="ends-with-input"
                placeholder='Starts with'
                value={formData.endsWith}
                onChange={handleChange}
            />
        </FloatingLabel>
    );
}