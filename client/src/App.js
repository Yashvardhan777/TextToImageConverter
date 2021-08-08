import './App.css';
import axios from 'axios';
import {useState} from 'react'






function App() {
    const [img, setImg] = useState('')
    const [text, setText] = useState('')

    const baseURL = "https://api.deepai.org/api/text2img";
    const params =  {
        text: text
    };
    const headers = {'api-key': 'apiKEY'};

  
    function handleSubmit(e){
        e.preventDefault();
        axios.get(baseURL, { params : params, headers: headers }).then((res)=>{
            setImg(res.data.output_url);
        }).catch((err) => {
            console.log(err)
        });
    }

    function showImage(){
        if (img){
            return(
            <>
                <img src={img} alt="Cursed"/>
                <p>P.S. The AI gives cursed images.</p>
            </>
            );
        }
        else{
            return(<></>)
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="text"  value={text} onChange={e => setText(e.target.value)} placeholder="Enter Text" />
                <input type="submit" value="Submit"/>
            </form>

            {showImage()}
            
        </div>
    );
}

export default App;
