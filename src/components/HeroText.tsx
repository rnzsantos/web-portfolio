import { Box, Heading, Text } from '@chakra-ui/react';

const HeroText = () => {
  return (
    <Box
      textAlign={{ base: 'center', lg: 'left' }}
      w={{ base: 'full', md: '450px', lg: '510px' }}
    >
      <Heading
        color="#2D2E32"
        fontWeight="800"
        mb={6}
        size={{ base: 'xl', md: '2xl', lg: '3xl' }}
      >
        Front-End React Developer
      </Heading>
      <Text color="#555555" fontSize={{ base: 'md', lg: 'lg' }}>
        Hi, I'm {''}
        <Text as="span" color="teal" fontWeight="600">
          Renzo Santos
        </Text>
        . A passionate web developer who thrives on learning new things.
      </Text>
    </Box>
  );
};

export default HeroText;
