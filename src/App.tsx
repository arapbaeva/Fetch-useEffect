import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";


type GetType = {
    "albumId": number
    "id": number
    "title": string
    "url": string
    "thumbnailUrl": string

}

function App() {
    const [get, setGet] = useState<Array<GetType>>([])

    const getRequestHandler = () => {
      setGet([])

    }
//Засчет hook useEffect данные отрисовывается сразу, даже без нажатия кнопки.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])
    return (
        <div className="App">
            <Button nickName={'ClearPage'} callBack={getRequestHandler}/>
            {get && get.map(el => {
                return (
                    <ul>
                        <li>{el.albumId}</li>
                        <li>{el.id}</li>
                        <li>{el.title}</li>
                        <li><img src={el.url}/></li>
                        <li><img src={el.thumbnailUrl}/></li>
                    </ul>
                )
            })}
        </div>
    );
}


export default App;
