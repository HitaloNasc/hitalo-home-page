import React from 'react';

export default interface Props {
  children: React.ReactNode;
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
}
