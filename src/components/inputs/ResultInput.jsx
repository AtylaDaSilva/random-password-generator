//React
import { React } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

export default function ResultInput(props) {
    const { formData } = props;
    return (
        <FloatingLabel controlId="result-input" label="Result">
            <Form.Control
                type="password"
                name="result"
                id="result-input"
                placeholder='Result'
                value={formData.result}
                readOnly
            />
        </FloatingLabel>
    );
}