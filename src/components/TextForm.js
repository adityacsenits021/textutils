import React, { useState } from "react";


export default function TextForm(props) {

  const handleArrange = () => {
    setText(text.toLowerCase());
    // for(let i=0;i<text.length;i++){
    //   if(i===0 ||(text[i-1]===" " &&text[i-2]===".")){
    //     if (text[i] >= 'a' && text[i] <= 'z')
    //   {
    //     // Convert into Upper-case
    //     text[i] = String.fromCharCode(text[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
    //   }
    //   }
      
    // }
    let ch = text.split("");
        for (let i = 0; i < text.length; i++) {
  
            // If first character of a word is found
            if (i === 0 && ch[i] != ' ' ||
                ch[i] != ' ' && ch[i - 1] == ' '&&ch[i-2]==".") {
  
                // If it is in lower-case
                if (ch[i] >= 'a' && ch[i] <= 'z') {
  
                    // Convert into Upper-case
                    ch[i] = String.fromCharCode(ch[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
                }
            }
  
            // If apart from first character
            // Any one is in Upper-case
            else if (ch[i] >= 'A' && ch[i] <= 'Z')
  
                // Convert into Lower-Case
                ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));          
        }
  
        // Convert the char array to equivalent String
        let st = (ch).join("");
        setText(st);
  };
  const handleUpClick = () => {
    console.log("UpperCase was clicked"+text.toUpperCase());
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    console.log("UpperCase was clicked"+text.toLowerCase());
    setText(text.toLowerCase());
  };
  const handleExtraSpace = () => {
   let newtext=text.split(/[ ]+/);
   setText(newtext.join(" "))
  };
  const handleCopy = () => {
    var text=document.getElementById("Mybox").value;
    text.select();
    text.setselectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    console.log("I am copy");
  };
  const handOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div style={{color:props.mode==='light'?'#000865':'white'}}>
      <h2>{props.heading}</h2>
      <div className="form-group mb-3">
        <label htmlFor="My Box">Example textarea</label>
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode==='light'?'white':'grey',
          color:props.mode==='light'?'#000865':'white'}}
          id="MyBox"
          value={text}
          placeholder={`Enter the text here`}
          onChange={handOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary mx-2" onClick={handleArrange}>
        Rearrange the text
      </button>
      <button className="btn btn-primary mx-2" 
      id="Mybox"
      onClick={handleCopy}>
        Copy Text
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'#000865':'white'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length*0.008} minutes read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
  );
}
