import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState} from 'react'
import s from './SuperEditableSpan.module.css'
import SuperInputText from '../inputText/SuperInputText';


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    title: string
    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        title,
        onBlur,
        onEnter,
        spanProps,
        onChangeText,

        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>(title)
    const [error, setError] = useState<string>('')

    const {children, onDoubleClick, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        if (newName.trim() === "") {
            setError("name is required")
        } else {
            setEditMode(false)
            onEnter && onEnter()
            onChangeText(newName)
        }
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        if (newName.trim() === "") {
            setError("name is required")
        } else {
            setEditMode(false)
            onBlur && onBlur(e)
            onChangeText(newName)
        }
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    }

    const resetError = () => {
        if (newName.trim() === "") {
            setError("")
        }
    }
    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChangeText={setNewName}
                        name={newName}
                        resetError={resetError}
                        error={error}
                        {...restProps}
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={s.span}

                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {title}
                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan
