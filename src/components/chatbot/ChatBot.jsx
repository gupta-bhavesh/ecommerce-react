import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#ffffff',
  headerFontSize: '15px',
  botBubbleColor: '#5553b7',
  botFontColor: '#fff',
  userBubbleColor: '#5553b7',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'Millet Bot',
}


const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(true)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  const BotHeader = () => {
    return <div className="chatbot-header">
      <div className="chatbot-header-avatar">
        <div className="chatbot-header-avatar-img-div">
          <img
            alt=""
            className="chatbot-header-avatar-img"
            src={"https://s3.amazonaws.com/kommunicate-prod.s3/profile_pic/16621122949711662112295678-image266.png"}
          />
        </div>
        <div className="chatbot-header-avatar-name">
          Eve
        </div>
      </div>
      <div className="chatbot-header-close">
        <button
          type="button"
          className="chatbot-header-close-button"
          data-dismiss="mckbox"
          aria-label="Close"
          onClick={() => hideChat()}>
          <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
      </div>
    </div>
  }


  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? '' : 'none' }}>
        <ChatBot
          // speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          botAvatar="https://s3.amazonaws.com/kommunicate-prod.s3/profile_pic/16621122949711662112295678-image266.png"
          headerComponent={BotHeader()}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} I am RMC Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Property Tax ?', trigger: '4' },
                { value: 2, label: ' Professional Tax ?', trigger: '3' },
                { value: 3, label: 'Election Department', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: '3',
              message:
                'Profession tax is the tax levied and collected by the state governments in India.',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'A property tax or millage rate is an ad valorem tax on the value of a property.',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'An election is a way people can choose their candidate or their preferences in a representative democracy or other form of government',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Property Tax ?', trigger: '4' },
                { value: 2, label: ' Professional Tax ?', trigger: '3' },
                { value: 3, label: 'Election Department', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="chatbot-btn" onClick={() => startChat()}>
            <div className="chatbot-header-avatar-img-div">
              <img
                alt=""
                className="chatbot-open-avatar-img"
                src={"https://s3.amazonaws.com/kommunicate-prod.s3/profile_pic/16621122949711662112295678-image266.png"}
              />
            </div>
          </button>
        ) : <div />}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot