import Particles from 'react-particles-js'
import { Carousel } from 'react-responsive-carousel'
import ProgressBar from '@ramonak/react-progress-bar'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Home.css'
import profpic from '../../resources/profpic.png'
import android from '../../resources/android.png'

const Home = () => {
    return (
        <div className='container'>
            <Particles className='particles' params={{
                particles: {
                    number: {
                        value: 125,
                        density: {
                        enable: true,
                        value_area: 950,
                        }
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        speed: 1.5,
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        }
                    }
                },
            }} />
            <div className='main'>
                <div className='main-box'>
                    <div>
                        <h1>RYOSUKE NAKANO</h1>
                        <p>Developing software for the developing world.</p>
                    </div>
                    <img src={profpic} alt='website author'></img>
                </div>
            </div>
            <div className='about'>
                <Carousel className='carousel' showStatus={false} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true}>
                    <div className='tech-stack'>
                        <h2>&lt;My Tech Stack /&gt;</h2>
                        <ul>
                            <li>
                                <span>Android Development</span>
                            </li>
                            <li>
                                <span>Front-End Web Development</span>
                            </li>
                            <li>
                                <span>Git & Version Control</span>
                            </li>
                            <li>
                                <span>Data Structures & Algorithms</span>
                            </li>
                            <li>
                                <span>MIPS Assembly</span>
                            </li>
                        </ul>
                    </div>
                    <div className='skills'>
                        <h2>&lt;Languages & Frameworks /&gt;</h2>
                        <ul>
                            <li>
                                <div>
                                    <span>Python</span>
                                    <ProgressBar className='progress' completed={85} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                        </li>
                            <li>
                                <div>
                                    <span>Kotlin</span>
                                    <ProgressBar completed={70} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Android XML</span>
                                    <ProgressBar completed={70} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>C/C++</span>
                                    <ProgressBar completed={55} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>HTML/CSS</span>
                                    <ProgressBar completed={50} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>ReactJS</span>
                                    <ProgressBar completed={50} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>JavaScript</span>
                                    <ProgressBar completed={40} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>MIPS Assembly</span>
                                    <ProgressBar completed={20} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>MATLAB</span>
                                    <ProgressBar completed={15} bgColor='#000000' height='16px' width='70%' margin='auto' labelSize='14px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='about-me'>
                        <h2>&lt;About Me /&gt;</h2>
                        <p>
                            I'm a 20-year old student from the
                            Philippines currently taking up
                            Computer Science at the University of
                            the Philippines-Diliman. <br />
                            Nice to meet you!
                        </p>
                        <p>
                            I have a
                            passion for Software Development—specifically 
                            for Web and Android—and
                            an unquenchable thirst for learning.
                            My hobbies include watching movies and
                            tv shows, writing fiction, and playing
                            basketball, among other things. When I'm
                            not typing away at a keyboard, I'm trying
                            learning Japanese (and ultimately struggling), 
                            to get in touch with my half-roots.  
                        </p>
                        <p>
                            Have I gotten your attention? Have I piqued your
                            interest? Want to work on something together? Just
                            send me a message! 
                        </p>
                    </div>
                </Carousel>
            </div>
         </div> // container end
    )
}

export default Home
