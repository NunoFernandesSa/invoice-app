/**
 * @copyright 2025
 * @license Apache 2.0
 * @author Nuno F
 */

/**
 * Node Modules
 */
import React from "react";
import Navbar from "./Navbar";

/**
 * Components
 */
import Container from "./Container";

/**
 * Props types
 */
type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Navbar />

      <Container>{children}</Container>
    </>
  );
}

export default Wrapper;
