import { Box, Container, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="#FFFFFF" boxShadow="base" py={6}>
      <Container maxW="container.lg">
        <Heading size="md">&lt;renzo.dev/&gt;</Heading>
      </Container>
    </Box>
  );
};

export default Navbar;
