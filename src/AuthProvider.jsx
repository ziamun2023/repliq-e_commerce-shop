import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   const [storage,setStorage]=useState(false)
const [loading,setLoading]=useState(false)
    const storedItemJSON = localStorage.getItem('ownerInfo');
    

        
        const user = JSON.parse(storedItemJSON);
 
  

    
  
    
  const authInfo = {

    user
    ,
    loading,
    setLoading,
    storage,setStorage
  
  }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider