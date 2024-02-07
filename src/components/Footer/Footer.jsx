import React from 'react';
import './FooterStyles.css'

const Footer = () => {
    return (
        <footer>
            <div className="left_footer">
                <h3>edwinfaridlopez@gmail.com</h3>
            </div>
            <article>
                <img
                    src="https://img.freepik.com/vector-gratis/diseno-fondo-texturas-pintura_1343-68.jpg?w=2000"
                    alt=""
                    className="rounded-circle"
                    style={{ width: '120px', height: '120px', boxShadow: '0 0 7px grey' }}
                />
            </article>
            <div className="right_footer">
                <h2 className="fw-bold">Redes</h2>
                <ul>
                    <li><a target='_blank' href="https://es-la.facebook.com/edwin.fajardo.71465572"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
