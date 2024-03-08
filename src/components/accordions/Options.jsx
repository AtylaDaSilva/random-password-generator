//React
import { React } from "react";
import { Accordion, Form } from "react-bootstrap";

export default function Options(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    return (
        <Accordion>
            <Accordion.Item eventKey={0}>
                <Accordion.Header>Options</Accordion.Header>
                <Accordion.Body>
                    <Form.Check
                        type="switch"
                        label="Numbers"
                        id="numbers-input"
                        name='hasNumbers'
                        checked={formData.options.hasNumbers}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="switch"
                        label="Symbols"
                        id="symbols-input"
                        name='hasSymbols'
                        checked={formData.options.hasSymbols}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="switch"
                        label="Upper Case Letters"
                        id="upper-case-letters-input"
                        name='hasUpperCase'
                        checked={formData.options.hasUpperCase}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="switch"
                        label="Lower Case Letters"
                        id="lower-case-letters-input"
                        name='hasLowerCase'
                        checked={formData.options.hasLowerCase}
                        onChange={handleChange}
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}