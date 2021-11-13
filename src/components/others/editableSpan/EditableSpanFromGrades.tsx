import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState} from 'react'
import style from './EditableSpanFromGrade.module.css'
import {InputFromGrade} from "../inputText/InputFromGrade";

export const EditableSpanFromGrades: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, item, onBlur,
        onEnter, onChangeText,
        spanProps,


        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newGrade, setNewGrade] = useState<string | number>(item)
    const [error, setError] = useState<string>('')

    const {children, onDoubleClick, ...restSpanProps} = spanProps || {}

    const condition = (newGrade === "н") || (newGrade === String(2)) ||
        (newGrade === String(3)) || (newGrade === String(4)) ||
        (newGrade === String(5)) || (newGrade ==='.')

    const onEnterCallback = () => {
        if (condition) {

            setEditMode(false)
            onEnter && onEnter()
            onChangeText(newGrade)
        } else {
            setError("только н , . , 2, 3, 4, 5")
        }
    }

    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        if (condition) {
            setEditMode(false)
            onBlur && onBlur(e)
            onChangeText(newGrade)
        } else {
            setError("только н , . , 2, 3, 4, 5")
            console.log('blur')
        }
    }

    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    }

    const resetError = () => {
        if (!condition) {
            console.log('Set-Error')
            setError("")
        }
    }
    return (
        <>
            {editMode
                ? (
                    <InputFromGrade
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        onChangeText={setNewGrade}
                        grade={newGrade}
                        resetError={resetError}
                        error={error}
                        {...restProps}
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={style.spanGrade}

                        {...restSpanProps}
                    >
                        {item}
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
    onChangeText: (value: string | number) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    item: string|number
    spanProps?: DefaultSpanPropsType
}