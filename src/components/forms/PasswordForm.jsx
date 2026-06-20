//React
import { React } from "react";
import { Form, Button, Container, Row, Col, Badge, ProgressBar } from "react-bootstrap";

//Components
import PasswordLengthRange from "../inputs/PasswordLengthRange";
import ResultInput from "../inputs/ResultInput";
import Options from "../accordions/Options";
import CopyToClipboard from '../buttons/CopyToClipboard';
import ShowHidePassword from "../buttons/ShowHidePassword";
import OverlayPopover from "../overlays/OverlayPopover";

export default function PasswordForm({ state, callbacks }) {
    const { formData, passwordStrength } = state;
    const { handleChange, handleSubmit } = callbacks;

    const passwordStrengthInfo = (
        <p>
            The password strength is calculated using zxcvbn, an open-source solution used by Dropbox, rather than an arbitrary number of digits, symbols or letters. Read more about zxcvbn <a href="https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
    );

    return (
        <Form
            onSubmit={(event) => {
                handleSubmit(event);
            }}
        >
            <Container className="p-0">
                {/* 1. Result input area at the top */}
                <Row className="mb-4">
                    <Col xs="12">
                        <div className="result-group">
                            <ResultInput formData={formData} />
                            <div className="result-actions">
                                <ShowHidePassword
                                    callbacks={callbacks}
                                    className="result-btn"
                                    btnVariant="light"
                                />
                                <CopyToClipboard
                                    className="result-btn"
                                    btnVariant="light"
                                    tooltip={{ title: "Copy", placement: "bottom" }}
                                    copyContent={formData.result}
                                    callbacks={callbacks}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* 2. Password Strength progress bar and feedback */}
                <Row className="mb-4">
                    <Col xs="12">
                        <div className="strength-section">
                            <div className="strength-header">
                                <h3 className="strength-title">
                                    Password Strength
                                    <OverlayPopover
                                        options={{
                                            header: "Password Strength",
                                            body: passwordStrengthInfo,
                                            trigger: "click"
                                        }}
                                    >
                                        <Badge
                                            pill
                                            bg="primary"
                                            className="mx-2 clickable"
                                            style={{ fontSize: '0.7rem', padding: '0.3em 0.6em' }}
                                        >
                                            ?
                                        </Badge>
                                    </OverlayPopover>
                                </h3>
                                <Badge
                                    pill
                                    bg={passwordStrength.colorVariant}
                                    className="strength-badge"
                                >
                                    {passwordStrength.text || "None"}
                                </Badge>
                            </div>
                            <ProgressBar
                                now={passwordStrength.value}
                                variant={passwordStrength.colorVariant}
                            />
                            {passwordStrength.feedback.length > 0 && (
                                <div className="strength-feedback text-danger">
                                    <ul>
                                        {passwordStrength.feedback.map((element, index) => (
                                            <li key={index}>{element}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>

                {/* 3. Length range slider */}
                <Row className="mb-4">
                    <Col xs="12">
                        <div className="range-container">
                            <PasswordLengthRange
                                formData={formData}
                                callbacks={{ handleChange }}
                            />
                        </div>
                    </Col>
                </Row>

                {/* 5. Options toggles directly in view */}
                <Row className="mb-4">
                    <Col xs="12">
                        <h4 className="fs-6 text-uppercase fw-bold text-secondary mb-3" style={{ letterSpacing: '0.75px' }}>
                            Character Settings
                        </h4>
                        <Options
                            formData={formData}
                            callbacks={callbacks}
                        />
                    </Col>
                </Row>

                {/* 6. Primary Action button at the bottom */}
                <Row>
                    <Col xs="12" className="d-grid mt-2">
                        <Button
                            variant="primary"
                            type="submit"
                            className="generate-btn"
                        >
                            Generate Secure Password
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}