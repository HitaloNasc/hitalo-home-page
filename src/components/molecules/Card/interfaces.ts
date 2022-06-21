interface Props {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  heightBody?:
    | 'none'
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
  heightFooter?:
    | 'none'
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
}

export default Props;