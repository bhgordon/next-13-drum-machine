"use client";
import React, { Children } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import SoundProvider from "../SoundProvider";
import { Volume2, VolumeX } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import { useSoundEnabled } from "../SoundProvider";

function Header() {
  const id = React.useId();

  const { soundEnabled, setSoundEnabled } = useSoundEnabled();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>
        <SoundProvider>
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              console.log(soundEnabled);
            }}
          >
            {soundEnabled ? <Volume2 /> : <VolumeX />}
            <VisuallyHidden>
              {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
            </VisuallyHidden>
          </button>
        </SoundProvider>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
