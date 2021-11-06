import { Sidebar } from "@app/components/Menu/SideBar"
import {
  DashboardHeader
} from '@app/components/DashboardHeader'
import {
  AuthCheck
} from '@app/components/AuthCheck'

const Dashboard = () => {

  return (
    <AuthCheck>
      <Sidebar>
        <DashboardHeader>
          Initail Dashdoard
         </DashboardHeader>
      </Sidebar>
    </AuthCheck>
  )
}

export default Dashboard
