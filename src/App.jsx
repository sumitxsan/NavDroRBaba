import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Dro from "./Components/Dro/Dro";
import Scroll from "./Components/Scroll/Scroll";



const App = () =>{
  let droData =[
    {text1:"",text2:""},
    {text1:"",text2:""},
    {text1:"",text2:""},
  ]
  const [droCount,setDroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setDroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return(
    <>
    <div>
      <Background playStatus={playStatus} droCount={droCount}/>
      <Navbar />
      <Dro 
        setPlayStatus={setPlayStatus}
        droData={droData[droCount]}
        droCount={droCount}
        setDroCount={setDroCount}
        playStatus={playStatus}
      />
    </div>

    <div>
      <Scroll />
    </div>
    </>
  )
}

export default App