import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const isEven = project.id % 2 === 0;

  return (
    <Card
      shadow="0 0 20px rgba(0, 0, 0, 0.1)"
      direction={{ base: 'column', lg: `${isEven ? 'row-reverse' : 'row'}` }}
      p={5}
      rounded="xl"
    >
      <Image
        src={project.image}
        maxW={{ base: 'full', lg: '500px' }}
        rounded="md"
        height="full"
      />
      <Stack>
        <CardBody textAlign="center">
          <Heading size="lg" mb={5}>
            {project.title}
          </Heading>
          <Text color="#555555" fontSize={{ md: 'md' }}>
            {project.description}
          </Text>
          <Wrap justify="center" mt={5} spacing={5}>
            {project.tools.map((tool) => (
              <Tag key={tool} variant="subtle" colorScheme="gray">
                {tool}
              </Tag>
            ))}
          </Wrap>
        </CardBody>
        <CardFooter justify="center">
          <ButtonGroup colorScheme="teal">
            <Button
              variant="solid"
              rightIcon={<BsGithub />}
              as="a"
              href={project.code}
              target="_blank"
            >
              Code
            </Button>
            <Button
              variant="outline"
              rightIcon={<FaGlobe />}
              as="a"
              href={project.link}
              target="_blank"
            >
              Demo
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
