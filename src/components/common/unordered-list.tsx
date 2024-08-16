"use client";

interface Props {
  items?: string[];
}

const UnorderedList = ({ items }: Props) => {
  return items?.map((item) => <li key={item}>{item}</li>);
};

export default UnorderedList;
