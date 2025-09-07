"use client";

import { BiSolidBank } from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header className="sticky top-0 h-[100px] bg-gray-100">
      <div className="flex justify-between items-center h-full px-6">
        <div className="flex cursor-pointer gap-[10px]">
          <BiSolidBank size={40} className="text-gray-950" />
          <h1 className="text-black !font-bold !text-[37px]">Banking</h1>
        </div>

        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls=""></Navbar.Toggle>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
