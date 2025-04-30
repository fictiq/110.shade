'use client'

import React from 'react'
import { useState, useEffect } from 'react';

//const useStyles = createStyles((theme) => ());


export default function Component() {
    //const { classes, cx } = useStyles();
    const [activeOption, setActiveOption] = useState('GAME');
    const [flickerOpacity, setFlickerOpacity] = useState(1);

    var actionOne = () => {
        document.location.href = '/hexmap'


    }

    var actionTwo = () => {

        document.location.href = '/scene'


    }

    var actionThree = () => {

        document.location.href = '/camera'


    }



    // Film flicker effect
    useEffect(() => {
        const flickerInterval = setInterval(() => {
            const randomOpacity = Math.random() * 0.1 + 0.9; // Between 0.9 and 1.0
            setFlickerOpacity(randomOpacity);
        }, 100);

        return () => clearInterval(flickerInterval);
    }, []);

    return (

        <div>
            TITLE
        </div>
    );
}