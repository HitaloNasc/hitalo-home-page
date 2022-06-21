import React from 'react';

interface Props {
  children: React.ReactNode;
  fontSize?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  margin?:
    | 'none'
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  width?:
    | 'auto'
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  padding?:
    | 'auto'
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  borderRadius?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  color?:
    | 'none'
    | 'black'
    | 'green'
    | 'gray'
    | 'text'
    | 'linkedin'
    | 'instagram'
    | 'youtube'
    | 'github';
  backgroundColor?:
    | 'black'
    | 'green'
    | 'gray'
    | 'text'
    | 'linkedin'
    | 'instagram'
    | 'youtube'
    | 'github';
  fontWeight?: 'normal' | 'bold';
  disabled?: boolean;
  hover?: boolean;
  onClick?: () => void;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string | number;
  title?: string;
}

export default Props;
