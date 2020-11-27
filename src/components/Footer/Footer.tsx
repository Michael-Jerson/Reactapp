import React from 'react'
import './footer.css';

function Footer(){
    return(
        <div>
            <section className="footer-size">
                <div className="text-footer">
                    <h4>myflags.com</h4>
                    <ul className="footer-links">
                <li><a className="texts" href="../Home">Home</a></li>
                <li><a className="texts" href="../Flags">Flags</a></li>
        </ul>
                    <h5>© 2020 myflags.com</h5>
                </div>
            </section>
        </div>
    );
}
export default Footer;