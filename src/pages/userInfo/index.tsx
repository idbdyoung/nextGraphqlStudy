import prisma from "@/libs/prisma";

import type { User } from "@prisma/client";

const UserInfo = ({ users }: { users: User[] }) => {
  return <div>{users.map((user) => user.name)}</div>;
};

export const getStaticProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: { users },
    revalidate: 20,
  };
};

export default UserInfo;
