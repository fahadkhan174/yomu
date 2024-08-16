import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const FormButton = ({ children }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
};

export default FormButton;
