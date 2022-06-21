import React from 'react';

interface Props {
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'xsmall'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | 'huge';
  spacing?:
    | 'none'
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  color?:
    | 'black'
    | 'green'
    | 'darkGreen'
    | 'gray'
    | 'text'
    | 'linkedin'
    | 'instagram'
    | 'youtube'
    | 'github'
    | 'html'
    | 'javascript'
    | 'css'
    | 'typescript'
    | 'react'
    | 'node'
    | 'mysql'
    | 'mongodb'
    | string;
  hover?: boolean;
  children: React.ReactNode;
}

export default Props;
