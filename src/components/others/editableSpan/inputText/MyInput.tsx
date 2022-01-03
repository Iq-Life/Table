import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useCallback} from 'react'
import style from './InputForName.module.scss'

export const MyInput: React.FC<SuperInputTextPropsType> = React.memo((
    {
        type, onChange, onChangeText,
        onEnter, error, resetError, text,

        ...restProps
    }
) => {

    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) 
        onChangeText(e.currentTarget.value)
    }, [onChangeText, onChange])

    const onKeyPressCallback = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        onEnter && e.key === 'Enter' && onEnter()
    }, [onEnter])

    const finalInputClassName = error ? `${style.errorInput}` : `${style.superInput}`

    return (
        <div className={style.divInputSpan}>
            <input
                className={finalInputClassName}
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                value={text}
                onFocus={resetError}
                {...restProps}
            />
            {error && <span className={style.errorSpan}>{error}</span>}
        </div>
    )
})
//types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & {
    text: string
    onChangeText: (value: string) => void
    onEnter?: () => void
    error?: string
    resetError?: () => void
}
