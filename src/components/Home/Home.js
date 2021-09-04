import Particles from 'react-particles-js'
import './Home.css'
import profpic from '../../resources/profpic.png'

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
                
            </div>
         </div> // container end
    )
}

export default Home
