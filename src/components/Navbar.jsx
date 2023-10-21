import { Heading,Center } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
      <Center bg='blue' w='100vw' h='60px'>
        <Heading color="white">Code Editor <i className="fa-solid fa-code" style={{color: "#ffffff"}}></i> </Heading>
      </Center>
    </>
  )
}

export default Navbar