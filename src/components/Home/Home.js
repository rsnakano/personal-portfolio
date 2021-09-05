import Particles from 'react-particles-js'
import { Carousel } from 'react-responsive-carousel'
import ProgressBar from '@ramonak/react-progress-bar'
import ProjectCard from '../ProjectCard/ProjectCard'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Home.css'
import profpic from '../../resources/profpic.png'
import android from '../../resources/android-icon.png'
import react from '../../resources/reactjs-icon.png'
import github from '../../resources/git-icon.png'
import algo from '../../resources/algo-icon.png'
import cpu from '../../resources/cpu-icon.png'


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
                            tv shows, playing video games, writing fiction, and playing
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
            <div className='projects'> 
                <h2 className='proj-heading'>&lt;Projects /&gt;</h2>
                <div className='project-list'>
                    <ProjectCard title='Form Management System' 
                    desc='An Android app prototype made for an international business-faced company
                    during my internship. Developed using Kotlin and Android XML, utilizing 
                    libraries such as Retrofit, OkHttp, and Kotlin Coroutines.'
                    image={profpic}
                    link='http://rsnakano.surge.sh/' />
                    <ProjectCard title='Online Portfolio' 
                    desc='A fully front-end personal portfolio to showcase my skills, projects, and articles 
                    related to my tech journey. Developed using HTML/CSS and JavaScript, utilizing
                    the ReactJS framework.'
                    image={profpic}
                    link='https://github.com/rsnakano/personal-portfolio' />
                    <ProjectCard title='Memories' 
                    desc='A &#39;Notes&#39;-style Android app that was made for the purpose of writing down the 
                    biggest part of your day, and how it felt. Developed using Kotlin and Android XML.'
                    image={profpic}
                    link='https://github.com/rsnakano/memories-app' />
                    <ProjectCard title='Pikachu Translator' 
                    desc='A small and fun Twitter bot that translates tweets into pikachu&#39;s 
                    &#39;language&#39;, which is basically just a bunch of random &#39;pika-pika&#39;s. 
                    Made with Python and the Tweepy API.'
                    image={profpic}
                    link='https://twitter.com/pikatranslate' />
                </div>
            </div>
         </div> // container end
    )
}

export default Home
