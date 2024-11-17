import * as SC from "./SharedLayoutStyled"

import Card from "../../components/Card/Card";

const SharedLayout:React.FC = () => {
    return ( 
        <SC.SharedLayoutCustom>
            <Card/>
        </SC.SharedLayoutCustom>
     );
}
 
export default SharedLayout;