"use client";
import React from "react";

const SoundContext = React.createContext();

function SoundProvider({ children }) {
  // TODO: Global state?
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundContext);

  if (!data) {
    throw new Error("Cannot consume SoundContext without a SoundProvider");
  }

  return data;
}

export default SoundProvider;
