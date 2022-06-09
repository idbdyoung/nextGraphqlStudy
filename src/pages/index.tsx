import { useRouter } from "next/router";

const index = () => {
  const { push } = useRouter();

  return (
    <div className="user-button" onClick={() => push("/userInfo")}>
      유저관리
    </div>
  );
};

export default index;
