import styled from "styled-components";

const StartGame=({toggle})=>{
    return(
        <>
         <Container>
           <div> 
            <img src="/images/dices.png" alt="" /> 
           </div>
            <div className="content">
                <h1>Dices Game</h1>
                <Button onClick={toggle}> Play Game </Button>
            </div>
         </Container>
        </>
    )
}
export default StartGame ; 

const Container = styled.div`
max-width : 1180px;
height:100vh;
display:flex;
margin:0 auto;
align-item:center;

.content {
 h1{
  font-size:96px;
  white-space:nowrap;
 }
 }

 
`;

const Button = styled.button`
color : white;
padding: 10px 18px;
background:black;
boder-radius:5px;
min-width:220px;
border:none;
font-size:16px;
border:1px solid black;
curser:pointer;
transition:0.4s background ease-in;
}

&:hover{
background-color:white;
color : black;
transition:0.3s background ease-in;
}
`;


