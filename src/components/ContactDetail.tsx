import { Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { ContactItem } from './Contact';

interface Props {
  contactItem: ContactItem;
}

const ContactDetail = ({ contactItem }: Props) => {
  return (
    <Flex gap={5} align="center">
      <Icon as={contactItem.icon} boxSize="50px" color="blue.900" />
      <Stack>
        <Heading size="md">{contactItem.heading}</Heading>
        {contactItem.link ? (
          <Text as="a" href={contactItem.link} color="#555555" fontWeight="600">
            {contactItem.text}
          </Text>
        ) : (
          <Text color="#555555" fontWeight="600">
            {contactItem.text}
          </Text>
        )}
      </Stack>
    </Flex>
  );
};

export default ContactDetail;
