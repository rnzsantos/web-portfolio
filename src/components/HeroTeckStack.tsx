import { Box, Image, Tooltip, Wrap } from '@chakra-ui/react';
import tools from '../utils/tools';

const HeroTechStack = () => {
  return (
    <Wrap justify="center" spacing={8}>
      {tools.map((tool, index) => (
        <Tooltip hasArrow key={index} label={tool.label}>
          <Box
            p={{ base: 3, lg: 4 }}
            rounded="full"
            shadow="0 0 6px rgba(0, 0, 0, 0.1)"
            _hover={{
              transform: 'scale(1.10)',
              transition: 'transform .15s ease-in',
            }}
          >
            <Image src={tool.logo} boxSize={{ base: '30px', lg: '40px' }} />
          </Box>
        </Tooltip>
      ))}
    </Wrap>
  );
};

export default HeroTechStack;
