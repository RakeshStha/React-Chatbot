
import {Container, Row} from 'react-bootstrap';
import ChatBot from "react-simple-chatbot";
//import { Segment } from "semantic-ui-react";
import styled from 'styled-components';

const Styles = styled.div`
.chatbot{
  display: flex;
  justify-content: center;
}
`

function App() {
  const steps = [
    {
      id:'Greet',
      message:'Hello, Welcome to our website',
      trigger:'Ask Name'

    },
    {
      id:'Ask Name',
      message:'Please enter your name.',
      trigger:'waiting1'
    },

    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi {previousValue}, Please type your email.',
      trigger: 'waiting2'
    },
    {
      id:'waiting2',
      user:true,
      trigger:'emailview'
    },
    
    {
      id:'emailview',
      message: 'Thank you for your email - {previousValue}.',
      trigger:'con'  
    },
    {
      id:'con',
      message:'Your number',
      trigger:'waiting3'
    },
    {
      id:'waiting3',
      user:true,
      trigger:'number'
    },
    {
      id:'number',
      message:'Thank you for your number - {previousValue}.',
      trigger:'issues'
    },
    {
      id:'issues',
      message: 'Please select below issues.',
      trigger:'issue'
    },
    {
      id:'issue',
      options:[
        {
          value:'Slow',
          label:'Slow',
          trigger:'Slow'
        },
        {
          value:'Website error',
          label:'Website error',
          trigger:'Website error'
        },
        ]
    },
    {
      id:'Slow',
      message:'Thanks for telling your react issue. We will contact you as soon as possible.',
      end:true
    },
    {
      id:'Website error',
      message:'Thanks for telling your Angular issue. We will contact you as soon as possible.',
      end:true
    }
  
]
  return (
    <Styles>
    <Container>
    <span className="chatbot m-4"><b>Simple Chatbot React || Developed by <a href="https://www.shrestharakesh.com.np/">Rakesh Shrestha</a>.</b></span>
      <div className="chatbot">
      <ChatBot steps={steps} />
      </div>
      <span className="chatbot m-4"><b>Thank You !</b></span>
      
    </Container>
    </Styles>
  );
}

export default App;
