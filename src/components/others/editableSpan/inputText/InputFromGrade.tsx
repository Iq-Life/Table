import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useCallback} from 'react'
import style from './InputFromGrade.module.scss'




export const InputFromGrade: React.FC<SuperInputTextPropsType> = React.memo( (
    {
        type, onChange, onChangeText, onKeyPress,
        onEnter, error, grade,

        ...restProps
    }
) => {

    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    },[onChangeText, onChange])

    const onKeyPressCallback = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter()
    },[onEnter, onKeyPress])
    const onFocus = (e:ChangeEvent<HTMLInputElement>) => {
        e.target.select()
    }

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
})
//type
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText: (value: string|number) => void
    onEnter: () => void
    error: string
    grade:string|number
}