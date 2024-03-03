//React
import { React } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

//Components
import PasswordLengthRange from "../inputs/PasswordLengthRange";
import StartsWithInput from "../inputs/StartsWithInput";
import EndsWithInput from "../inputs/EndsWithInput";
import ResultInput from "../inputs/ResultInput";
import Options from "../accordions/Options";
import CopyToClipboard from '../buttons/CopyToClipboard';
import ShowHidePassword from "../buttons/ShowHidePassword";

export default function PasswordForm(props) {
    const { formData } = props;
    const { handleChange, handleSubmit, toast } = props.callbacks;
    return (
        <form
            onSubmit={(event) => {
                handleSubmit(event);
                toast("Password generated successfully!");
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
                            callbacks={props.callbacks}
                        />
                    </Col>
                    <Col xs="12">
                        <EndsWithInput
                            formData={formData}
                            callbacks={props.callbacks}
                        />
                    </Col>
                </Row>

                <Row className="gy-3">
                    <Col xs="12">
                        <ResultInput formData={formData} />
                    </Col>
                    <Col className="d-flex justify-content-start align-items-start">
                        <div className="me-3">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Generate Password
                            </Button>
                        </div>
                        <CopyToClipboard modules={props.modules} copyContent={formData.result} callbacks={props.callbacks} />
                        <ShowHidePassword callbacks={props.callbacks} />
                    </Col>
                    <Col xs="12" sm="6">
                        <Options
                            formData={formData}
                            callbacks={props.callbacks}
                        />
                    </Col>
                </Row>
            </Container>
        </form>
    );
}