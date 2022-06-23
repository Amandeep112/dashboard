import React from 'react'
import classes from './sidebar.module.css'
import Navbar from '../navbar/Navbar'
import Side from '../side/Side'
 
 




export default function Home() {
     

    return (
        <div className={classes.home}>
            <Side />
            <div className={classes.homeContainer}>
                <Navbar />
                 <div className={classes.imageGraph}>
                    <img src='/saasas.jpg' alt='grapthimfdad' width='100%' height='620px'></img>
                     </div> 
            </div>
           
        </div>
    )
}
