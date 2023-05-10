import React from 'react';

const TagsIcon = ({height, width}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L1 13H10L9 21L19 9H10L11 1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default TagsIcon;
