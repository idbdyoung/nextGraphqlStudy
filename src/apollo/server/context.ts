import prisma from "@/libs/prisma";

import type { ContextFunction } from ".";

const contextFunction: ContextFunction = async () => ({
  prisma,
});

export default contextFunction;
