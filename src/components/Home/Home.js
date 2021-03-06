import Particles from 'react-particles-js'
import { Carousel } from 'react-responsive-carousel'
import ProgressBar from '@ramonak/react-progress-bar'
import ProjectCard from '../ProjectCard/ProjectCard'
import ContactForm from '../ContactForm/ContactForm'
import { Fade } from 'react-reveal'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Home.css'
import profpic from '../../resources/profpic.webp'
import android from '../../resources/android-icon.png'
import react from '../../resources/reactjs-icon.png'
import github from '../../resources/git-icon.png'
import algo from '../../resources/algo-icon.png'
import cpu from '../../resources/cpu-icon.png'
import fms from '../../resources/fms-app.webp'
import portfolio from '../../resources/portfolio.webp'
import memories from '../../resources/memories-app.webp'
import pikabot from '../../resources/pikabot.webp'
import istartup from '../../resources/istartup.webp'
import mipscode from '../../resources/mips-code.PNG'


const Home = () => {
    return (
        <div className='container'>
            <Particles className='particles' params={{
                particles: {
                    number: {
                        value: 160,
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

            <div className='about' id='about-section'>
                <Carousel className='carousel' showStatus={false} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true} autoPlay>
                    <div className='tech-stack'>
                        <h2>&lt;My Tech Stack /&gt;</h2>
                        <ul>
                            <li>
                                <span>Android Development</span>
                                <img src={android} alt='android icon'/>
                            </li>
                            <li>
                                <span>Front-End Web Development</span>
                                <img src={react} alt='reactjs icon'/>
                            </li>
                            <li>
                                <span>Git & Version Control</span>
                                <img src={github} alt='github icon'/>
                            </li>
                            <li>
                                <span>Data Structures & Algorithms</span>
                                <img src={algo} alt='tree structure icon'/>
                            </li>
                            <li>
                                <span>MIPS Assembly</span>
                                <img src={cpu} alt='cpu icon'/>
                            </li>

                            {/* Add more to your tech stack here */}
                        </ul>
                    </div>
                    <div className='skills'>
                        <h2>&lt;Languages & Frameworks /&gt;</h2>
                        <ul>
                            <li>
                                <div className='skill-wrap'>
                                    <span>Python</span>
                                    <ProgressBar completed={85} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                        </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>Kotlin</span>
                                    <ProgressBar completed={70} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>Android XML</span>
                                    <ProgressBar completed={70} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>C/C++</span>
                                    <ProgressBar completed={55} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>HTML/CSS</span>
                                    <ProgressBar completed={50} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>ReactJS</span>
                                    <ProgressBar completed={50} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>JavaScript</span>
                                    <ProgressBar completed={40} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'> 
                                    <span>MIPS Assembly</span>
                                    <ProgressBar completed={20} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>
                            <li>
                                <div className='skill-wrap'>
                                    <span>MATLAB</span>
                                    <ProgressBar completed={15} bgColor='#000000' height='16px' width='90%' margin='auto' labelSize='13px' baseBgColor='#ffffff' />
                                </div>
                            </li>

                            {/* Add more to your languages and frameworks here */}
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
                            passion for Software Development???specifically 
                            for Web and Android???and
                            an unquenchable thirst for learning.
                            My hobbies include watching movies and
                            tv shows, playing video games, writing fiction, and playing
                            basketball, among other things. When I'm
                            not typing away at a keyboard, I'm trying
                            learning Japanese (and ultimately struggling), 
                            to get in touch with my half-roots.  
                        </p>
                    </div>
                </Carousel>
            </div>
            
            <div className='projects' id='projects-section'>
                <Fade top> 
                    <h2 className='proj-heading'>&lt;Projects /&gt;</h2>
                </Fade>
                <Fade bottom> 
                    <div className='project-list'>
                        <ProjectCard title='Form Management App' 
                        desc='An Android app prototype made for an international business-faced company
                        during my internship. Developed using Kotlin and Android XML with MVVM Architecture, 
                        utilizing libraries such as Retrofit, OkHttp, and Kotlin Coroutines.'
                        image={fms}
                        link='none' />

                        <ProjectCard title='Online Portfolio' 
                        desc='A fully front-end personal portfolio to showcase my skills, projects, and articles 
                        related to my tech journey. Developed using HTML/CSS and JavaScript, utilizing
                        the ReactJS framework.'
                        image={portfolio}
                        link='https://github.com/rsnakano/personal-portfolio' />

                        <ProjectCard title='Memories' 
                        desc='A &#39;Notes&#39;-style Android app that was made for the purpose of writing down the 
                        biggest part of your day, and how it felt. Developed using Kotlin and Android XML.'
                        image={memories}
                        link='https://github.com/rsnakano/memories-app' />

                        <ProjectCard title='Pikachu Translator' 
                        desc='A small and fun Twitter bot that translates tweets into pikachu&#39;s 
                        &#39;language&#39;, which is basically just a bunch of random &#39;pika-pika&#39;s. 
                        Made with Python and the Tweepy API.'
                        image={pikabot}
                        link='https://twitter.com/pikatranslate' />

                        <ProjectCard title='istartUP' 
                        desc='A prototype idea proposed by our team during the hackathon of a prominent organization 
                        in our campus. It aims to help online businesses get started on their journey toward 
                        financial freedom during trying times.'
                        image={istartup}
                        link='https://drive.google.com/drive/folders/1j78_pMiWCbaBGWplRC7d0EPYFEyAaCLj' />

                        <ProjectCard title='Extending MIPS Processor' 
                        desc='Our final project for a subject that involved extending the functionality of the
                        MIPS single-cycle processor by way of adding additional instructions 
                        using SystemVerilog and Vivado.'
                        image={mipscode}
                        link='none' />

                        {/* Add more projects here */}
                    </div>
                </Fade>
            </div>
            
            <div className='contact-me' id='contact-section'>
                <Fade top>
                    <h2>&lt;Contact Me /&gt;</h2>
                </Fade>
                <p>
                    ...Have I gotten your attention? Have I piqued your
                    interest? Want to work on something together? Just
                    send me a message! 
                </p>
                <Fade bottom>
                    <ContactForm />
                </Fade>
            </div>
         </div>
    )
}

export default Home
