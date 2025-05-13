import { headStyle } from '@shared/components/Head/Head.style';

interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return <h1 css={headStyle}>{title}</h1>;
};

export default Head;
