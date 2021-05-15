import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import LoginForm from "./Components/LoginForm";
import './App.css'
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine height="100vh"
                projectID="7526f6bd-dbdd-4798-b782-5913bd5c6e4f"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                /> 
  )
}
export default App;