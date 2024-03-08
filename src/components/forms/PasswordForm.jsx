//React
import { React } from "react";
import { Form, Button, Container, Row, Col, Badge, ProgressBar } from "react-bootstrap";

//Components
import PasswordLengthRange from "../inputs/PasswordLengthRange";
import StartsWithInput from "../inputs/StartsWithInput";
import EndsWithInput from "../inputs/EndsWithInput";
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
            The password strength is calculated using zxcvbn, an open-source solution used by Dropbox, rather than an arbitrary number of digits, symbols or letters. Read more about zxcvbn <a href="https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler" target="_blank">here</a>.
        </p>
    );
    return (
        <Form
            onSubmit={(event) => {
                handleSubmit(event);
            }}
        >
            <Container>
                <Row>
                    <Col className="mb-3">
                        <PasswordLengthRange
                            formData={formData}
                            callbacks={{ handleChange }}
                        />
                    </Col>
                </Row>

                <Row className="gy-3 mb-3">
                    <Col xs="12">
                        <StartsWithInput
                            formData={formData}
                            callbacks={callbacks}
                        />
                    </Col>
                    <Col xs="12">
                        <EndsWithInput
                            formData={formData}
                            callbacks={callbacks}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" className="mb-2">
                        <ResultInput formData={formData} />
                    </Col>
                    <Col xs="12" className="mb-1">
                        <div>
                            <h3 className="fs-6 text-capitalize">
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
                                        className="mx-1 clickable"
                                    >
                                        ?
                                    </Badge>
                                </OverlayPopover>
                                <Badge
                                    pill
                                    bg={passwordStrength.colorVariant}
                                    className="mx-1"
                                >
                                    {passwordStrength.text}
                                </Badge>
                            </h3>
                        </div>
                        <ProgressBar
                            now={passwordStrength.value}
                            variant={passwordStrength.colorVariant}
                        />
                        <div className="mt-1 fs-7 text-danger">
                            <ul>
                                {
                                    passwordStrength.feedback.map((element, index) => {
                                        return <li key={index}>{element}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-start align-items-start mb-3">
                        <div className="me-3">
                            <Button
                                variant="primary"
                                type="submit"
                                className="me-2"
                            >
                                Generate Password
                            </Button>
                        </div>
                        <CopyToClipboard
                            copyContent={formData.result}
                            callbacks={callbacks}
                        />
                        <ShowHidePassword callbacks={callbacks} />
                    </Col>
                    <Col xs="12" sm="6" className="mb-2">
                        <Options
                            formData={formData}
                            callbacks={callbacks}
                        />
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}