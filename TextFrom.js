import React,{useState} from 'react'

export default function TextFrom(props) {
  const handleUpClick =() =>{
    console.log("Uppercase  was clicked " + text);
    let newtext =text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to uppercase","Success")

  } 
  const handleLowClick =() =>{
    console.log("Lowercase  was clicked " + text);
    let newtext =text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase","Success");
  } 
  const handleClearClick =() =>{
    let newtext =("")
    setText(newtext)
    props.showAlert("Sussessfully clear","Success")
  } 
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }

  const [text,setText] = useState('')
  // text = "new text";// wrong way to change the state
  // setText("name text");// corerct way to chnage the state
  return (
    <>
<div className="container" style={{backgroundcolor:props.mode==='dark'?'white':'black'}}>
<h2>{props.heading}</h2>
     <div className="mb-3">

     <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundcolor:props.mode==='dark'?'gray':'white'}}styid="my box" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase </button>
<button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase </button>
<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear </button>
</div>

<div className="container my-3" style={{backgroundcolor:props.mode==='dark'?'white':'black'}}>
  <h2>Your text Summary</h2>
  <p>{text.split("").length} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>

  </>
  )
}
