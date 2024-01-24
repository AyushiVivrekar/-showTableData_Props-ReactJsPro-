import React from 'react'
import './signin.css'


function SignIn(props) {
  const {registration} =props;
    // const [click, setClick] = useState("")
    // const clickSignBtn=()=>{
        
    // }
  return (
    <div>
      <h3>This is {registration}</h3>
        <div className='container'>
            <div className='card signinCard'>
                <div className='card-body'>
                  <button className='signInbtn' onClick={()=>clickSignBtn()}>SignIn</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignIn