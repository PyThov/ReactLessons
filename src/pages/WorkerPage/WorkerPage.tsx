import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { getElapsedTime, IMsg } from "../../utils/utils";

export default function WorkerPage() {
    const [value, setValue] = React.useState("")
    const [msg, setMsg] = React.useState<IMsg>()

    if (window.Worker) {
        const myWorker = new Worker("src/worker.js");

        const msgWorker = () => {
            value !== "" && myWorker.postMessage({msg: value, startTime: new Date().toISOString()});
        }

        myWorker.onmessage = function(e) {
          console.log('Client: Message received from worker:', e.data);
          setMsg(e.data)
        }

        return (
            <Container maxWidth="xl" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px"
                }}>
                <Typography variant="h2" sx={{borderBottom: "2px solid #444"}}>Web Worker</Typography>
                <Typography>Open console... (F12)</Typography>
                <TextField variant="standard" value={value} placeholder="Enter a value..." onChange={(e) => setValue(e.target.value)}/>
                <Button onClick={() => {
                    setMsg(undefined)
                    msgWorker()
                }} variant="contained">Submit</Button>
                {msg && <Typography><b>Elapsed Time:</b> {getElapsedTime(msg)} seconds</Typography>}
            </Container>
        )
    } else {
        const errMsg = 'Client: Your browser doesn\'t support web workers.'
        console.log(errMsg);
        return <div>{errMsg}</div>
    }

}