"use client";

import { signIn, signOut } from "@/actions";
import {
    Avatar,
    Button,
    NavbarItem,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

type Props = {};

const HeaderAuth = (props: Props) => {
  const session = useSession();

  let user = session.data?.user;
  let authContent;
  if (session.status === "loading") {
    authContent = null;
  } else if (user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={user?.image ?? ""}></Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <div>{user?.name}</div>
            <form action={signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" color="primary" variant="bordered">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
};

export default HeaderAuth;
