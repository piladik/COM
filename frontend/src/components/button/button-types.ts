import React from "react";

interface IButtonCommonProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

type TButtonConditionalPurposesProps =
  | {
      primary?: boolean;
      secondary?: never;
      success?: never;
      warning?: never;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: boolean;
      success?: never;
      warning?: never;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: never;
      success?: boolean;
      warning?: never;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: never;
      success?: never;
      warning?: boolean;
      danger?: never;
    }
  | {
      primary?: never;
      secondary?: never;
      success?: never;
      warning?: never;
      danger?: boolean;
    };

type TButtonConditionalStyleProps =
  | {
      rounded?: never;
      outline?: never;
    }
  | {
      rounded?: boolean;
      outline?: never;
    }
  | {
      rounded?: never;
      outline?: boolean;
    }
  | {
      rounded?: boolean;
      outline?: boolean;
    };

export type TButtonProps = IButtonCommonProps &
  TButtonConditionalPurposesProps &
  TButtonConditionalStyleProps &
  React.ComponentPropsWithoutRef<"button">;
