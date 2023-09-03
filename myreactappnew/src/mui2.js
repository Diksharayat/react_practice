import { Button, Card, CardContent, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";

export default function Steppers() {

        const [step, setstep] = useState(0)

        const ar = [{ Id: 0, Name: "FORM 1 " },
        { Id: 1, Name: "FORM 2" },
        { Id: 2, Name: "FORM 3" },
        { Id: 3, Name: "FORM 4" },]


        function inre() {
                setstep(step + 1)
        }
        function decre() {
                setstep(step - 1)
        }

        return (
                <>
                        <Stepper activeStep={step}>
                                <Step>
                                        <StepLabel>FORM1</StepLabel>
                                </Step>
                                <Step>
                                        <StepLabel>FORM 2</StepLabel>
                                </Step>
                                <Step>
                                        <StepLabel>FORM 3</StepLabel>
                                </Step>
                                <Step>
                                        <StepLabel>FORM 4</StepLabel>
                                </Step>
                        </Stepper>

                        <Card>
                                <CardContent>
                                        {ar.map((row) => (
                                                <>
                                                        {row.Id == step && (
                                                                <>
                                                                        {row.Name}
                                                                </>
                                                        )}

                                                </>
                                        ))}
                                </CardContent>
                        </Card>

                        {(step <= 0) ? (

                                <Button onClick={inre}>next</Button>
                        ) : (
                                <>
                                        <Button onClick={decre}>prev</Button>
                                        <Button onClick={inre}>next</Button>
                                </>
                        )}

                        {(step == ar.length) &&
                                <>
                                        <Button>finish</Button>
                                </>
                        }

                </>
        )
}