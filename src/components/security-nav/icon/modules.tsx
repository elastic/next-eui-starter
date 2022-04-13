import React from 'react';

const EuiIconModules = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & { title: string; titleId: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    <path
      fillRule="evenodd"
      d="M3 3.5h3v3H3v-3zm-1 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3zm1 7h3v3H3v-3zm-1 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3zm11-7h-3v3h3v-3zm-3-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zm0 8h3v3h-3v-3zm-1 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
      clipRule="evenodd"></path>
  </svg>
);

export default EuiIconModules;
