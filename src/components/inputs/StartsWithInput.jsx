//React
import { React } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

export default function StartsWithInput(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    return (
        <FloatingLabel label="Starts with">
            <Form.Control
                type="text"
                name="startsWith"
                id="starts-with-input"
                placeholder='Starts with'
                value={formData.startsWith}
                onChange={handleChange}
            />
        </FloatingLabel>
    );
}