import React, { useState, Fragment } from "react";
import { SignUpModal } from "../components/Modal";

export const SignUpPage = () => {
    const [useDarkTheme, setDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <button style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
            onClick={() => setDarkTheme(true)}>Dark Theme</button>
                        <button style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
            onClick={() => setDarkTheme(false)}>Default Theme</button><br></br>
            <button style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
            onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
            <div style={{
                background: "#fff",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <SignUpModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                ></SignUpModal>
            </div>
        </Fragment>
    )
}