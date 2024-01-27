import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import pc from '../assets/pc.png';
import SectionHeading from './SectionHeading';

const AboutMe = () => {
  return (
    <Box bg="#FFFFFF" py={16} textAlign="center">
      <Container maxW={{ base: 'container.sm', lg: 'container.md' }}>
        <Box mb={16}>
          <SectionHeading>ABOUT ME</SectionHeading>
          <Heading color="blackAlpha.800" size="md" mt={5} fontWeight="700">
            Aspiring and dedicated web developer
          </Heading>
        </Box>
        <Stack direction="column" alignItems="center" gap={10}>
          <Image src={pc} boxSize="300px" height="full" rounded="lg" />
          <Text color="#767676" textAlign="center" lineHeight="tall">
            Graduate of Bachelor of Science in Information Systems. I'm a web
            developer with skills and knowledge in both Front-End and Back-End
            development. With the core foundation of HTML, CSS, JavaScript,
            React and using 3rd-Party UI Libraries for building responsive web
            apps that offer smooth user experience. Integration of NoSQL
            databases such as MongoDB along with Node using Express framework
            for creating RESTful API. I'm continuously learning the fundamentals
            of web development, writing clean and optimized code and utilizing
            cutting-edge development tools and techniques.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutMe;
