import React from "react"
import { Container, Jumbotron } from "reactstrap"
import { css } from "glamor"

export default function Header(props) {
  return (
    <Jumbotron
      {...css(styles.header)}
      className={
        props.contentPage === false
          ? `d-flex align-items-center justify-content-center ${props.className}`
          : ` ${props.className}`
      }
    >
      {props.backgroundImage && (
        <img
          src={`${props.backgroundImage}`}
          {...css(styles.bgImage)}
          alt={`${props.headerText} header background`}
        />
      )}
      {props.containerFluid === true ? (
        <Container {...css(styles.headerContainer)} fluid>
          {props.headerText !== undefined && (
            <h1 className="text-white text-center">{props.headerText}</h1>
          )}
          {props.children}
        </Container>
      ) : (
        <Container {...css(styles.headerContainer)}>
          {props.headerText !== undefined && (
            <h1 className="text-white text-center">{props.headerText}</h1>
          )}
          {props.children}
        </Container>
      )}
    </Jumbotron>
  )
}

const styles = {
  header: {
    height: "300px",
    overflow: " hidden !important",
    position: "relative",
    borderRadius: "0px",
  },
  bgImage: {
    width: "100%",
    position: "absolute",
    zIndex: 0,
    height: "100%",
    objectFit: "cover",
  },
  headerContainer: {
    position: "relative",
  },
  pageHeader: {
    overflow: " hidden !important",
    position: "relative",
    borderRadius: "0px",
    padding: 0,
    backgroundColor: "white",
    borderBottom: " 5px dotted #eee",
  },
}
