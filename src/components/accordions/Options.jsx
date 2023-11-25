//React
import { React } from "react";

export default function Options(props) {
    const { formData } = props;
    const { handleChange } = props.callbacks;

    return (
        <div className="accordion" id="options-accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseContainer"
                        aria-expanded="true"
                        aria-controls="collapseContainer"
                    >
                        Options
                    </button>
                </h2>
                <div
                    id="collapseContainer"
                    className="accordion-collapse collapse"
                    data-bs-parent="#options-accordion"
                >
                    <div className="accordion-body">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="numbers-input"
                                name='hasNumbers'
                                checked={formData.options.hasNumbers}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="numbers-input">Numbers</label>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="symbols-input"
                                name='hasSymbols'
                                checked={formData.options.hasSymbols}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="symbols-input">Symbols</label>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="lower-case-letters-input"
                                name='hasLowerCase'
                                checked={formData.options.hasLowerCase}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="lower-case-letters-input">Lower Case Letters</label>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="upper-case-letters-input"
                                name='hasUpperCase'
                                checked={formData.options.hasUpperCase}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="upper-case-letters-input">Upper Case Letters</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}