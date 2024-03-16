import * as React from "react";
import { Box } from "@chakra-ui/react";

import { Form } from "../../../shared/modules";

import { useAuth } from "../../../shared/hooks";

import { LoginFormValues, initialValues } from "./login.util";

const Login: React.FC = () => {
  const { login } = useAuth();

  // const navigation = useNavigation();

  // const forgotLink: RouteLink = {
  //   route: GlobalRoute.AUTH,
  //   screen: AuthScreen.FORGOT_PASSWORD,
  // };

  const onSubmit = async (values: LoginFormValues) => {
    console.log("here!!!");
    try {
      await login(values);
    } catch (error) {
      // if (error instanceof AlertError) {
      //   if (error.type === "UserNotConfirmedException") {
      //     navigation.navigate(GlobalRoute.AUTH, {
      //       screen: AuthScreen.VERIFY_ACCOUNT,
      //       params: { email: values.email, password: values.password },
      //     });
      //   }
      // }
      // throw error;
    }
  };

  return (
    <Box p={4} shadow="md" rounded="md" bg="white">
      <Form<LoginFormValues>
        onSubmit={onSubmit}
        //    validation={validation}
        initialValues={initialValues}
        fields={[
          {
            type: "field",
            props: {
              // disabled: isAuthenticating,
              name: "email",
              //     icon: "email",
              placeholder: "login.form.email",
            },
          },
          {
            type: "field",
            props: {
              //disabled: isAuthenticating,
              name: "password",
              //         icon: "password",
              placeholder: "login.form.password",
              secureTextEntry: true,
            },
          },
          {
            type: "submit",
            props: {
              //     loading: isAuthenticating,
              uppercase: true,
              block: true,
              text: "login.form.submit",
              //     mt: 4,
            },
          },
        ]}
      />
      {}
    </Box>
  );
};

export default Login;
