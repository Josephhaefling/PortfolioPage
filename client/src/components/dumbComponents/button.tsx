import React from 'react';
import { Link, Button } from "@material-ui/core";
import useStyles from '../styles/styles.js';

const NewButton = (props: any) => {
    
    const styles = useStyles()
    const { type } = props

    return (
        props.src ? (
        <Link 
            className={styles.link} 
            // variant="contained"
            // size="large"
            // type="submit"
            // fullwidth
        >
            <img src={props.src} alt={`${ type }-button`}></img>
            { type }
        </Link>
    ): (
    <Button >
            { type }
    </Button>
    ))
}

export default NewButton