import React,{useState} from "react";

export default function Textform(props) {
  const [text, setText]=useState('Enter Text Here');
  const [prevText, setPrevText] = useState(text);
  const handleonchange=(event)=>{
    setText(event.target.value);
}
  const countchar=(text)=>{
    let textWithoutSpaces = text.replace(/\s/g, '');
    
    // Count the characters in the string without spaces
    return textWithoutSpaces.length;

  }
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert(" converted to uppercase","success");
    }
    const handlelowclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showalert(" converted to lowercase","success");
  }
  const handlerclick=()=>{
    setText(prevText);
    props.showalert(" text retrived","success");
}
  const handleclearclick=()=>{
    setPrevText(text);
    setText('');
    props.showalert(" text cleared","success");
}
 
   
  return (
    <>
      <div className="form-group" style={{color:props.mode==='light'?'#343a40':'white'}}>
        <h1>{props.msg}</h1>
        <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{background:props.mode==='light'?'white':'#343a40', color:props.mode==='light'?'#343a40':'white'}}
        ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handlelowclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleclearclick}>clear</button>
        <button className="btn btn-primary mx-3" onClick={handlerclick}>Retrive</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'dark':'white'}}>
        <h1>your text summery</h1>
        <p>{(text[text.length-1]===' '||text.length===0)?text.split(" ").length-1:text.split(" ").length}  words and {countchar(text)} characters</p>
        <p>preview:</p>
        <p>{text==='Enter Text Here'?"enter something to preview":text}</p>
      </div>

    </>
  );
}
