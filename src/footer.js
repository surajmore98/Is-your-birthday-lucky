import './App.css';
import github from './assets/github.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';

function Footer() { 
    return (
        <footer class="footer">
            <ul class="list-non-bullet">
                <li class="list-item-inline">
                    <a href="https://github.com/surajmore98" class="link"><img alt="github" src={github} title="github"/></a>
                </li>
                <li class="list-item-inline">
                    <a href="https://www.linkedin.com/in/suraj-more-315b43119" class="link"><img src={linkedin} title="linkedin"/></a>
                </li>
                <li class="list-item-inline">
                    <a href="/" class="link"><img src={twitter} title="twitter"/></a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;