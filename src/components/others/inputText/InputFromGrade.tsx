import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './InputFromGrade.module.css'
import {gradType} from "../../../redux/tableReducer";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string|number) => void
    onEnter?: () => void
    error?: string
    resetError: () => void
    spanClassName?: string
    grade?:string|number
}

export const InputFromGrade: React.FC<SuperInputTextPropsType> = (
    {
        type,// достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error, spanClassName,
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

    const finalSpanClassName = `${s.errorSpan} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = error ? `${s.errorInput}` : `${s.superInput}`

    return (
        <div className={s.divInputSpan}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                value={grade}
                onFocus={resetError}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </div>
    )
}