import { useForm } from "react-hook-form";
import { Box, Grid, Button, Paper, Typography } from "@material-ui/core";
import { FormInputText } from "../../../components/FormInputText";
import { FormInputDropdown } from "../../../components/FormInputDropDown";
import MembersTable from "./MembersTable";
import { useState } from "react";
import { generate } from "shortid";

import { User } from "./UserModel";
import { Role } from "./RoleModel";

interface IFormInput {
  "user-input-text": string;
  "role-input-dropdown": string;
}

const defaultValues = {
  "user-input-text": "",
  "role-input-dropdown": ""
};

const roles = [
  {
    label: "None",
    value: ""
  },
  {
    label: "Manager",
    value: "1"
  },
  {
    label: "Encoder",
    value: "2"
  }
];

export const Members = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;

  const [rows, setRows] = useState([
    {
      id: "1",
      user: new User("", "", ""),
      granted_by: new User("", "", ""),
      roles: [new Role("")]
    }
  ]);

  const onSubmit = (data: IFormInput) => {
    console.log(data);

    setRows((currentRows) => [
      {
        id: generate(),
        user: new User(data["user-input-text"], "", "default@yopmail..com"),
        granted_by: new User(
          data["user-input-text"],
          "",
          "default@yopmail..com"
        ),
        roles: [new Role(data["role-input-dropdown"])]
      },
      ...currentRows
    ]);

    reset({ ...defaultValues });
  };

  return (
    <div>
      <div>
        <Paper
          style={{
            display: "grid",
            gridRowGap: "20px",
            padding: "20px",
            margin: "10px 300px"
          }}
        >
          <Box p={1}>
            <Typography variant="h5" align="left">
              Invite members
            </Typography>
          </Box>
          <FormInputText
            name="user-input-text"
            control={control}
            label="Search for users"
            placeholder="Type firstname or lastname"
          />

          <FormInputDropdown
            name="role-input-dropdown"
            control={control}
            label="Roles"
            options={roles}
          />

          <Button
            onClick={handleSubmit(onSubmit)}
            variant={"contained"}
            color={"primary"}
          >
            {" "}
            Invite{" "}
          </Button>
        </Paper>
      </div>
      <MembersTable rows={rows} />
      <div></div>
    </div>
  );
};
