import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../components/Header'
import bg from '../images/bg-min.jpg'
import asu from '../images/ASU-min.jpg'
import uofahonors from '../images/uofahonors-min.jpg'
import '../assets/scss/layout/projects.scss'
import api from '../images/API-min.jpg'
import elevation from '../images/elevation shot-min.jpg'
import aztech from '../images/aztech-min.jpg'
import Footer from '../components/Footer'
import woodville from '../images/Woodville Farms.jpg'
import ppUofNC from '../images/Project Profile - University of North Carolina.pdf'
import ppAPI from '../images/Project Profile - SPF Continuous Insulation.pdf'
import ppCola from '../images/Project Profile - Coca-Cola Warehouse Office.pdf'
import ppWood from '../images/Project Profile - Woodville Farms.pdf'
import ppYulman from '../images/Project Profile - Yulman.pdf'

import cola from '../images/coca cola.jpg'
import jul from '../images/yul-overall.jpg'








export default function projects() {
    return (
        <div className='page'>
          <Helmet>
          <meta charSet="utf-8" />
          <title>Insulation Projects</title>
          <link rel="canonical" href="https://swdarchproducts.com/projectsWall/" />
        </Helmet>
            <Header></Header>
               
                <div></div>
                <div className='content-container'>

                    <div id='section_0' style={{"height": "auto"}}>
                        <h1 className='ccTitle'>Spray Foam Insulation Projects</h1>
                    <div class="container-proj">
  <div class="card-columns">
    
    
    <a href={ppUofNC} target='_blank' rel='noreferrer' id='card' >
      <img alt='insulation' class="card-img-top12"  src={elevation} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">University of North Carolina</h3>
        <h4 class="card-subtitle">University of North Carolina at
Wilmington, NC</h4>
        <button href={ppUofNC} target='_blank' rel='noreferrer' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    {/* <a href={ppAPI} target='_blank' rel='noreferrer' id='card' >
      <img alt='insulation' class="card-img-top1"  src={api} alt="Card image top"/>
      <div class="card-body1">
      <h3 class="card-title">API Training Center</h3>
      <h4 class="card-subtitle">Brighton, MN</h4>
      <button href={ppAPI} target='_blank' rel='noreferrer' className='cardButton'>Read Full Study</button>
      </div>
    </a> */}
    {/* <a href={ppCola} target='_blank' rel='noreferrer' id='card' >
      <img alt='insulation' class="card-img-top1"  src={api} alt="Card image top"/>
      <div class="card-body1">
      <h3 class="card-title">Coca-Cola Warehouse</h3>
      <h4 class="card-subtitle">Montgomery, AL</h4>
      <button href={cola} target='_blank' rel='noreferrer' className='cardButton'>Read Full Study</button>
      </div>
    </a> */}
    <a href={ppAPI} target='_blank' rel='noreferrer' id='card' >
      <img alt='insulation' class="card-img-top1"  src={api} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">API Training Center</h3>
        <h4 class="card-subtitle">New Brighton, MN</h4>
        <button href={ppAPI} target='_blank' rel='noreferrer' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    <a href={ppYulman} target='_blank' rel='noreferrer' id='card' >
      <img alt='insulation' class="card-img-top1"  src={jul} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">YULMAN STADIUM
TULANE UNIVERSITY</h3>
        <h4 class="card-subtitle">New Orleans, LA</h4>
        <button href={ppYulman} target='_blank' rel='noreferrer' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    <a href={ppWood} target='_blank' rel='noreferrer' id='card' >
      <img alt='insulation' class="card-img-top12"  src={woodville} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Woodville Farms</h3>
        <h4 class="card-subtitle">Woodville, Ontario Canada</h4>
        <button href={ppWood} target='_blank' rel='noreferrer' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    </div>
  </div>
  </div>
</div>
<div>
        </div> 
        <Footer/>
        </div>
    )
}
