import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import s from './SuperSelect.module.css'



export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions = options ? options.map((x, y) => (
        <option className={s.option} key={x + '-' + y} value={x}>{x}</option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}
//types
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption: (option: string) => void

}