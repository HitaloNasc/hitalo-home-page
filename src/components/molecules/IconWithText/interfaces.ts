interface Props {
  children?: React.ReactNode;
  icon?: 'star' | 'trophy';
  iconColor?: 'black' | 'green' | 'gray' | 'text';
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
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'xmedium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
}

export default Props;
