import'./Dro.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Dro = ({droData,setDroCount,droCount,setPlaySatus,playStatus}) => {
    return (
        <div className='dro'>
            <div className="dro-text">
                <p>{droData.text1}</p>
                <p>{droData.text2}</p>
            </div>

            <div className="dro-explore">
                <p>Explore the features</p>
                <img src={arrow_btn} alt="" />
            </div>

            <div className="dro-dot-play">
                <ul className="dro-dots">
                    <li onClick={()=>setDroCount(0)} className={droCount===0?"dro-dot ok":"dro-dot"}></li>
                    <li onClick={()=>setDroCount(2)} className={droCount===2?"dro-dot ok":"dro-dot"}></li>
                    <li onClick={()=>setDroCount(1)} className={droCount===1?"dro-dot ok":"dro-dot"}></li>
                </ul>

                <div className="dro-play">
                    <img onClick={()=>setPlaySatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                    <p>Watch the video</p>
                </div>
            </div>
        </div>
    )
}

export default Dro