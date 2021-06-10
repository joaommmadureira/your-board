import styles from './sidebar.module.scss'
import edit from './../../assets/edit.svg'
import trash from './../../assets/delete.svg'

export function Sidebar() {

    return(
        <section className={styles.sidebar}>
            <div>
                <h1>Your<br/>Board</h1>
                <button>
                    Adicionar
                </button>
                <div>
                    <button>Tutorial</button>
                    <button>Resetar</button>
                </div>
            </div>

            <div>
                <button>
                    <img src={edit} alt="Editar nota" />
                </button> 
                <button>
                    <img src={trash} alt="Excluir nota" />
                </button>
            </div>
        </section>
    )
} 