import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './materialSelect.css'

export default function MaterialSelect(props) {

    const items = props.items;
    const [selected, setSelected] = useState('');
    const handleChange = (event) => {
        setSelected(event.target.value);
        props.onChange(event.target.value);
    };


    return (
        <FormControl className="material-control">
            <InputLabel>{props.label}</InputLabel>
            <Select value={selected} onChange={handleChange}>
                {items.map(item => (<MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>))}
            </Select>
        </FormControl>
    );
}