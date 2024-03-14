import'./Scroll.css'
import { Parallax } from "react-parallax";

const Scroll = () => {
    return (
        <div className='nav'>
            <Parallax strength={600}>
                <div className="content">
                    <div className="text-content">
                        First parallax
                    </div>
                </div>
            </Parallax>

            <div className="content"></div>
        </div>
    )
}

export default Scroll

