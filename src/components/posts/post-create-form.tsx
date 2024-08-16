"use client";

import { createPost } from "@/actions";
import FormButton from "@/components/common/form-button";
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

interface Props {
  slug: string;
}

const PostCreateForm = ({ slug }: Props) => {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });

  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button type="submit">Create a Post</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Create a Post</h3>
              <Input
                label="Title"
                labelPlacement="outside"
                placeholder="Title"
                name="title"
                isInvalid={!!formState.errors.title}
                errorMessage={<UnorderedList items={formState.errors.title} />}
              />
              <Textarea
                label="Content"
                labelPlacement="outside"
                placeholder="Content"
                name="content"
                isInvalid={!!formState.errors.content}
                errorMessage={
                  <UnorderedList items={formState.errors.content} />
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
    </div>
  );
};

export default PostCreateForm;
