import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Route, Routes} from 'react-router-dom'; {/**this is react router import */}

// let name="shailesh"
function App() {
    {/*this is the useState syntax */ }
    const [mode, setMode] = useState('light'); //check whther dark mode is enabke or not
    const [alert, setAlert] = useState(null); {/* this is use state is used for alert message in alert component use to set alert message initially null */ }

    const showAlert = (message, type) => {
        {/*this function is used to show the alert message */ }
        {/*set alert contain the two objects msg and other is type */ }
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    const toggleMode = () => {
        {/*this is the toggleMode function this is used to chnage the mode of body and as well as navbar */ }
        if (mode === 'light') {
            setMode('dark'); {/*this is used to change the mode of navbar as dark */ }
            document.body.style.backgroundColor = '#042743'; {/*this is used to change the body mode as gray */ }
            showAlert(" dark mode has been enabled ", " sucess ");
            // document.title = 'TextUtils - Light Mode'; {/*this is used to change the icon name as Light Mode if my website is mode is light */ }
        }
        else {
            setMode('light'); {/*this is used to change the mode of navbar as light */ }
            document.body.style.backgroundColor = 'white'; {/*this is used to change the body mode as white */ }
            showAlert(" light mode has been enabled ", " sucess ");
            // document.title = 'TextUtils - Dark Mode'; {/*this is used to change the icon name as Light Mode if my website is mode is light */ }


        }
    }
    return (
        <>
            {/* <Navbar title="Textutils" aboutText="About TextUtils"/> */}
            {/* <Navbar/> */}
            
                <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} /> {/*this is for mode of the navbar */}
                <Alert alert={alert} />
                <div className='container my-3'>
                {/**all linking must be written inside the Routes */}
                    <Routes>
                    {/**we can use insted of path is exact path */}
                        <Route path="/about" element={<About mode={mode}/>}/>    {/**if we clock on about then the about folder will be display */}                        
                        <Route path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - word counter, character counter" mode={mode}/>}/>

                        
                    </Routes>

                    {/* <TextForm showAlert={showAlert} heading="Enter the text area below to analyze" mode={mode}/> this is for mode of the body  */}
                    {/* <Alert/> */}
                    {/* <About /> */}
                </div>
        </>
    );
}

export default App;
