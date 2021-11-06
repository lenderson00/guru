import { useColorMode } from "@chakra-ui/color-mode"

import { Button } from "@chakra-ui/button"

const ColorToogleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button w={'3rem'} h={'3rem'} borderRadius={'50%'} onClick={toggleColorMode} position={"absolute"} right={'3rem'} top={'1.5rem'}>
        {colorMode === "light" ? "🌙" : "☀️"}
      </Button>
    </header>
  )
}

export default ColorToogleButton
