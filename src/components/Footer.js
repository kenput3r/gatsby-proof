import React, { useState } from "react"
import styled from "styled-components"

import facebook from "../images/icon-facebook_small.png"
import instagram from "../images/icon-instagram_small.png"
import twitter from "../images/icon-twitter_small.png"
import youtube from "../images/icon-youtube_small.png"

const StyledFooter = styled.footer`
  border-top: 1px solid #9e9e9e;
  padding: 10px 10px 20px 10px;
  max-width: 100%;
  input[type="button"],
  a {
    font-family: NexaRust;
  }
  a {
    color: var(--s-red);
    text-decoration: none;
  }

  .links {
    font-size: 0.75rem;
    width: 400px;
    max-width: 100%;
    @media (max-width: 767px) {
      margin-bottom: 1.45rem;
    }
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
    max-width: 100%;
    margin-left: auto;
    img {
      max-height: 32px;
      margin-bottom: 0;
    }
  }

  .tagline {
    border: 1px solid #9e9e9e;
    margin: 15px 0 15px auto;
    padding: 15px;
    text-align: center;
    width: 400px;
    max-width: 100%;
  }

  .accessibility-statement {
    margin-left: auto;
    margin-bottom: 15px;
    width: 550px;
    max-width: 100%;
    text-align: right;
    font-size: 0.75rem;
  }

  .copyright {
    text-align: right;
  }

  .small-100 {
    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
`
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => (props.flex ? props.flex : "none")};
`
const Form = styled.form`
  width: 400px;
  max-width: 100%;
  label {
    display: block;
    font-size: 0.75rem;
  }
  input {
    border: 1px solid #9e9e9e;
    border-radius: 2px;
    padding: 10px;
    &:focus {
      outline: 3px dashed var(--s-yellow);
    }
  }
  input[type="email"] {
    width: 100%;
  }
  input#phone {
    @media (max-width: 320px) {
      max-width: 165px;
    }
  }
  input[type="button"] {
    background-color: var(--s-red);
    color: #ffffff;
    border: 1px solid var(--s-red);
    border-radius: 2px;
    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);
    font-family: NexaRust;
    text-transform: uppercase;
    padding: 10px;
    margin-left: 10px;
  }
`

const handleChange = (e, setState) => {
  setState(e.target.value)
}

const Footer = () => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const handleSubscribe = () => {
    console.log(email, phone)
    setEmail("")
    setPhone("")
  }
  return (
    <StyledFooter>
      <Grid>
        <GridItem flex={1} className="small-100">
          <Form>
            <label htmlFor="email">Email Address</label>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              onChange={e => handleChange(e, setEmail)}
            />
            <label htmlFor="phone">Mobile Phone</label>
            <input
              value={phone}
              type="tel"
              name="phone"
              id="phone"
              onChange={e => handleChange(e, setPhone)}
            />
            <input
              type="button"
              name="submit"
              value="Subscribe"
              onClick={handleSubscribe}
            />
          </Form>
          <Grid className="links">
            <GridItem flex={1}>
              <a href="/">Suavecito</a>
              <a href="/">Suavecita</a>
              <a href="/">Premium Blends</a>
              <a href="/">Firme Club</a>
              <a href="/">Suavecito Speed</a>
              <a href="/">Tres Noir</a>
            </GridItem>
            <GridItem flex={1}>
              <a href="/">Terms Of Use</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Cookies &amp; Data</a>
              <a href="/">Contact</a>
              <a href="/">Live Chat</a>
              <a href="/">Accessibility</a>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem className="small-100" flex={1}>
          <div className="social-icons">
            <a
              href="https://instagram.com/suavecitopomade"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="instagram icon"
                height="32px"
                width="32px"
              />
            </a>
            <a
              href="https://facebook.com/suavecitopomade"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebook}
                alt="facebook icon"
                height="32px"
                width="32px"
              />
            </a>
            <a
              href="https://twitter.com/suavecitopomade"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={twitter}
                alt="twitter icon"
                height="32px"
                width="32px"
              />
            </a>
            <a
              href="https://youtube.com/suavecitopomade"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={youtube}
                alt="youtube icon"
                height="32px"
                width="32px"
              />
            </a>
          </div>
          <div className="tagline">
            <span>Get it, Hombre!</span>
          </div>
          <div className="accessibility-statement">
            Suavecito is committed to providing a web experience that is
            accessible to all people by meeting or exceeding the requirements of
            the WCAG 2.0 AA. Accessibility is an ongoing effort, and we are here
            to help. Feel free to email us at{" "}
            <a href="mailto:info@suavecito.com">info@suavecito.com</a> or{" "}
            <a href="/">chat with us live</a> for assistance.
          </div>
          <div className="copyright">&copy; 2020 Suavecito, Inc.</div>
        </GridItem>
      </Grid>
    </StyledFooter>
  )
}

export default Footer
