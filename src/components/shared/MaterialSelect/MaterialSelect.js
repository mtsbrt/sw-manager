import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './materialSelect.css'

export default function MaterialSelect(props) {

    const items = props.items;
    const [selected, setSelected] = useState();
    const handleChange = (event) => {
        setSelected(event.target.value);
        props.travel.planet = event.target.value;
        props.onChange(event.target.value);
    };

    useEffect(() => {
        setSelected(props.value);
    })

    return (
        <FormControl className="material-control">
            <InputLabel>{props.label}</InputLabel>
            <Select value={props.travel.planet} onChange={handleChange}>
                <MenuItem key={props.default.value} value={props.default.value}>{props.default.display}</MenuItem>
                {items.map(item => (<MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>))}
            </Select>
        </FormControl>
    );
}