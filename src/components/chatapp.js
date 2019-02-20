import React from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import ReactDOM from 'react-dom';
import Chatkit from "@pusher/chatkit-client"




const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/ecfa8745-9225-4efa-8a76-89eb1098730e/token"
const instanceLocator = "v1:us1:ecfa8745-9225-4efa-8a76-89eb1098730e"
const roomId = 19381539
const username = 'Mentor'

class chatapp extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: 'Mentee',
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
            roomId: "19381539",
            hooks: {
                onMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text: "",
            roomId: "19379243"
        })
    }
    
    render() {
        return (
            <div className="chat">
              <Title />
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </div>
        );
    }
}
class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li  key={message.id} className="message">
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                      </li>
                    )
                })}
            </ul>
        )
    }
}

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

function Title() {
  return <p className="title">Messenger</p>
}

export default chatapp;
