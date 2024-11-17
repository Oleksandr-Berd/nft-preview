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
          <SC.CardContent>Our Equilibrium collection promotes balance and calm.</SC.CardContent>
          <SC.InfoCon>
            <div>
              <img src={ethereum} alt="ethereum" />
              <SC.Ethereum>0.041 ETH</SC.Ethereum>
            </div>
            <div>
              <img src={clock} alt="clock" />
              <SC.TimeTerm>3 days left</SC.TimeTerm>
            </div>
          </SC.InfoCon>
        </div>
        <SC.AuthorCon>
          <img src={avatar} alt="avatar" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </SC.AuthorCon>
      </SC.CardCon>
    );
}
 
export default Card;