import { useState, useEffect } from 'react'
import api from './service/api'

const App = () => {
    const [user, setUser] = useState('')
    const [dados, setDados] = useState([])

    useEffect(()=>{
        const data = api.get('/').then(res => {
            setDados(res.data)
        }).catch(err => console.log(err))
    },[])

    const changeName = (e) => {
        setUser(e.target.value)
    }
    
    return(
        <>
            <h1>{user}</h1>
            <input type="text" value={user} onChange={changeName}/>
            <button>Buscar</button>
        </>
    );
}

export default App;