import * as React from "react";

import { ProfileFormValues, initialValues } from "./profile.utils";

import { useAuth } from "../../shared/hooks";

import { Form } from "../../shared/modules";

import { Box, Heading } from "@chakra-ui/react";

import { useUserQuery } from "@/shared/generated";

const Profile: React.FC = () => {
  const { updateProfile } = useAuth();

  //const { register, isRegistering } = useAuth();

  const onSubmit = async (values: ProfileFormValues) => {
    await updateProfile(values);
  };

  const user = useUserQuery({
    variables: {
      where: {
        email: "b@test.com",
      },
    },
  });
  console.log(user.data?.user);
  initialValues.email = user.data?.user?.email ?? "";
  initialValues.firstName = user.data?.user?.firstName ?? "";
  initialValues.lastName = user.data?.user?.lastName ?? "";
  initialValues.username = user.data?.user?.username ?? "";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box p={4} shadow="md" rounded="md" bg="white" maxW="400px">
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Mi Perfil
        </Heading>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          fields={[
            {
              type: "field",
              props: {
                name: "firstName",
                label: "register.form.firstName",
              },
            },
            {
              type: "field",
              props: {
                name: "lastName",
                label: "register.form.lastName",
              },
            },
            {
              type: "field",
              props: {
                name: "username",
                label: "register.form.username",
              },
            },
            {
              type: "field",
              props: {
                name: "email",
                label: "register.form.email",
              },
            },
            {
              type: "submit",
              props: {
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

export default Profile;
