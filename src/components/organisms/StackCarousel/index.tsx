import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../molecules/Card';
import Typography from '../../atoms/Typography';
import IconWithText from '../../molecules/IconWithText';
import { Stack } from './styles';
import { DiCss3, DiHtml5, DiReact, DiNodejsSmall, DiGit, DiSass } from 'react-icons/di';
import { FcLinux } from 'react-icons/fc';
import { SiJavascript, SiTypescript, SiMongodb, SiMysql } from 'react-icons/si';
import { TbCSharp, TbBrandDocker } from 'react-icons/tb';

function StackCarousel() {
  const items = [
    {
      icon: <DiHtml5 style={{ margin: '0 0 -1rem 0' }} />,
      name: 'HTML',
      experience: '3 anos'
    },
    {
      icon: <SiJavascript style={{ margin: '0 0 -1rem 0' }} />,
      name: 'Javascript',
      experience: '3 anos'
    },
    {
      icon: <DiCss3 style={{ margin: '0 0 -1rem 0' }} />,
      name: 'CSS',
      experience: '3 anos'
    },
    {
      icon: <DiSass style={{ margin: '0 0 -1rem 0' }} />,
      name: 'SASS',
      experience: '1 ano'
    },
    {
      icon: <SiTypescript style={{ margin: '0 0 -1rem 0' }} />,
      name: 'Typescript',
      experience: '1 ano'
    },
    {
      icon: <DiReact style={{ margin: '0 0 -1rem 0' }} />,
      name: 'React',
      experience: '2 anos'
    },
    {
      icon: <DiNodejsSmall style={{ margin: '0 0 -1rem 0' }} />,
      name: 'NodeJS',
      experience: '2 anos'
    },
    {
      icon: <TbCSharp style={{ margin: '0 0 -1rem 0' }} />,
      name: 'C#',
      experience: '1 ano'
    },
    {
      icon: <FcLinux style={{ margin: '0 0 -1rem 0' }} />,
      name: 'Linux',
      experience: '3 anos'
    },
    {
      icon: <DiGit style={{ margin: '0 0 -1rem 0' }} />,
      name: 'Git',
      experience: '3 anos'
    },
    {
      icon: <SiMysql style={{ margin: '0 0 -1rem 0' }} />,
      name: 'MySQL',
      experience: '2 anos'
    },
    {
      icon: <SiMongodb style={{ margin: '0 0 -1rem 0' }} />,
      name: 'MongoDB',
      experience: '2 anos'
    },
    {
      icon: <TbBrandDocker style={{ margin: '0 0 -1rem 0' }} />,
      name: 'Docker',
      experience: '1 ano'
    }
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 }
  ];
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Carousel breakPoints={breakPoints}>
      {items.map(item => (
        <Card heightBody='small' width='tiny' key={item.name}>
          <Typography size='huge' color={item.name.toLowerCase() || 'text'} spacing='none'>
            {item.icon}
          </Typography>
          <Stack>
            <IconWithText icon='star' iconColor='green' spacing='none'>
              {item.name}
            </IconWithText>
            <IconWithText icon='trophy' iconColor='green' spacing='none'>
              {item.experience}
            </IconWithText>
          </Stack>
        </Card>
      ))}
    </Carousel>
  );
}

export default StackCarousel;
