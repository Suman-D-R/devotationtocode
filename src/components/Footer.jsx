import '../componentscss/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerBar">
                <ul className="footerList">
                    <li><a href="https://instagram.com/devotiontocode?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
                    <li><a href="https://t.me/devotiontocode"><FontAwesomeIcon icon={faTelegram} />Telegram</a></li>
                    <li><a href="https://chat.whatsapp.com/BhTQl7F9Nky1B5XxxqPqsm"><FontAwesomeIcon icon={faWhatsapp} />Whatsapp</a></li>
                </ul>
                <div className='t'><a className="a" href='/TermsAndCondition'>TermsAndCondition</a></div>
            </div>
        </div>
    );
}

export default Footer;
