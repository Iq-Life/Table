import React, { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useCallback } from 'react'
import style from './SuperSelect.module.scss'

export const SuperSelect: React.FC<SuperSelectPropsType> = React.memo((
	{
		options,
		onChange, onChangeOption,
		...restProps
	}
) => {

	const mappedOptions = options ? options.map((x, y) => (
		<option className={style.option} key={x + '-' + y} value={x}>
			{x === 'maths' ? 'Математика' : x === 'physics' ? 'Физика' : x === 'computerScience' ? 'Информатика' : x}
		</option>
	)) : []

	const onChangeCallback = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		onChange && onChange(e)
		onChangeOption(e.currentTarget.value)
	}, [onChange, onChangeOption])

	return (
		<select className={style.select} onChange={onChangeCallback} {...restProps}>
			{mappedOptions}
		</select>
	)
})
//types
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SuperSelectPropsType = DefaultSelectPropsType & {
	options: string[]
	onChangeOption: (option: string) => void

}