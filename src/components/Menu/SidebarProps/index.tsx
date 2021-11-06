import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';

import {
  FiHome,
  FiBookOpen,
  FiFile,
  FiCommand,
  FiUser,
  FiShield,
  FiStar,
  FiBell,
  FiLogOut
} from 'react-icons/fi';

import { MenuItem } from '@app/domain/models/MenuItem';
import { NavItem } from '@app/components/Menu/NavItem'
import Logo from '@app/components/Logo'

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<MenuItem> = [
  { name: 'Home', icon: FiHome },
  { name: 'Guru\'s Story', icon: FiBookOpen },
  { name: 'Artifacts', icon: FiFile },
  { name: 'Character', icon: FiUser },
  { name: 'Team', icon: FiCommand },
  { name: 'Weapons', icon: FiShield },
  { name: 'Wishes', icon: FiStar },
  { name: 'Notifications', icon: FiBell },
];

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="40" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex direction={'column'} h={'80%'} justify={'space-between'}>
        
          <Box>
            {LinkItems.map((link) => (
              <NavItem key={link.name} icon={link.icon}>
                {link.name}
              </NavItem>
            ))}
          </Box>
        
          <NavItem icon={FiLogOut} bottom={0}>
              LogOut
          </NavItem>
      </Flex>
     
    </Box>
  );
};