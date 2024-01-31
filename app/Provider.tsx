"use client";
import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

function Provider({ children }: any) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default Provider;
