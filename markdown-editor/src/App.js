import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import ReactMarkdown from 'react-markdown'
function App() {

  const [markdown, setMarkdown] = useState('#sup');
  function handleChange(e){
      setMarkdown(e.target.value)
  }
 return (
    <div className="App">
      <textarea onChange={handleChange} value={markdown}/>
      
      {/* <div className="preview">{markdown}</div> */}
   
    
    <ReactMarkdown className="preview" source={markdown}/>
    </div>
  );
}

export default App;
