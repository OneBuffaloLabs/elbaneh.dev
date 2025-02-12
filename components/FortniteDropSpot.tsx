import { useEffect, useState } from "react";
//Components
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes-react19";
import { LoadingLetters } from "@/components/_silabs/LoadingLetters";
//Utils
import { sendEvent } from "@/utils/gtag";

interface FortniteDropSpotProps {
    map: string;
    ga_label: string;
    button_key: string;
    mapInfo: string[];
}

function FortniteDropSpot({ map, button_key, ga_label, mapInfo }: FortniteDropSpotProps) {
    const ga_button_id = `${button_key}DropSpot_rollSpot`;
    const ga_label_id = `${ga_label}_FortniteDropSpot`;
    const [isLoading, setIsLoading] = useState(false);
    const [spinResult, setSpinResult] = useState("????");
    const segColors = [
        "#329337",
        "#9D4EBB",
    ];

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const onFinished = (winner: string) => {
        // sendEvent("button_click", {
        //     button_id: ga_button_id,
        //     label: ga_label_id,
        //     category: "FortniteDropSpot",
        // });

        setSpinResult(winner);
    };

    const handleClick = async () => {
        // sendEvent("button_click", {
        //     button_id: ga_button_id,
        //     label: ga_label_id,
        //     category: "FortniteDropSpots",
        // });

        setSpinResult(
            mapInfo[Math.floor(Math.random() * mapInfo.length)]
        );
    };

    return (
        <>
            <Container
                id="where-we-dropping"
                className={`shadow-lg p-3 bg-body rounded`}
            >
                <Row className="justify-content-md-center">
                    {isLoading && (
                        <>
                            <Row className="mb-3">
                                <Col sm className="text-center mb-4 mb-md-0">
                                    <span className="fw-bolder fs-5">Map:</span> <br />
                                    <span className="text-muted fs-6">
                                        {map}
                                    </span>
                                </Col>
                                <Col sm className="text-center">
                                    <span className="fw-bolder fs-5">Winner:</span> <br />
                                    <span className="text-muted fs-6">
                                        <LoadingLetters
                                            text={spinResult}
                                            loadingDuration={5000}
                                            interval={100}
                                            className="loading-text"
                                        />
                                    </span>
                                </Col>
                            </Row>
                            <Col
                                lg={12}
                                className="d-flex justify-content-center d-none d-md-flex"
                            >
                                <WheelComponent
                                    segments={mapInfo}
                                    segColors={segColors}
                                    winningSegment="random"
                                    onFinished={(winner) => onFinished(winner)}
                                    primaryColor="black"
                                    contrastColor="white"
                                    buttonText="Spin"
                                    isOnlyOnce={false}
                                    size={300}
                                    upDuration={200}
                                    downDuration={600}
                                    randomWinningSegment={true}
                                />
                            </Col>
                            <Col xs md="8" lg="6" className="text-center mt-5 mt-md-0">
                                <div className="d-flex justify-content-center">
                                    <Button
                                        variant="success"
                                        onClick={handleClick}
                                        className="w-50 me-2 d-block d-md-none"
                                    >
                                        Randomize Spot
                                    </Button>
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default FortniteDropSpot;
