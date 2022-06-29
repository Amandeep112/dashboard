import React, { useState } from 'react'
import classes from './side.module.css'
import { Link } from 'react-router-dom'


export default function Side() {
  const [state, setstate] = useState(false);
  const catgoryClick = () => {
    setstate(true)
  }
  return (
    <div className={classes.sidebar}>
      <div className={classes.logodetails}>
      <Link to='/sidebar'>
      <i className="fa-solid fa-chess-queen"></i>
      </Link>  
        <p className={classes.logoName}>Mysense</p>
      </div>
      <hr></hr>
      <ul className={classes.sidelinks}>
        <li>
           
            <a href='##'>
              <i className="fa-brands fa-buffer"></i>
              <div className={classes.NameArrow}>
                 <p className={classes.linkName}>Dashboard</p>
              </div>
              <p> <i className="fa-solid fa-angle-down"></i></p>
            </a>
         
        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-solid fa-border-all" onClick={catgoryClick}></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} onClick={catgoryClick} >Catagory</p>
              </div>
              <p>  <i className={`fa-solid fa-angle-down` }   ></i></p>
            
            </a>
          </div>
          <ul className={state ? classes.sub_menu : classes.sub_menuOpen}>
            <li><Link to='/userlist' style={{ textDecoration: 'none' }}> <li id={classes.label}>Manage-user</li></Link>
            </li>
            <li>
              <Link to='/adduser' style={{ textDecoration: 'none' }}><li id={classes.label}>Adduser</li></Link>

            </li>
          </ul>

        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-brands fa-product-hunt"></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} >Products</p>
              </div>
              <p><i className="fa-solid fa-angle-down"></i></p> 
             
            </a>
          </div>

        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-solid fa-image-portrait"></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} >Posts</p>
              </div>
              <p> <i className="fa-solid fa-angle-down"></i></p> 
              
            </a>
          </div>

        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-solid fa-chart-line"></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} >Analytics</p>
              </div>
              <p> <i className="fa-solid fa-angle-down"></i></p>
              
            </a>
          </div>

        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-solid fa-chart-gantt"></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} >Chart</p>
              </div>
              <p>  <i className="fa-solid fa-angle-down"></i></p>
              
            </a>
          </div>

        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-solid fa-plug"></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} >Plugins</p>
              </div>
              <p> <i className="fa-solid fa-angle-down"></i></p>
            
            </a>
          </div>

        </li>
        <li>
          <div className={classes.responsive}>
            <a href='##'>
              <i className="fa-solid fa-gear"></i>
              <div className={classes.NameArrow}>
              <p className={classes.linkName} >Settings</p>
              </div>
              <p> <i className="fa-solid fa-angle-down"></i></p>
             
            </a>
          </div>

        </li>
      </ul>






    </div>


  )
}
