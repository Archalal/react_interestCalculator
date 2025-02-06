
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react';


function App() {
  
  //to store the value of all those on these variable

  const[principalAmout,setPrincipalAmout]=useState(0);
  const[rateOfAmount,setRateOfAmount]=useState(0);
  const[timePeriod,setTimePeriod]=useState(0);
  const[intersetCal,setIntersetCal]=useState(0);


  //this to check whelther the input field does the enter the digit

  const[isNotValidNumber,setNotValidNumber]=useState(false)
  const[isNotValidInterstNumber,setNotValidInterstNumber]=useState(false)
  const[isTimeNotValid,setIsTimeNotValid]=useState(false)


  
  const onTextChange=(values)=>{
     
    // console.log(value.name);
    if(values.name==="principalAmount")
    {
      let checkValueOfDigit=!!values.value.match(/^[0-9]*.?[0-9]+$/);
      // console.log(checValueOfDigit);
      setNotValidNumber(!checkValueOfDigit)
      setPrincipalAmout(values.value)
      

    }
    else  if(values.name==="rateOfInterset")
      {
        let checkrateOfInterset=!!values.value.match(/^[0-9]*.?[0-9]+$/);
        // console.log(checValueOfDigit);
        setNotValidInterstNumber(!checkrateOfInterset)
        setRateOfAmount(values.value)
        
  
      }

      else  if(values.name==="timePeriod")
        {
          let checksetIsTimeNotValid=!!values.value.match(/^[0-9]*.?[0-9]+$/);
          // console.log(checValueOfDigit);
          setIsTimeNotValid(!checksetIsTimeNotValid)
          setTimePeriod(values.value)
          
    
        }
    
    
    

  }
  const  calculateInterset=()=>{
    if(principalAmout && rateOfAmount &&timePeriod){
      setIntersetCal((principalAmout*rateOfAmount*timePeriod)/100);

    }
    else{
      alert("please fill")
    }
  }
  const reset=()=>{
      setPrincipalAmout("");
      setRateOfAmount("");
      setTimePeriod("");
      setIntersetCal(0);
      setNotValidNumber(false);
      setNotValidInterstNumber(false);
      setIsTimeNotValid(false);
    
  }

  return (
    <>
        <div className='d-flex justify-content-center bg-dark ' style={{height:"100vh",width:"100%"}}>
          <div className='p-5 bg-light ' style={{width:"40%",height:"80%",marginTop:"6%"}}>
            <h4>Simple Interest</h4>
            <p>calculate you simple interest</p>
            <div className='bg-warning'style={{textAlign:"center"}}>
              <h3>${intersetCal}</h3>
              <p> Total simple interest</p>
            </div>
            <div>



          {/*  onChange is an event it perform when we input some values in input box and an function when the 
          we type the function will call */}

          <TextField
                  onChange={(event)=>onTextChange(event.target)}
           id="outlined-basic" 
           label="principal amount" 

            name="principalAmount"
            value={principalAmout || ""}
           variant="outlined" style={{marginTop:"10px" ,width:"100%"}} />
          </div>

          <div className='text-danger'>
            {isNotValidNumber?"Enter a valid digit":""}
          </div>



          <div>
          <TextField 
           onChange={(event)=>onTextChange(event.target)}
           value={rateOfAmount || ""}
           id="outlined-basic" label="rate of interest"  name="rateOfInterset"variant="outlined" style={{marginTop:"10px" ,width:"100%"}} />
          </div>
          <div className='text-danger'>


            {isNotValidInterstNumber?"Enter a valid Interest digit":""}
          </div>



          <div>
          <TextField 
           onChange={(event)=>onTextChange(event.target)}
           name="timePeriod"
           value={timePeriod || ""}
          id="outlined-basic" label="time period" variant="outlined" style={{marginTop:"10px" ,width:"100%"}} />
          </div>
          <div className='text-danger'>
            {isTimeNotValid?"Enter a valid  digit":""}
          </div>



         <div>
         <Stack direction="row" spacing={2}>
         <Button
         disabled={isNotValidNumber||isNotValidInterstNumber||isTimeNotValid}
         onClick={calculateInterset}

          variant="contained" style={{backgroundColor:"black",color:"white",padding:"10px",marginTop:"10px"}}>Calculate</Button>
         <Button variant="outlined" onClick={reset} style={{color:"black",padding:"10px",marginTop:"10px",outlineColor:"black"}}>Reset</Button>
         </Stack>
         </div>
          </div>

         

        </div>
    </>
  )
}

export default App
