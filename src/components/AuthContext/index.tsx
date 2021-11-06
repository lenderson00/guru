import { auth } from "@app/firebase";
import { createContext, ReactNode, useEffect, useContext, useState} from "react";
import { useAuthState } from 'react-firebase-hooks/auth'
import { User } from 'firebase/auth'
type UserContextType = {
  user: User | null | undefined,
}

const initialUser: UserContextType = {
  user: null
}

export const UserContext = createContext<UserContextType>(initialUser)


type Props = {
  children: ReactNode
}
export const AuthContext: React.FC<Props> = ( { children} ) => {
  const [user] = useAuthState(auth)
  
  return (
    <UserContext.Provider value={ {user} }>
      {children}
    </UserContext.Provider>
  )

}