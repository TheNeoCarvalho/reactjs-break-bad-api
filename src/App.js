import { useState, useEffect } from 'react'
import api from './service/api'
import Card from './components/Card'
import './style.css';

const App = () => {
    const [user, setUser] = useState('')
    const [dados, setDados] = useState([])

    useEffect(()=>{
        const data = api.get(`/?name=${user}`).then(res => {
            setDados(res.data)
        }).catch(err => console.log(err))
    },[user])

    const changeName = (e) => {
        setUser(e.target.value)
    }
    
    return(
        <>
            <h1>{user}</h1>
            <input type="text" value={user} onChange={changeName}/>
            <button>Buscar</button>
            <div className="body">

            {   dados.map(person => {
                    return (
                        <Card img={person.img} name={person.name} nick={person.nickname} actor={person.portrayed}/>
                    )
                })
            }        
    
            </div>


        </>
    );

}

export default App;