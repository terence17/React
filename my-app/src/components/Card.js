import React from 'react'
import styles from './appStyles.module.css'

function Card({title,body}) {
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.cardcontainer1}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.body}>
                <p>{body}</p>
            </div>
            
            </div>
        </div>
    )
}

export default Card
