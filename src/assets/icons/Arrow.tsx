import { memo, SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={12} {...props}>
    <path
      fillRule="evenodd"
      fill={props.color ?? '#414042'}
      d="M0 11.999h1.399l5.6-6L1.399 0H0l5.599 5.999-5.599 6Z"
    />
  </svg>
);
const ArrowIcon = memo(SVGComponent);
export default ArrowIcon;
