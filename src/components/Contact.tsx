import { Box, Container, Heading, Wrap } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaEnvelope, FaMapMarkedAlt, FaMobileAlt } from 'react-icons/fa';
import ContactDetail from './ContactDetail';
import SectionHeading from './SectionHeading';

export interface ContactItem {
  icon: IconType;
  heading: string;
  text: string;
  link?: string;
}

const contactItems: ContactItem[] = [
  { icon: FaMapMarkedAlt, heading: 'Location', text: 'Bulacan, Philippines' },
  {
    icon: FaEnvelope,
    heading: 'Email',
    text: 'renzodsantos@gmail.com',
    link: 'mailto:renzodsantos@gmail.com',
  },
  { icon: FaMobileAlt, heading: 'Mobile', text: '+63-927-337-2639' },
];

const Contact = () => {
  return (
    <Box bg="#FFFFFF" py={16}>
      <Container
        maxW={{
          base: 'min-content',
          md: 'container.sm',
          lg: 'container.lg',
        }}
      >
        <Box mb={16} textAlign="center">
          <SectionHeading>CONTACT</SectionHeading>
          <Heading color="blackAlpha.800" size="md" mt={5} fontWeight="700">
            Get in touch
          </Heading>
        </Box>
        <Wrap
          justify={{
            base: 'space-between',
            lg: 'space-evenly',
            xl: 'space-between',
          }}
          spacing={16}
        >
          {contactItems.map((item, index) => (
            <ContactDetail key={index} contactItem={item} />
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};

export default Contact;
