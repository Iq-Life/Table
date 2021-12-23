import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useCallback, useState} from 'react'
import { MyInput } from './inputText/MyInput'


export const EditableSpanForName: React.FC<SuperEditableSpanType> = React.memo((
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

    const onEnterCallback = useCallback(() => {
        if (newName.trim() === "") {
            setError("Ввидите имя или фамилию")
        } else {
            setEditMode(false)
            onChangeText(newName)
        }
    },[newName, onChangeText])

    const onBlurCallback = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        if (newName.trim() === "") {
            setError("Ввидите имя или фамилию")
        } else {
            setEditMode(false)
            onBlur && onBlur(e)
            onChangeText(newName)
        }
    },[newName, onChangeText, onBlur])

    const onDoubleClickCallBack = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    },[onDoubleClick])

    const resetError = useCallback(() => {
        if (newName.trim() === "") {
            setError("")
        }
    },[newName])

    return (
        <>
            {editMode
                ? (
                    <MyInput
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChangeText={setNewName}
                        text={newName}
                        resetError={resetError}
                        error={error}
                    />
                ) : (
                    <span onDoubleClick={onDoubleClickCallBack}>
                        {title}
                    </span>
                )
            }
        </>
    )
})
//types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText: (value: string) => void
    title: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType
}

