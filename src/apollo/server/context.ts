import client from "@/libs/client";

import type { ContextFunction } from ".";

const contextFunction: ContextFunction = async () => {
  return {
    client,
  };
};

export default contextFunction;
