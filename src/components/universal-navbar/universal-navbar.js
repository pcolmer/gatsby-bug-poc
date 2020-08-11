import React, { useState } from "react"
import { css } from "glamor"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

function DropDownItems(props) {
  return (
    <>
      <DropdownItem
        tag={NavLink}
        href="https://www.96boards.ai"
        target="_blank"
      >
        96Boards.ai
      </DropdownItem>
      <DropdownItem
        tag={NavLink}
        href="https://www.devicetree.org"
        target="_blank"
      >
        DeviceTree.org
      </DropdownItem>
      <DropdownItem
        tag={NavLink}
        href="https://www.openampproject.org"
        target="_blank"
      >
        OpenAMP
      </DropdownItem>
      <DropdownItem tag={NavLink} href="https://www.op-tee.org" target="_blank">
        OP-TEE
      </DropdownItem>
      <DropdownItem
        tag={NavLink}
        href="https://www.trustedfirmware.org"
        target="_blank"
      >
        Trusted Firmware
      </DropdownItem>
    </>
  )
}

export default function UniversalNavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar
      color="primary"
      className="text-dark py-0 top_level"
      light
      expand="md"
    >
      <NavbarBrand tag={NavLink} to="/"></NavbarBrand>
      <NavbarToggler onClick={toggle} className={`${styles.nav}`} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="https://www.linaro.org"
              {...css(styles.navItem, styles.activeLink)}
              className={`nav-link active`}
              target="_blank"
            >
              Linaro
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://connect.linaro.org"
              {...css(styles.navItem, styles.navLink)}
              className={`nav-link`}
              target="_blank"
            >
              Connect
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              {...css(styles.navItem, styles.navLink)}
              href="https://www.96boards.org"
              className={`nav-link`}
              target="_blank"
            >
              96Boards
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              {...css(styles.navItem, styles.navLink)}
              href="https://www.linaro.cloud"
              className={`nav-link`}
              target="_blank"
            >
              Developer Cloud
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret {...css(styles.navItem, styles.navLink)}>
              Projects
            </DropdownToggle>
            <DropdownMenu right {...css(styles.dropdown)}>
              <DropDownItems />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

const styles = {
  nav: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  activeLink: {
    backgroundColor: "#575757",
    color: "#fff !important",
  },
  navLink: {
    color: " #000 !important",
  },
  navItem: {
    textDecoration: "none",
    display: "inline-block",
    padding: "9px 20px !important",
    textTransform: "uppercase",
    fontSize: "12px",
    position: "relative",
  },
  dropdown: {
    border: "1px solid #9c3",
    borderRadius: "0px",
    WebkitBoxShadow: "0px 0px 20px -7px rgba(0, 0, 0, 0.75)",
    MozBoxShadow: "0px 0px 20px -7px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 20px -7px rgba(0, 0, 0, 0.75)",
  },
}
