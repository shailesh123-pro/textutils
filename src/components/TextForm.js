// import React from 'react'
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","sucess")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","sucess")
    }
    const handleClearClick = () => {
        let newText ='';
        setText(newText);
        props.showAlert("clered the text!","sucess")
    }
    // const handleSubmitClick = () => {
    //     let newText =subm;
    //     setText(newText);
    // }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        
    }
    const [text, setText] = useState("");
    //text = "new text";//wrong way to chang the text
    //setText("new text");//correct way to chang the text
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>{/**this is used to set the background color of textutils text box */}
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>{/*use to chang the mode of body */}
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>{/**mx-1 is margin in x direction and my-1 is margin in y directio */} {/**here the initialy the all button are disabled when you enter into text something the the all buttom will be display */}
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>{/**if my text.length===0 then the button is disabled */}
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Cleare the text</button>
            {/* <button className='btn btn-primary mx-2' onClick={handleSubmitClick}>Submit</button> */}
        </div>
        <div className='container my-2' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{                           {/**filter is used to count the words from 0 */}
                    return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p> {/*count the words*/}
                <p><b>{0.008*text.split(" ").filter((element)=>{                      {/**here also the filter is used to count the time requred to read the one word is 0.008 second but is there is no any word the the time must be 0 second */}
                    return element.length!==0}).length}</b> Minutes for read words</p>  {/*time requred ti rad the words */}
                <h2>Preview</h2>
                <p>{text.length>0?text:"nothing to prevew!"}</p>
        </div>
        </>
    )
}
