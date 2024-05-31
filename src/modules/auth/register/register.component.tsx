import React, { FC } from "react";

import { useAuth } from "@/shared/hooks";

import { Box, Form, Typography } from "@/shared/modules";

import { RegisterFormValues, initialValues } from "./register.util";

export const Register: FC = () => {
  const { register, isRegistering } = useAuth();
  const onSubmit = async (values: RegisterFormValues) => {
    try {
      await register(values);
    } catch (error) {
      console.error("Registration failed:", error); // add error popup
    }
  };

  return (
    <Box>
      <Typography
        text="register.form.title"
        header={true}
        fontSize="md"
        center={true}
        mb={4}
      />
      <Form<RegisterFormValues>
        onSubmit={onSubmit}
        initialValues={initialValues}
        fields={[
          {
            type: "field",
            props: {
              disabled: isRegistering,
              name: "firstName",
              label: "register.form.firstName",
            },
          },
          {
            type: "field",
            props: {
              disabled: isRegistering,
              name: "lastName",
              label: "register.form.lastName",
            },
          },
          {
            type: "field",
            props: {
              disabled: isRegistering,
              name: "username",
              label: "register.form.username",
            },
          },
          {
            type: "field",
            props: {
              disabled: isRegistering,
              name: "email",
              label: "register.form.email",
            },
          },
          {
            type: "field",
            props: {
              disabled: isRegistering,
              name: "password",
              label: "register.form.password",
              secureTextEntry: true,
            },
          },
          {
            type: "submit",
            props: {
              loading: isRegistering,
              uppercase: true,
              block: true,
              text: "register.form.submit",
            },
          },
        ]}
      />
    </Box>
  );
};
