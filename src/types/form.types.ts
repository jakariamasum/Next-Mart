import { ReactNode } from "react";
export interface IInput {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
}
export interface ISelect {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

export interface IImage {
  name: string;
  label: string;
  required?: boolean;
}

export interface IButton {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}
