import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDMpTx43shfGLgznVk49ieQTqr-mAUai74",
  authDomain: "medicarehub-f0372.firebaseapp.com",
  projectId: "medicarehub-f0372",
  storageBucket: "medicarehub-f0372.appspot.com",
  messagingSenderId: "8274481741",
  appId: "1:8274481741:web:316dd8800cc2737c150204"
});

export const auth = app.auth();
export default app;
// export const AuthProvider = ({children})=>{
//     const [user,setuser] = useState(null)
//     const [isauthenticate, setisauthenticate] = useState(true)

//     const sendemail = email =>{
//         return firebase.auth().sendSignInLinkToEmail(email,{
//             url : 'http://loclhost:3000/confirm',
//             handleCodeInApp : true,

//         }).then(()=>{
//             return true
//         })
//     }

//     const signinemaillink = (email,code)=>{
//         return firebase.auth().signinemaillink(email,code).then(result=>{
//             setuser(result.user)
//             return true
//         })
//     }

//     const logout = ()=>{
//         return firebase.auth().signOut().then(()=>{
//             setuser(null);
//         })
//     }

//     useEffect(() => {
//         const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
//             setuser(user)
//             setisauthenticate(false)
//         })
//         return ()=>unsubscribe()
//     }, [])

//     const values={
//         user,
//         isauthenticate,
//         sendemail,
//         signinemaillink,
//         logout
//     }
//     return (
//         <authContext.Provider value={values}>
//             {!isauthenticate && children}
//         </authContext.Provider>
//     )
