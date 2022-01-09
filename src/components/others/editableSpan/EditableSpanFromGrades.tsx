import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useCallback, useState } from 'react'
import style from './EditableSpanFromGrade.module.css'
import { InputFromGrade } from "./inputText/InputFromGrade";

export const EditableSpanFromGrades: React.FC<SuperEditableSpanType> = React.memo((
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

	const { onDoubleClick, ...restSpanProps } = spanProps || {}

	const condition = (newGrade === "н") || (newGrade === String(2)) ||
		(newGrade === String(3)) || (newGrade === String(4)) ||
		(newGrade === String(5)) || (newGrade === '.')

	const onEnterCallback = useCallback(() => {
		if (condition) {
			setEditMode(false)
			onEnter && onEnter()
			onChangeText(newGrade)
		} else {
			setError("только н , . , 2, 3, 4, 5")

		}
	}, [newGrade, onEnter, onChangeText, condition])

	const onBlurCallback = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
		if (condition) {
			setEditMode(false)
			onBlur && onBlur(e)
			onChangeText(newGrade)
		} else {
			setError("только н , . , 2, 3, 4, 5")
		}
	}, [newGrade, onBlur, condition, onChangeText])

	const onDoubleClickCallBack = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		setEditMode(true)
		onDoubleClick && onDoubleClick(e)
	}, [onDoubleClick])

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
})
//types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
	onChangeText: (value: string | number) => void
	onEnter?: () => void
	error?: string
	spanClassName?: string
	item: string | number
	spanProps?: DefaultSpanPropsType
}