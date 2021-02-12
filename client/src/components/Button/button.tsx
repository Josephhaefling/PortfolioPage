import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import useStyles from '../styles/styles.js';


const NewButton = (props: any) => {
    
    const styles = useStyles()
    const { type } = props

    return (
        <Link 
            className={styles.link} 
            to={`/${ type }`}
            aria-label='recipes page'
            style={{textDecoration: "none"}}
        >
            <img src={props.src} alt={`${ type }-button`}></img>
            { type }
        </Link>
    )
}

export default NewButton