import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ?  'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <img src="https://occ-0-4368-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRdazNu6uy4Rly4bcQDVjP2_RZIadPfvGvIpzGykmqHz3GK-1OdHCiTqYYH1OmQfzHS2lvdo2wJYgutlnC2Dygutc-_g.png?r=cea" alt="Perfil Usuário" />
                </a>
            </div>
        </header>
    );
}