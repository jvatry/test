import { TextField } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({
  name,
  control,
  label,
  placeholder
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          placeholder={placeholder}
        />
      )}
    />
  );
};
