import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle , setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    //     })
    let myStyle={
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'?'white':'#042743'
      }
        {/**this is below is the useState which is used for set the button of About us component */}
    // const [btntext , setBtnText] = useState("Enable light mode")
    {/**this is the toggeleStyle function is used for to change the mode of the about us component by using the button */}
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'

    //         })
    //         setBtnText("Enable dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '1px solid white'

    //         })
    //         setBtnText("Enable light mode")

    //     }
    // }

    return (
        <div className='container'>
        <h2 className='my-2' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={{border:'2px solid red'}}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, Character or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{border:'2px solid red'}}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                           <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                        The pastoral and nomadic Indo-Aryans spread from the Punjab into the Gangetic plain, large swaths of which they deforested for agriculture. The composition of Vedic texts ended around 600 BCE, when a new, interregional culture arose. Then, small chieftaincies
                    </div>
                </div>
                </div>
                <div className="accordion-item"style={{border:'2px solid red'}}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                        These opposed the growing influence of Brahmanism and the primacy of rituals—often presided by Brahmin priests—that had come to be associated with Vedic religion.[5] In response to the success of these movements, this latter was synthesised with the preexisting religious cultures of the subcontinent, giving rise to Hinduism.
                        </div>
                    </div>
                </div>
            </div>
            {/**this below container is used to set the button on the about us component to change the mode of the content */}
            {/* <div className='container my-3'>
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    )
}
