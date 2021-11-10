import React from 'react'
import s from './Error404.module.scss'

function Error404() {
    return (
        <div className={s.errorPage}>
            <div style={{color: "red"}}>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
