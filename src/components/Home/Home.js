import profpic from '../../resources/profpic.png'

const Home = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='main-box'>
                    <div>
                        <h1>RYOSUKE NAKANO</h1>
                        <p>Developing software for the developing world</p>
                    </div>
                    <img src={profpic}></img>
                </div>
            </div>
        </div>
    )
}

export default Home
