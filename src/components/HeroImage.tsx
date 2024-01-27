import { Image } from '@chakra-ui/react';
import me from '../assets/me.png';

const HeroImage = () => {
  return (
    <Image
      src={me}
      alt="Renzo Santos"
      width={{ base: '220px', lg: '300px' }}
      clipPath={{
        base: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        lg: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      }}
    />
  );
};

export default HeroImage;
