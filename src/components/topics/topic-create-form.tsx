"use client";

import { createTopic } from "@/actions";
import UnorderedList from "@/components/common/unordered-list";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

type Props = {};

const TopicCreateForm = (props: Props) => {
  const [formState, action] = useFormState(createTopic, { errors: {} });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              name="name"
              isInvalid={!!formState.errors.name}
              errorMessage={<UnorderedList items={formState.errors.name} />}
            />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              name="description"
              isInvalid={!!formState.errors.description}
              errorMessage={
                <UnorderedList items={formState.errors.description} />
              }
            />
            {formState.errors._form && (
              <div className="p-2 bg-red-200 border rounded border-red-400">
                {formState.errors._form?.join(", ")}
              </div>
            )}

            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
