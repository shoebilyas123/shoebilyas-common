import React, { PropsWithChildren } from "react";

interface IProps {
  items: string[];
}

const Breadcrumbs: React.FC<PropsWithChildren<IProps>> = ({ items }) => {
  return (
    <div className="font-medium flex items-center">
      {items.map((item, index) => {
        if (index + 1 === items.length)
          return <span className="text-zinc-500">{item}</span>;
        else {
          return <span className="text-orange-600">{`${item} /`}&nbsp;</span>;
        }
      })}
    </div>
  );
};

export default Breadcrumbs;
