import React from "react";
import { PrimaryButton } from "./Buttons";
import { Illustrations, CloseIcon } from "../assets";
import { useSpring, animated, config } from "react-spring";
import './modal.scss';

export const SignUpModal = ({ showModal, setShowModal }) => {
    const animation = useSpring({
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-200%)`,
      config: config.slow
    })
    return (
      <animated.div style={animation}>
      <div className="modal-wrapper">
        <img src={Illustrations.SignUp} alt="Sign up for an account!" aria-hidden="true" style={{height: "100px"}} />
        <h3>Sign Up</h3>
        <p>
          Sign up today to get access to all of our content and features!
        </p>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <button className="close-modal" aria-label="Close Modal">
            <CloseIcon/>
        </button>
      </div>
      </animated.div>
    );
  };