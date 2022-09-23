import { useState, useEffect } from 'react'
import styles from './comentarios.modules.css'
import comentariosImg from '../../assets/comentarios.svg'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import {nanoid} from 'nanoid'


function Comentarios () {
const getLocalStorage = () => {
    let items = localStorage.getItem('list')

    if (items) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return[]
    }
        
}

const [list, setList] = useState([getLocalStorage])
const [task, setTask] = useState('')

function handleInput (event) {
    setTask(event.target.value)
  }
  function handleCreateTask(){
  const newTask = {
    id: nanoid(),
    title:task 
}

if (newTask.title === '') {
    return
}

setList([...list, newTask])

setTask('')

function handleRemoveTask (id) {
    const tasksFiltered = list.filter(item => item.id !== id)
    setList(tasksFiltered) 
}

useEffect(() => {
localStorage.setItem('list', JSON.stringify(list))
}, [list])
  }
    return(
        <>
            <div className={styles.header}>
                <h1>
                    Deixe o seu comentário
                </h1>
                <img src={comentariosImg} />
            </div>
            <div className={styles.inputContainer}>
                <input 
                className={styles.input}
                type="text"
                placeholder="Digite sua mensagem aqui"
                onChange={handleInput}
                value={task}
                />
                <div className={styles.addContainer}>
                <button className={styles.adsTask} onClick={handleCreateTask}>
                    <FiPlus size={16} color="#fff"/>
                </button>
                </div>
            </div>

            <main>
                <ul className={styles.listItems}>
                    {list.map(item => {
                        return(
                            <li key={item.id}>
                                <p>(item.title)</p>
                                <button className={styles.removeTask} onClick={() => handleRemoveTask(item.id)}>
                                <FiTrash2 size={16} />
                                </button>
                            </li>

                        )
                    })}
                </ul>
            </main>
        </>
    )
}

export default Comentarios