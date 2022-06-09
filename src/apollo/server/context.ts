import prisma from "@/libs/client";

import type { ContextFunction } from ".";

const contextFunction: ContextFunction = async () => ({
  prisma,
});

export default contextFunction;
