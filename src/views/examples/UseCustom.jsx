import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [count,inc,dec] = useCounter(10)
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)
    function showStates (states){
        return states.map(state => <li key = {state.nome}> {state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title = "Exercicio #1"/>
            <div className="center">
                <spna className="text">{count}</spna>
                <div>
                    <button className="btn"onClick={()=> inc()}>Incremento</button>
                    <button className="btn"onClick={()=> dec()}>Decremento</button>
                </div>
            </div>
            <SectionTitle title = "Exercicio #2"/>
            <div className="center">
                <ul>
                    {response.data? showStates(response.data):false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
