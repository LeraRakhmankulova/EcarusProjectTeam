import axios from "axios"
import MapCard from "../../components/Cards/MapCard/MapCard"
import MapCardPlug from "../../components/Plugs/MapCardPlug/MapCardPlug"
import cardInfo from '../../assets/images/mapCard.svg'
import { useState } from "react"
import BottomSheet from "../../components/BottomSheet/BottomSheet"



const AboutService = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <button onClick={() => setMenuActive(!menuActive)}>
        аКтивиЗиРую
      </button>
      <div >
        <BottomSheet active={menuActive} setActive={setMenuActive} action={() => setMenuActive(!menuActive)} />
      </div>
    </div>

  )
}

export default AboutService;