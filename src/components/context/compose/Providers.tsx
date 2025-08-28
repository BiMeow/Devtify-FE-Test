/* eslint-disable import/extensions */
"use client";

import React from "react";

import Compose from "@/components/context/compose/Compose";

import MainProvider from "@/components/context/MainProvider";
import StorageProvider from "@/components/context/StorageProvider";
import DefaultLayoutClient from "@/components/layout/DefaultLayoutClient";

const Providers = ({ children, ...props }: any) => {
  return (
    <Compose
      components={[
        //
        StorageProvider,
        MainProvider,
      ]}
      {...props}
    >
      <DefaultLayoutClient>{children}</DefaultLayoutClient>
    </Compose>
  );
};

export default Providers;
