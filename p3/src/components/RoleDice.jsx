import styled from "styled-components";



const RoleDice = ({roleDice, currentDice}) => {
    

    

    // let x=1
    // console.log(x++);
    // console.log(+xx);
    // console.log(5+"5"-1)


    return <DiceContainer>

        <div className="dice" onClick={roleDice}  >
            <img src={`/images/dice/dice${currentDice}.png`} alt="1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
}
export default RoleDice;


const DiceContainer = styled.div`
margin-top:58px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

.dice{
cursor:pointer;
}
 p{
 font-size:24px;
 }
img{
 width:134px;
 height:140px;
 }

`