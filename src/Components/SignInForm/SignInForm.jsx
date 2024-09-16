import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import style from "./SignInForm.module.scss";

const SignInForm = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        const credential = await signInWithPopup(auth, provider);
        console.log(await auth.currentUser.getIdToken(true));
        console.log(credential);
    }

    return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>Sign in with Google</div>
      <div className={style.btncont}>
        <button className={style.signupbtn} onClick={signInWithGoogle}>Login</button>
      </div>
    </div>
  );
};

export default SignInForm;
