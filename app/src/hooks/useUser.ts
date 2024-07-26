
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';


const useUser = () => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const authUser = auth().currentUser;

   
useEffect(() => {
  if(authUser){
    setUser(authUser)
  }
 }, [])

 
  return user;
}

export default useUser

