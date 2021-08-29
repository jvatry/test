import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export interface IFormInputDropDownProps extends FormInputProps {
  options?: Array<{
    [index: number]: { id: number; label: string; key: any; value: any };
  }>;
}

export const FormInputDropdown: React.FC<IFormInputDropDownProps> = ({
  name,
  control,
  label,
  options
}) => {
  const generateSingleOptions = () => {
    return options
      ? options.map((option: any) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })
      : () => {
          return (
            <MenuItem key="" value="">
              "Loading..."
            </MenuItem>
          );
        };
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
