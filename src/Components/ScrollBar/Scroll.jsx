import'./Scroll.css'
import video1 from '../assets/video1.mp4'
import Bg1 from '../assets/bg1.jpg'
import Bg2 from '../assets/bg-2.jpg'
import Bg3 from '../assets/bg-3.jpg'


const Scroll = ({playStatus,droCount}) => {

    if (playStatus) {
        return (
            <div>
            <video className="background fade-in" autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
            </div>
        )
    }
    else if(droCount===0)
    {
        return <img src={Bg1} className="background fade-in" alt="" />
    }
    else if(droCount===1)
    {
        return <img src={Bg2} className="background fade-in" alt="" />
    }
    else if(droCount===2)
    {
        return <img src={Bg3} className="background fade-in" alt="" />
    }

    
};

export default Scroll

