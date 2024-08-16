"use client";

import { useSession } from "next-auth/react";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();

  if (session.data?.user) {
      return <div>From client: { JSON.stringify(session.data?.user)}</div>;
  }
  return <div>From client: user is signed out</div>;
};

export default Profile;
