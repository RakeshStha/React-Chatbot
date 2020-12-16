import logo from './logo.svg';
import './App.css';
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ul-react";

function App() {
  const steps = [
    {
      id:'Greet',
      message:'Hello, Welcome to our website',
      trigger:'Ask Name'

    },
    {
      id:'Ask Name',
      message:'Please enter your name',
      trigger:'Waiting'
    }
  
]
  return (
    <>
    <Segment floated="right">
      <ChatBot steps={steps}/>
    </Segment>
    </>
  );
}

export default App;
