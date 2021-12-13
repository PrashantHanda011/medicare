import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../firebase Hooks/authContext'
import { useRef,useState } from 'react'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const{signup} =useAuth();
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)
    
    
    async function handlesubmit(e){
        console.log('succesfull')
        e.preventDefault()

        if(passwordRef.current.value !== confirmpasswordRef.current.value){
                return seterror('Password Do not match')
        }
        try{
            seterror('')
            setloading(true)
            await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDMpTx43shfGLgznVk49ieQTqr-mAUai74',
            {
                method : 'POST',
                body: JSON.stringify({
                   email: emailRef.current.value,
                   password:  passwordRef.current.value,
                   returnSecureToken : true
                }),

                headers:{
                    'content-type':'application/json'
                }
            })

        }catch{
            seterror('failed to create a account')
        }
        setloading(false)
    }
    return (
        <>
        <Navbar/>
        <div className='signup-form'>
          <h5>Sign up</h5>

            <form className='signup' onSubmit={handlesubmit} action="submit">
                <input type="email" name="email" placeholder='enter your email' required ref={emailRef} id="email" />
                <input type="password" name="password" placeholder='enter your password' required ref={passwordRef} id="password" />
                <input type="password" name="confirm-password" placeholder='confirm your password' required ref={confirmpasswordRef}  id="password" />
            </form>
                <button  type='submit'>SignUp</button>


               
                <p>Already have an account? <NavLink className='join-link'  to='/login' >Login here</NavLink></p>
        </div>
        </>
    )
}
