const initState ={
    authError: null
}


const authreducer= (state=initState, action)=> {
 
 switch(action.type) {
     case 'LOGIN_ERROR':
     console.log('error');
     return {
         ...state,
         authError: 'login failed'
     }
     case 'LOGIN_SUCCESS' :
     console.log('login success');
     return {
         ...state,
         authError: null
     }
     case 'SIGNOUT_SUCCESS':
     console.log('signout success');
     return state;
     case 'SIGNUP_SUCCESS':
     console.log('signup done')
     return { 
     ...state,
     authError: null
     }
     case 'SIGN_ERROR':
     console.log('error is found');
     return {
         ...state,
         authError: action.err.message
     }
         default: 
     return state;
 }
   }
export default authreducer