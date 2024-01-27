import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <Box bg="#F9F9F9" py={16}>
      <Container maxW="container.lg">
        <Box mb={16} textAlign="center">
          <SectionHeading>PROJECTS</SectionHeading>
          <Heading color="blackAlpha.800" size="md" mt={5} fontWeight="700">
            Developed each project with coding standards and best practices
          </Heading>
        </Box>
        <Stack spacing={10}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
