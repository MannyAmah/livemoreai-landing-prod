'use client';

import React from 'react';

interface RawHtmlProps {
  html: string;
}

const RawHtml: React.FC<RawHtmlProps> = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RawHtml;
