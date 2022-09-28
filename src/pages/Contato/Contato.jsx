import { database } from "../../services/firebase"
import { push, ref, set } from "firebase/database"

import { useState } from 'react'
import styles from './contato.module.css'
import contatoImg from '../../assets/contato.svg'

function Contato (){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputValueNome(event){
        setNome(event.target.value)
    }

    function handleInputValueEmail(event){
        setEmail(event.target.value)
    }

    function handleInputValueMensagem(event){
        setMensagem(event.target.value)
    }

    function handleCreateMessage (event) {
        event.preventDefault()
        const mensagensListRef = ref(database, 'mensagens')
        const novaMensagemRef = push(mensagensListRef) 

        set(novaMensagemRef, {
            texto: mensagem, 
            email: email,
            nome: nome
        })
        setMensagem('')
        setNome('')
        setEmail('')
    }
        
    return(
        <>
        <div className={styles.header}>
            <h1>
                Entre em contato
            </h1>
            <img src={contatoImg} />
        </div>
        <div className={styles.formContainer}>
            <form onSubmit={handleCreateMessage} className={styles.form}>
                <input onChange={handleInputValueNome} className={styles.formInput} placeholder="Digite seu nome" value={nome}/>
                <input onChange={handleInputValueEmail} className={styles.formInput} placeholder="Digite seu e-mail" value={email}/>
                <textarea onChange={handleInputValueMensagem} className={styles.formTextArea} placeholder="Digite sua mensagem" value={mensagem}/>
                <button className={styles.formButton} type="submit"> Enviar mensagem </button>
            </form>
        </div>
        </>
    )
}

export default Contato