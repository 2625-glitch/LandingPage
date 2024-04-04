import React from 'react';

// type ParagraphItemProps={
//   info:stirng
// }

const ParagraphItem = ({ info, isActive }) => {
  return (
    <p className={`text-sm ${isActive ? 'text-[#000000]' : 'text-[#757575]'}`}>
      {info}
    </p>
  );
};

export default ParagraphItem;
