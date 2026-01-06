import React from "react";

type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
};

export default function Input({ id, name, placeholder = '', type = 'text' }: InputProps): JSX.Element {
  return (
    <input id={id} name={name} type={type} placeholder={placeholder} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffcc00]" />
  );
}
