
import { TextField,Stack,Button } from '@mui/material'
import './App.css'


function App() {
  

  return (
    <>
        <div className='d-flex justify-content-center bg-dark ' style={{height:"100vh",width:"100%"}}>
          <div className='p-5 bg-light ' style={{width:"40%",height:"63%",marginTop:"6%"}}>
            <h4>Simple Interest</h4>
            <p>calculate you simple interest</p>
            <div className='bg-warning'style={{textAlign:"center"}}>
              <h3>$Interest</h3>
              <p> Total simple interest</p>
            </div>
            <div>
          <TextField id="outlined-basic" label="principal amount" variant="outlined" style={{marginTop:"10px" ,width:"100%"}} />
          </div>
          <div>
          <TextField id="outlined-basic" label="rate of interest" variant="outlined" style={{marginTop:"10px" ,width:"100%"}} />
          </div>
          <div>
          <TextField id="outlined-basic" label="time period" variant="outlined" style={{marginTop:"10px" ,width:"100%"}} />
          </div>
         <div>
         <Stack direction="row" spacing={2}>
         <Button variant="contained" style={{backgroundColor:"black",color:"white",padding:"10px",marginTop:"10px"}}>Calculate</Button>
         <Button variant="outlined"  style={{color:"black",padding:"10px",marginTop:"10px",outlineColor:"black"}}>Reset</Button>
         </Stack>
         </div>
          </div>

         

        </div>
    </>
  )
}

export default App
