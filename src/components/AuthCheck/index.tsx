import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import { UserContext } from '../AuthContext'
import NotAllowed from '../NotAllowed'

type Props = {
  children: ReactNode,
}
export const AuthCheck: React.FC<Props> = ({ children }: Props) => {
  const { user } = useContext(UserContext)

  return (
    <>
      {
        user ?
        children : 
        <NotAllowed />
      }
    </>
  )
    
  

}