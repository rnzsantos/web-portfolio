import {
  Box,
  Center,
  Container,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box bg="#2D2E32" color="white" py={10}>
      <Container maxW="container.lg">
        <Center>
          <Stack textAlign="center">
            <HStack justify="center" spacing={4}>
              <Link href="https://github.com/rnzsantos" target="_blank">
                <Icon
                  as={BsGithub}
                  boxSize="25px"
                  _hover={{
                    color: 'teal',
                    transform: 'scale(1.10)',
                    transition: 'transform .15s ease-in',
                  }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rnzsantos/"
                target="_blank"
              >
                <Icon
                  as={BsLinkedin}
                  boxSize="25px"
                  _hover={{
                    color: 'teal',
                    transform: 'scale(1.10)',
                    transition: 'transform .15s ease-in',
                  }}
                />
              </Link>
            </HStack>
            <Text fontSize="sm">Renzo Santos</Text>
            <Text fontSize="sm">Copyright © 2024. All rights reserved.</Text>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
