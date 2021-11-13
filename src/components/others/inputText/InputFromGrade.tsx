import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import style from './InputFromGrade.module.css'




export const InputFromGrade: React.FC<SuperInputTextPropsType> = (
    {
        type,// достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        resetError,grade,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter()
    }
    const onFocus = (e:ChangeEvent<HTMLInputElement>) => e.target.select();

    const finalInputClassName = error ? `${style.errorInput}` : `${style.superInput}`

    return (
        <div className={style.divInputSpan}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                value={grade}
                onFocus={onFocus}
                {...restProps}
            />
            {error && <span className={style.errorSpan}>{error}</span>}
        </div>
    )
}
//type
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText: (value: string|number) => void
    onEnter: () => void
    error: string
    resetError: () => void
    grade:string|number
}