import * as SC from "./CardStyled"

import  equilibrium from "../../assets/images/image-equilibrium.jpg"
import ethereum from "../../assets/images/icon-ethereum.svg"
import clock from "../../assets/images/icon-clock.svg"
import avatar from "../../assets/images/image-avatar.png"

const Card:React.FC = () => {
    return (
      <SC.CardCon>
        <SC.HeroImgCon>
          <img src={equilibrium} alt="equilibrium" />
        </SC.HeroImgCon>
        <div>
          <SC.CardTitle>Equilibrium #3429</SC.CardTitle>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div>
            <div>
              <img src={ethereum} alt="ethereum" />
              <p>0.041 ETH</p>
            </div>
            <div>
              <img src={clock} alt="clock" />
              <p>3 days left</p>
            </div>
          </div>
        </div>
        <div>
          <img src={avatar} alt="avatar" />
          <p>
            Creation of<span>Jules Wyvern</span>
          </p>
        </div>
      </SC.CardCon>
    );
}
 
export default Card;