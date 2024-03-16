import * as React from "react";

import { RegisterFormValues, initialValues } from "./register.util";

import { useAuth } from "../../../shared/hooks";

import { Form } from "../../../shared/modules";

import { Box, Heading } from "@chakra-ui/react";

const Register: React.FC = () => {
  const { register, isRegistering } = useAuth();

  const onSubmit = async (values: RegisterFormValues) => {
    await register(values);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box p={4} shadow="md" rounded="md" bg="white" maxW="400px">
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Registro
        </Heading>
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
    </Box>
  );
};

export default Register;
