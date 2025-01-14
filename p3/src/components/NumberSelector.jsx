import styled from "styled-components";

const NumberSelector = ({setError,error,selectedNumber,SetselectedNumber}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler=(value)=>{
    SetselectedNumber(value)
    setError("")
  }

    // console.log(selectedNumber)
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">

                {arrNumber.map((value, i) => (
                    <Box
                        key={i}
                        onClick={() => SetselectedNumber(value)}
                        isSelected={value === selectedNumber} >
                        {value}
                    </Box>))}
{/* <Box>1 </Box>
<Box>2 </Box>
<Box>3 </Box>
<Box>4 </Box>
<Box>5 </Box>
<Box>6 </Box> */}
            </div>

            <p>Select Number</p>
        </NumberSelectorContainer>


    )
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:end;

.flex{
display:flex;
gap:24px;
}

p {
font-size:24px;
font-wieght:800;
}

.error{
color:red
}
`;


const Box = styled.div`

height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color:${(props) => (props.isSelected ? "black" : "white")};
color:${(props) => (!props.isSelected ? "black" : "white")};

`;