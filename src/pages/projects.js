import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import '../assets/scss/layout/architectsStepper.scss'
import bg2 from '../images/bg2-min.jpg'
import img2 from '../images/Roofing_Edited_2-min.jpg'
import { Link } from 'gatsby'
import bgimg from '../images/bg-min.jpg'
import pic1 from '../images/QS112_Edited_6-min (2).jpg'
import * as Icon from 'react-feather'
import '../assets/scss/layout/_main.scss'
import uofa from '../images/uofahonors-min.jpg'
import jul from '../images/yul-overall.jpg'


import greenguard from '../images/greenguard logo (1).jpg'
import abaa from '../images/abaa.svg'
import icon2 from '../images/icon2.jpg'
import greenbuilding from '../images/greenbuilding.jpg'
import masterSpec from '../images/images.jpg'




export default function architectsStepper() {
    return (
        <div className='page'>
            {/* <img alt='background image' className='stepperimg' src={uofa}></img> */}
            <Header/>
        <div className='archStepper1'>
            <div className='stepperPage1' >
            <CardDeck id='cardDeck1'>
                <a href='/projectsWall/'className='cardLink'>
                    <Card className='stepperCard1'>
                        <Card.Img className='cardImg' variant="top" src={jul} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>Insulation Projects
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText1'>
                                QUIK-SHIELD® Spray Foam insulation is the most effective way to insulate any type of building. Whether using an open-cell foam or a two pound closed-cell foam, spray foam creates an unsurpassed air barrier insulation system. This air barrier not only delivers thermal resistance against conduction (R-value) that surpasses batt and cellulose, it also dramatically reduces energy loss through convection.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='cardLink' href='/projectsRoof/'>
                    <Card className='stepperCard1'>
                        <Card.Img className='cardImg'  variant="top" src={uofa} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle1'>
                                Roofing Projects
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText1'>
                                QUIK-SHIELD® Seamless Monolithic Urethane Foam Roof System
From roof edge to roof edge QUIK-SHIELD® urethane foam provides a seamless roof with no mechanical fasteners, providing the building with an unsurpassed air barrier and increased thermal resistance. QUIK-SHIELD® also provides self-flashing around HVAC curbs, vents, and skylights, adding additional protection against moisture and air infiltration through otherwise failed metal flashings.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </CardDeck>
        </div>
        <div className='isoBand'>
            <img alt='stepper' className='ISO1' src={abaa}></img>
            <img alt='stepper' className='ISO12' src={greenguard}></img>
            <img alt='stepper' className='ISO' src={icon2}></img>
            <img alt='stepper' className='ISO11' src={masterSpec}></img>
            <img alt='stepper' className='ISO1' src={greenbuilding}></img>

        </div>
        </div>
        </div>
    )
}
