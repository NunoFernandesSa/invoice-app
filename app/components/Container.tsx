import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <main className="px-5 md:px-[10%] mt-8 mb-10">{children}</main>;
}

export default Container;
