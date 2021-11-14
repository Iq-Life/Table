import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useCallback} from 'react'
import style from './InputForName.module.scss'

export const InputForName: React.FC<SuperInputTextPropsType> = React.memo((
    {
        type, onChange, onChangeText,
        onEnter, error, resetError, name,

        ...restProps
    }
) => {

    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText(e.currentTarget.value)
    }, [onChangeText, onChange])

    const onKeyPressCallback = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onEnter()
    }, [onEnter])

    const finalInputClassName = error ? `${style.errorInput}` : `${style.superInput}`

    return (
        <div className={style.divInputSpan}>
            <input
                className={finalInputClassName}
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                value={name}
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
    onChangeText: (value: string) => void
    onEnter: () => void
    error: string
    resetError: () => void
    name: string
}
