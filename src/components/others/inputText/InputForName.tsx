import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import style from './SuperInputText.module.css'

export const InputForName: React.FC<SuperInputTextPropsType> = (
    {
        type, onChange, onChangeText,
        onEnter, error, resetError, name,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalInputClassName = error ? `${style.errorInput}` : `${style.superInput}`

    return (
        <div className={style.divInputSpan}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                value={name}
                onFocus={resetError}
                {...restProps}
            />
            {error && <span className={style.errorSpan}>{error}</span>}
        </div>
    )
}


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText: (value: string) => void
    onEnter: () => void
    error: string
    resetError: () => void
    name:string
}
