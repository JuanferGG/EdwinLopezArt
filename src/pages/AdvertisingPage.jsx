// TODO Imports
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// TODO ICONS
import { FaReact } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiFillBank } from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";

// TODO CSS
import '../styles/AdvertisingPage.css'
import 'react-vertical-timeline-component/style.min.css';
import Testimonials from '../components/Pures/Testimonials';

const AdvertisingPage = () => {

    useEffect(() => {
        document.title = "Adversing Page";
    }, []);

    return (
        <main>

            <NavBar />
            <section id="sect-01">
                <div className="left">

                </div>
                <div className="right">
                    <h2 style={{ fontSize: '3em', width: '12ch' }}>Haz Realidad <b>Tus Sueños</b></h2>
                    <p style={{ minWidth: '75%', maxWidth: '75%', fontSize: '1.4em' }}>Con mi pasión y experiencia, <b>transformo tus ideas</b> en obras concretas y vibrantes. Cada trazo y color se fusionan para dar vida a tus <b>visiones más profundas</b>. Juntos, podemos <b>convertir tus sueños</b> en una hermosa realidad.</p>
                </div>
            </section>

            <section id='sect-02'>
                <div className="left">
                    <h2 style={{ fontSize: '3em', width: '17ch', textAlign: 'center' }}>Descubre el <b>Arte en Cada Rincón</b></h2>
                    <p style={{ minWidth: '73%', maxWidth: '73%', fontSize: '1.4em' }}>Explora un mundo de <b>creatividad y expresión</b> en cada detalle. Desde paisajes urbanos hasta retratos íntimos, cada obra cuenta una <b>historia única</b>. Sumérgete en un viaje visual donde el arte cobra vida y la <b>imaginación se convierte en realidad</b>. ¡Déjate inspirar y descubre el arte en cada rincón!</p>
                </div>
                <div className="right">

                </div>
            </section>

            <section id='experiences' style={{ height: 'fit-content', paddingBottom: '5em' }}>
                <h1 style={{ textAlign: 'center', fontSize: '4em', margin: '.8em 0' }}>Experiencias</h1>
                <VerticalTimeline lineColor='black' >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#cdfcf65d', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#cdfcf65d', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<CiLinkedin />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#cdfcf65d', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<AiFillBank />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#cdfcf65d', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<AiFillExperiment />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>

            <section style={{ height: 'fit-content', paddingBottom: '5em' }}>
                <h1 style={{ paddingTop: '.8em', fontSize: '4em', fontWeight: 'bold', textAlign: 'center' }}>Testimonios</h1>
                <Testimonials/>
            </section>

            <Footer />
        </main>
    );
}

export default AdvertisingPage;
