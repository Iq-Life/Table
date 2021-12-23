import React, {useState} from 'react'
import style from './Counter.module.scss'

export const Counter:React.FC = () => {
const [count, setCount] = useState(15)

    let increment = () => setCount(count+1)
    let decrement = () => setCount(count-1)

    return(
        <div className={style.counter}>
            <div className={style.display}>{count}</div>
            <div className={style.arrows}>
                <button className={style.inc} onClick={increment}/>
                <button className={style.dec} onClick={decrement}/>
            </div>
        </div>
    )
}