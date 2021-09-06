import './Footer.css'
import github from '../../resources/github-icon.png'
import linkedin from '../../resources/linkedin-icon.png'
import mywhitelogo from '../../resources/my-logo-white.png'

const Footer = () => {
    return (
        <footer>
            <a href='/'>
                <img src={mywhitelogo} alt='author logo'/>
            </a>
            <p>RYOSUKE NAKANO</p>
            <div className='icons'>
                <a href='https://github.com/rsnakano' target="_blank" 
                rel="noopener noreferrer">
                    <img src={github} alt='github logo'/>
                </a>
                <a href='https://linkedin.com/in/rsnakano' target="_blank" 
                rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin logo'/>
                </a>
            </div>
            <p>Icons by <a href='' target="_blank" 
            rel="noopener noreferrer">icons8</a>
            </p>
            <p>Copyright &copy; 2021 | CC BY-SA</p>
        </footer>
    )
}

export default Footer
