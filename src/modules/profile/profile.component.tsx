import React, { FC, useContext } from "react";

import { useAuth } from "@/shared/hooks";

import { Form, Box, Typography } from "@/shared/modules";

import { AuthContext } from "@/shared/contexts";

import { ProfileFormValues } from "./profile.util";

const Profile: FC = () => {
  const { updateProfile } = useAuth();
  const { user } = useContext(AuthContext);

  const onSubmit = async (values: ProfileFormValues) => {
    await updateProfile(values);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box p={4} shadow="md" rounded="md" bg="white" maxW="400px">
        <Typography header center text="profile.form.title" mb={4} />
        <Form
          onSubmit={onSubmit}
          initialValues={user?.profileForm}
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
