import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Button, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
    root: {
        margin: 10,
        maxWidth: 500,
        minWidth: 275
    },
    wrapper: {
        display: "flex",
        justifyContent: 'space-between'
    },
});

export default function CardInfo({innerValue, inputValue, setInputValue}) {
    const [cardInfoState, setCardInfoState] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        if (Array.isArray(innerValue)) {
            setCardInfoState(innerValue)
        } else {
            setCardInfoState([innerValue]);
        }
    }, [])

    function addValueToState() {
        setCardInfoState([...cardInfoState, Number(inputValue)]);
        setInputValue('');
    }

    function removeId(index) {
        setCardInfoState((prevState) => (
            prevState.filter((_, i) => i !== index)
        ));
    }

    function getResult(){
        if(cardInfoState.length > 1){
            console.log(cardInfoState);
        }else {
            console.log(Number(cardInfoState))
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <ul>
                    {cardInfoState.map((id, i) => <div className={classes.wrapper} key={i + 1}>
                        <li key={i + 2}>{id}</li>
                        <IconButton onClick={() => removeId(i)} key={i + 3} aria-label="delete" color="secondary">
                            <DeleteIcon />
                        </IconButton>
                    </div>)}
                </ul>

            </CardContent>
            <Button onClick={addValueToState}>Добавить</Button>
            <Button onClick={getResult}>Получить</Button>
        </Card>
    );
}
