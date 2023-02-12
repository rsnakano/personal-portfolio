import Particles from 'react-particles-js'
import { Carousel } from 'react-responsive-carousel'
import ProjectCard from '../ProjectCard/ProjectCard'
import ContactForm from '../ContactForm/ContactForm'
import { Fade } from 'react-reveal'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Home.css'
import profpic from '../../resources/profpic.jpg'
import laravel from '../../resources/laravel-icon.png'
import android from '../../resources/android-icon.png'
import react from '../../resources/reactjs-icon.png'
import github from '../../resources/git-icon.png'
import algo from '../../resources/algo-icon.png'
import fms from '../../resources/fms-app.webp'
import up from '../../resources/up-v-ikot.jpg'
import bugtrack from '../../resources/bug-tracker.jpg'
import proximic from '../../resources/proximic.jpg'
import portfolio from '../../resources/portfolio.webp'
import memories from '../../resources/memories-app.webp'
import istartup from '../../resources/istartup.webp'


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
                                <span>Back-End Web Development</span>
                                <img src={laravel} alt='reactjs icon'/>
                            </li>
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

                            {/* Add more to your tech stack here */}
                        </ul>
                    </div>
                    <div className='skills'>
                        <h2>&lt;Languages /&gt;</h2>
                        <ul>
                            <li>
                                <span>Python</span>
                            </li>
                            <li>
                                <span>Kotlin</span>
                            </li>
                            <li>
                                <span>PHP</span>
                            </li>
                            <li>
                                <span>C/C++</span>
                            </li>
                            <li>
                                <span>HTML/CSS</span>
                            </li>
                            <li>
                                <span>JavaScript</span>
                            </li>
                            <li>
                                <span>SQL</span>
                            </li>
                            <li>
                                <span>C#</span>
                            </li>

                            {/* Add more to your languages and frameworks here */}
                        </ul>
                        <h2>&lt;Frameworks /&gt;</h2>
                        <ul>
                            <li>
                                <span>Laravel</span>
                            </li>
                            <li>
                                <span>Android XML</span>
                            </li>
                            <li>
                                <span>Vue.js</span>
                            </li>
                            <li>
                                <span>React.js</span>
                            </li>
                            <li>
                                <span>MySQL</span>
                            </li>
                            <li>
                                <span>Unity</span>
                            </li>
                        </ul>
                    </div>
                    <div className='about-me'>
                        <h2>&lt;About Me /&gt;</h2>
                        <p>
                            I'm a 21-year old student from the
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
                            When I'm not typing away at a keyboard, I watch tv shows, 
                            play video games, write fiction, and play
                            flag football, among other things. Currently trying
                            to learn Japanese (and ultimately struggling)
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

                        <ProjectCard title='UP V-Ikot' 
                        desc='An ongoing thesis project developed in Unity for Android devices. It is a mobile Augmented Reality
                        campus tour application for new students and campus visitors of the University of the Philippines - Diliman.'
                        image={up}
                        link='none' />

                        <ProjectCard title='Gamified Bug Tracker API' 
                        desc='An independent project developed in Laravel. An API that features useful CRUD
                        functionality for bug-tracking applications. Keeps track of scores, projects, users, bugs, and handles authentication.'
                        image={bugtrack}
                        link='https://github.com/rsnakano/gamified-bug-tracker' />

                        <ProjectCard title='Proximic' 
                        desc='A 2D virtual world with a proximity-based voice-chat feature made with React.js and HTML/CSS for the
                        front-end and Firebase for the back-end.'
                        image={proximic}
                        link='https://proximic-a2a4e.web.app/' />

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

                        <ProjectCard title='istartUP' 
                        desc='A prototype idea proposed by our team during the hackathon of a prominent organization 
                        in our campus. It aims to help online businesses get started on their journey toward 
                        financial freedom during trying times.'
                        image={istartup}
                        link='https://drive.google.com/drive/folders/1j78_pMiWCbaBGWplRC7d0EPYFEyAaCLj' />

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
