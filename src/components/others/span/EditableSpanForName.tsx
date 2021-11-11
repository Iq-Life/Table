import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState} from 'react'
import style from './SuperEditableSpan.module.css'
import {InputForName} from "../inputText/InputForName";

export const EditableSpanForName: React.FC<SuperEditableSpanType> = (
    {
        title, onBlur,
        spanProps,
        onChangeText,
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>(title)
    const [error, setError] = useState<string>('')

    const {onDoubleClick} = spanProps || {}

    const onEnterCallback = () => {
        if (newName.trim() === "") {
            setError("name is required")
        } else {
            setEditMode(false)
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
                    <InputForName
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChangeText={setNewName}
                        name={newName}
                        resetError={resetError}
                        error={error}
                    />
                ) : (
                    <span onDoubleClick={onDoubleClickCallBack} className={style.span}>
                        {title}
                    </span>
                )
            }
        </>
    )
}
//types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText: (value: string) => void
    spanClassName?: string
    title: string
    spanProps?: DefaultSpanPropsType
}

