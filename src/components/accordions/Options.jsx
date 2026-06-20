//React
import React from "react";
import { Form } from "react-bootstrap";

export default function Options(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    const optionItems = [
        { label: "Numbers", id: "numbers-input", name: "hasNumbers", checked: formData.options.hasNumbers },
        { label: "Symbols", id: "symbols-input", name: "hasSymbols", checked: formData.options.hasSymbols },
        { label: "Uppercase Letters", id: "upper-case-letters-input", name: "hasUpperCase", checked: formData.options.hasUpperCase },
        { label: "Lowercase Letters", id: "lower-case-letters-input", name: "hasLowerCase", checked: formData.options.hasLowerCase }
    ];

    return (
        <div className="options-grid">
            {optionItems.map((item) => (
                <div key={item.id} className="option-switch-card">
                    <Form.Check
                        type="switch"
                        label={item.label}
                        id={item.id}
                        name={item.name}
                        checked={item.checked}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );
}