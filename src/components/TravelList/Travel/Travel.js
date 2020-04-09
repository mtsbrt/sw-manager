import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Axios from 'axios';
import MaterialSelect from '../../shared/MaterialSelect/MaterialSelect'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import './travel.css';

export default function Travel(props) {

    const [planets, setPlanets] = useState([]);
    const [planet, setPlanet] = useState('');
    const [description, setDescription] = useState('');
    const styles = {
        formControlStyle: {
            width: '100%'
        },
        iconGridStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        iconWrapper: {
            marginLeft: '35px'
        }
    }
    useEffect(() => {
        async function getPlanets() {
            const results = await (await Axios.get(`https://swapi.co/api/planets/?format=json`)).data.results;
            setPlanets(results);
        }

        getPlanets();
    }, []);

    const deleteTravel = () => {
        props.onDelete(props.travel);
    }

    const changePlanet = (value) => {
        setPlanet(value);
        props.travel.planet = value;
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
        props.travel.description = event.target.value;
    }

    return (
        <Grid container>
            <Grid item xs={10} sm={10} md={10} lg={10}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <FormControl style={styles.formControlStyle}>
                            <TextField id="txtDescricao" value={props.travel.description} onChange={changeDescription} label="Descrição" />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <MaterialSelect id="sltPlaneta" items={planets} default={{ value: "Planeta Desconhecido", display: "Planeta Desconhecido" }} onChange={changePlanet} travel={props.travel} label="Planeta" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={styles.iconGridStyle} item xs={2} sm={2} md={2} lg={2}>
                <IconButton style={styles.iconWrapper} onClick={deleteTravel}>
                    <DeleteOutlined className="delete-icon" />
                </IconButton>
            </Grid>
        </Grid>
    );

}