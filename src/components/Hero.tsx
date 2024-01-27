import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import HeroImage from './HeroImage';
import HeroTechStack from './HeroTeckStack';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <Box bg="#F9F9F9" minH="100vh" py={{ base: 10, lg: 16 }}>
      <Container maxW="container.lg">
        <Stack spacing={{ base: 10, lg: 20 }}>
          <Stack
            alignItems="center"
            direction={{ base: 'column', lg: 'row-reverse' }}
            justify={{ lg: 'space-evenly' }}
            spacing={{ base: 5, lg: 0 }}
          >
            <HeroImage />
            <HeroText />
          </Stack>
          <Box textAlign="center">
            <Heading
              fontWeight="semibold"
              letterSpacing="tight"
              mb={7}
              size="md"
            >
              Tech Stack
            </Heading>
            <HeroTechStack />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
