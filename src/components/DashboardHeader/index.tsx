import { Box, Flex, Text} from "@chakra-ui/layout"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}
export const DashboardHeader: React.FC<Props> = ({ children }: Props) => {

  return (
      <Box>
        <Flex direction={'row'} h={'3rem'} alignItems={'center'} padding={'1rem'}> 
      
        </Flex>
        {children}
      </Box>
  )
}

export default DashboardHeader
