import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState} from 'react'
import s from './SuperEditableSpan.module.css'
import {gradType} from "../../../redux/tableReducer";
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

    const onEnterCallback = () => {
        if (newGrade !== "н" || 2 || 3 || 4 || 5 || '.') {
            setEditMode(false)
            onEnter && onEnter()
            onChangeText(newGrade)
        } else {
            setError("только н , . , 2, 3, 4, 5")
        }
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        if (newGrade === "н" || 2 || 3 || 4 || 5 || '.') {
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
        if (newGrade !== "н" || 2 || 3 || 4|| 5 || '.') {
            console.log('Set-Error')
            setError("")
        }
    }
    return (
        <>
            {editMode
                ? (
                    <InputFromGrade
                        autoFocus // пропсу с булевым значением не обязательно указывать true
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
                        className={s.span}

                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
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
    item: gradType
    spanProps?: DefaultSpanPropsType
}