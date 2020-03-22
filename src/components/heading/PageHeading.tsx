import * as React from 'react';
import Yoga1 from '../../assets/yoga1.svg';

export const PageHeading = () => {
  const testItems = ['a', 'b', 'c'];
  const renderItems = (items: string[]) =>
    items.map((item) => <div key={item}>{item}</div>);

  return (
    <div>
      {renderItems(testItems)}
      <Yoga1 width={45} height={45} />
    </div>
  );
};
