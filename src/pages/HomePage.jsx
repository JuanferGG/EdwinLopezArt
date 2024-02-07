import React, { useEffect } from 'react';
import '../styles/HomeStyles.css'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const HomePage = () => {

    useEffect(() => {
        document.title = "Edwin Lopez.Art";
    }, []);

    return (
        <>
            <NavBar />
            <main>
                <section>
                    <div className="galery">
                        <div className="column">
                            <article className="galery-item" style={{ marginTop: '5em' }}>
                                <img src="https://i.imgur.com/Q5YDKeL.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/qX79Dle.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/2YtDOKS.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/UCkPdTq.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/LMWvdMT.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/107306W.jpg" className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/o5YMvNO.jpg" className="image" />
                            </article>
                        </div>

                        <div className="column">
                            <article className="galery-item">
                                <img src="https://i.imgur.com/wq0IHfo.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/Q2tDKwD.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/wggUDqg.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/nh6Tc4M.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/MvCVwdn.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/KggESmz.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/yMpEyFh.jpg"
                                    className="image" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/RsmRgmt.jpg"
                                    className="image" />
                            </article>

                        </div>
                        <div className="column">
                            <article className="galery-item" style={{ marginTop: '7em' }}>
                                <img src="https://i.imgur.com/RQrqex5.jpg"
                                    alt="" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/KrsHB4h.jpg"
                                    alt="" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/AmMCXyO.jpg"
                                    alt="" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/wUJ5cEK.jpg"
                                    alt="" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/EjWbpQj.jpg" alt="" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/nC3Ut1n.jpg"
                                    alt="" />
                            </article>
                            <article className="galery-item">
                                <img src="https://i.imgur.com/jvtWGtr.jpg"
                                    alt="" />
                            </article>
                        </div>
                    </div>

                    <div className="perfil">
                        <img className="rounded-circle"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHwUI09Nq6EcB4tDXjHB6FsAhUryFypNiEg&usqp=CAU"
                            alt="" />
                        <div className="info">
                            <h1 className="fs-2 fw-bold" >Edwin Lopez Fajardo</h1>
                            <p className="fs-5" style={{ width: '80%' }}><b>Creatividad</b>, Técnica, Pasión, Originalidad.</p>
                            <a href="#about" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Mas...</a>
                        </div>
                    </div>
                </section>

                <section className="d-flex sect_02" id="about" style={{ justifyContent: 'center', alignItems: 'center', background: '#e7fefb', paddingTop: '4em', }}>
                    <div className="container d-flex gap-5" style={{ justifyContent: 'center' }}>
                        <img src="https://i.imgur.com/1AyYVR3.jpg" style={{ width: '350px', height: '500px', borderRadius: '7px', boxShadow: '0 0 5px grey' }} alt="" />
                        <div className="container_info d-flex flex-column" style={{ justifyContent: 'center', alignItems: 'center', width: '400px' }}>
                            <h1 style={{ width: '80%', fontSize: '3em', padding: '.4em 0', fontWeight: 'bold' }} className="fw-bold">¿Quien Soy?</h1>
                            <p style={{ width: '100%', fontSize: '1.3em', textWrap: 'balance' }}>Soy <b>Edwin López Fajardo</b>, un artista multidisciplinario apasionado por el arte y la belleza. Como <b>pintor, artista plástico y publicista</b>, mi trabajo busca capturar la esencia de la vida y ofrecer una experiencia estética única y memorable.</p>
                            <a className="down_cv" id="down_cv" href="https://drive.google.com/uc?id=1H1AhMAW-gjoRd0-zC3HHmX-sG64LKIsq&export=download&authuser=0" target="_blank" rel="noopener noreferrer">Here CV</a>
                        </div>
                    </div>
                </section>

                <section className="sect_03" style={{ display: 'flex', alignItems: 'center', background: '#e7fefb', paddingTop: '4em' }}>
                    <div className="" style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#cdfcf65f', position: 'relative', top: '1px', boxShadow: '0 0 10px grey' }}>
                        <h2 className="fw-bold" style={{ fontSize: '3em', padding: '.4em 0' }}>Arte y Vida</h2>
                        <p style={{ maxWidth: '45ch', minWidth: '20ch', padding: '0 1em', fontSize: '1.3em', textWrap: 'balance' }}>Bienvenido al mundo de un artista que vive y respira su arte. Con una <b>dedicación inquebrantable</b> y una <b>visión única</b>, este creador infunde vida a cada proyecto con una mezcla perfecta de <b>talento y pasión</b>. Explora su universo creativo y déjate inspirar por la belleza que emana de su trabajo.</p>
                    </div>
                    <article style={{ width: '50%', height: '100%' }}>
                        <img className='imgProfile' src="https://i.imgur.com/2MgJTxQ.jpg" style={{ width: '100%', position: 'relative', top: '1px', boxShadow: '0 0 10px grey' }} alt="" />
                    </article>
                </section>

                <Footer />
            </main >
        </>
    )
}

export default HomePage;
