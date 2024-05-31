import React, { FC } from "react";

import { Form, Box } from "@/shared/modules";

import { useAuth } from "@/shared/hooks";

import { LoginFormValues, initialValues, validation } from "./login.util";

export const Login: FC = () => {
  const { login, isAuthenticating } = useAuth();

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values);
    } catch (error) {
      console.log(error); // TODO CREATE AN ERROR POPUP
    }
  };

  return (
    <Box alignCenter={true} highlight={true}>
      <Form<LoginFormValues>
        onSubmit={onSubmit}
        validation={validation}
        initialValues={initialValues}
        fields={[
          {
            type: "field",
            props: {
              disabled: isAuthenticating,
              name: "email",
              icon: "email",
              placeholder: "login.form.email",
            },
          },
          {
            type: "field",
            props: {
              disabled: isAuthenticating,
              name: "password",
              icon: "password",
              placeholder: "login.form.password",
              secureTextEntry: true,
            },
          },
          {
            type: "submit",
            props: {
              loading: isAuthenticating,
              uppercase: true,
              block: true,
              text: "login.form.submit",
            },
          },
        ]}
      />
      {}
    </Box>
  );
};
