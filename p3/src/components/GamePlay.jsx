import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNumber, SetselectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError]= useState("");
    


    const genrateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if(!selectedNumber){
         setError("You have not selected any number");
         return;}
         setError("");

        const randomNumber = genrateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);
        
        if(selectedNumber === randomNumber){
            setScore((prev)=> prev + randomNumber);
        }
        else{
            setScore((prev)=> prev-2);
        }
        SetselectedNumber(undefined)
    }

    return (
        <>
            <MainContainer>
                <div className="top_section">
                    <TotalScore   score={score} />
                    <NumberSelector  error={error} 
                    setError={setError}
                    selectedNumber={selectedNumber}
                        SetselectedNumber={SetselectedNumber} />
                </div>
                <RoleDice currentDice={currentDice} roleDice={roleDice} />
            </MainContainer>

        </>
    )
};

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
.top_section{
display:flex;
justify-content:space-around;
align-items:end;
}

`;