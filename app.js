import React from 'react';
import ReactDOM from 'react-dom';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
/*import './appStyles.css';
  import  styles from './appStyles.module.css';*/
// import Inline from './components/Inline';
// import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  //JSX - see in Hello.js
  
  //Functional Component - see in Greet.js
  
  //Class Component - see in Welcome.js

  render() {
    return (
      
      <div className="">

      <LifecycleA/>

      {/*<Form/>*/}

      {/*
      <h1 className = {styles.success}>Success</h1>
      
      <h1 className = "error">Error</h1>*/}
      
      {/*<Inline/>*/}
      
      {/*<Stylesheet/>*/}
        
        {/*<NameList/>*/}
        
        {/*<UserGreeting/>*/}
        
        {/*<ParentComponent/>*/}
        
        {/*<EventBind/>*/}
        
        {/*<Counter/>*/}
        
        {/*This is a comment*/}
        
        {/*<Message/>*/}
        
        {/*<Hello/>*/}
        
        {/*
        <FunctionClick/>
        
        <ClassClick/>
        <Greet name="Bruce" charName="Batman">
        </Greet>
        
        <Welcome name="Bruce" charName="Batman"/>
        
        
        <Greet name="Clark" charName="Superman">
        <p>This is a children element</p>
        <button>Action</button>
        </Greet>
        
        <Greet name="Diana" charName="Wonder Woman"/>
        
        
        <Welcome name="Clark" charName="Superman"/>
        
        <Welcome name="Diana" charName="Wonder Woman"/>
        
        <Title label={this.props.title} />
        
        <Paragraph text={this.props.text} />
        */}
      </div>
    )
  }
}


ReactDOM.render(
  <Main></Main>,
  document.getElementById('root')
);









