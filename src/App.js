import { useState } from "react"
import styled from "styled-components"
import {
  getSettings,
  getStateInstance,
  sendFileByUrl,
  sendMessage,
} from "./api"

const Container = styled.div`
  width: 100%;
  height: 85vh;
  padding: 32px;
  display: flex;
  flex-direction: horizontal;
`

const Input = styled.input`
  height: 24px;
  width: 276px;
  border-radius: 4px;
  padding: 0px 8px;
  font-size: 14px;
  margin-bottom: 16px;
`

const TextArea = styled.textarea`
  width: 278px;
  padding: 2px 8px;
  font-size: 14px;
`

const ActionsWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`

const ResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const AnswerText = styled.p`
  font-size: 24px;
  margin: 8px 0px;
`

const Button = styled.button`
  align-items: center;
  width: 296px;
  height: 48px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`

const App = () => {
  const [idInstance, setIdInstance] = useState("")
  const [apiTokenInstance, setApiTokenInstance] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneNumber2, setPhoneNumber2] = useState("")
  const [message, setMessage] = useState("")
  const [urlFile, setUrlFile] = useState("")
  const [response, setResponse] = useState("")

  const getSettingsClicked = async () => {
    const res = await getSettings(idInstance, apiTokenInstance)
    setResponse(JSON.stringify(res, null, 4))
  }

  const getStateInstanceClicked = async () => {
    const res = await getStateInstance(idInstance, apiTokenInstance)
    setResponse(JSON.stringify(res, null, 4))
  }

  const sendMessageClicked = async () => {
    const res = await sendMessage(idInstance, apiTokenInstance, {
      chatId: `${phoneNumber}@c.us`,
      message: message,
    })
    setResponse(JSON.stringify(res, null, 4))
  }

  const sendFileByUrlClicked = async () => {
    const res = await sendFileByUrl(idInstance, apiTokenInstance, {
      chatId: `${phoneNumber2}@c.us`,
      urlFile: urlFile,
      fileName: "test.jpg",
    })
    setResponse(JSON.stringify(res, null, 4))
  }

  return (
    <Container>
      <ActionsWrapper>
        <Input
          onChange={(event) => setIdInstance(event.target.value)}
          placeholder="idInstance"
        />
        <Input
          onChange={(event) => setApiTokenInstance(event.target.value)}
          placeholder="ApiTokenInstance"
        />

        <Button
          style={{ marginTop: "40px" }}
          onClick={() => getSettingsClicked()}
        >
          getSettings
        </Button>

        <Button
          style={{ marginTop: "24px", marginBottom: "54px" }}
          onClick={() => getStateInstanceClicked()}
        >
          getStateInstance
        </Button>

        <Input
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="phoneNumber"
        />
        <TextArea
          onChange={(event) => setMessage(event.target.value)}
          rows="5"
          placeholder="type a message"
        />

        <Button
          style={{ marginBottom: "48px", marginTop: "16px" }}
          onClick={() => sendMessageClicked()}
        >
          sendMessage
        </Button>

        <Input
          onChange={(event) => setPhoneNumber2(event.target.value)}
          placeholder="phoneNumber"
        />
        <Input
          onChange={(event) => setUrlFile(event.target.value)}
          placeholder="url"
        />

        <Button onClick={() => sendFileByUrlClicked()}>sendFileByUrl</Button>
      </ActionsWrapper>
      <ResponseWrapper>
        <AnswerText>Ответ:</AnswerText>
        <TextArea
          value={response}
          style={{ height: "100%", width: "400px" }}
          readOnly
        />
      </ResponseWrapper>
    </Container>
  )
}

export default App
