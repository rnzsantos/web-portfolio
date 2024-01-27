import { Heading } from '@chakra-ui/react';

interface Props {
  children: string;
}

const SectionHeading = ({ children }: Props) => {
  return (
    <Heading
      color="teal.500"
      textDecoration="underline"
      textUnderlineOffset="5px"
      size="sm"
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
