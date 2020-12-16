import logo from './logo.svg';
import './App.css';
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

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
      trigger:'waiting1'
    },

    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi {previousValue}, Please select your issue',
      trigger: "issue"
    },
    {
      id:'issue',
      options:[
        {
          value:'React',
          label:'React',
          trigger:'React'
        },
        {
          value:'Angular',
          label:'Angular',
          trigger:'Angular'
        },
        ]
    },
    {
      id:'React',
      message:'Thanks for telling your react issue. We will contact you soon.',
      end:true
    },
    {
      id:'Angular',
      message:'Thanks for telling your Angular issue. We will contact you soon.',
      end:true
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
