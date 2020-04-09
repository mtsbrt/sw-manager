import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Travel from './Travel/Travel';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


export default function TravelList(props) {

    const [travels, setTravels] = useState([{
        description: '',
        planet: ''
    }]);
    const [error, setError] = useState('');
    const [openSnack, setOpenSnack] = useState(false);

    const deleteTravel = (travel) => {
        if (travels.length > 1) {
            const newList = travels.filter(item => item !== travel);
            setTravels(newList);
        } else {
            setError('Não é possível deletar o último registro de viagem.')
            setOpenSnack(true);
        }
    }

    const addBlankTravel = () => {
        setTravels([...travels, {
            description: '',
            planet: ''
        }]);
    }

    const closeError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setError('');
        setOpenSnack(false);
    }

    const changeTravel = (travel, event) => {
        travel = event;
    }

    const renderList = (items) => {
        return items.map((travel, index) => {
            return (
                <div key={index}>
                    <ListItem>
                        <Travel travel={travel} onDelete={deleteTravel} onChange={changeTravel} />
                        {index + 1 < items.length &&
                            <Divider />}
                    </ListItem>
                </div>
            );
        })
    }

    const submitTravels = () => {
        props.onSubmit([...travels]);
    }


    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <List>
                        {
                            renderList(travels)
                        }
                    </List>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button variant="outlined" size="large" color="primary" onClick={submitTravels}>SALVAR</Button>
                    <IconButton style={{ marginLeft: 'auto' }} color="primary" onClick={addBlankTravel}>
                        <Add />
                    </IconButton>
                </CardActions>
            </Card>
            <Snackbar open={openSnack} autoHideDuration={2000} onClose={closeError}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </div>
    )
}
