import './Background.css';
import video1 from '../assets/video1.mp4';
import Bg1 from '../assets/bg1.jpg';
import Bg2 from '../assets/bg-2.jpg';
import Bg3 from '../assets/bg-3.jpg';

const Background = ({ playStatus, droCount }) => {
    if (playStatus) {
        return (
            <video className="background fade-in" autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        );
    } else {
        let backgroundImage;
        if (droCount === 0) {
            backgroundImage = Bg1;
        } else if (droCount === 1) {
            backgroundImage = Bg2;
        } else if (droCount === 2) {
            backgroundImage = Bg3;
        }

        return (
            <div className="background-container">
                <img src={backgroundImage} className="background-image fade-in" alt="" />
            </div>
        );
    }
};

export default Background;