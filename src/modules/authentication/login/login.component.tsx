import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { FC, useContext } from "react";
import AuthContext from "../../../shared/contexts/auth.context";
import {
  ILoginFormValues,
  INITIAL_LOGIN_VALUES,
  LOGIN_FORM_SCHEMA,
} from "./login.util";

const LoginComponent: FC = () => {
  const { login, isLoading } = useContext(AuthContext);

  const onSubmit = async () => {
    console.log(values);
    await login(values.email, values.password);
  };

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } =
    useFormik<ILoginFormValues>({
      onSubmit,
      initialValues: INITIAL_LOGIN_VALUES,
      validationSchema: LOGIN_FORM_SCHEMA,
      enableReinitialize: true,
    });

  return (
    <form>
      <Stack
        minH={"100vh"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email" isRequired isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {!!errors.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl id="password" isRequired isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              {!!errors.password ? (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                onClick={onSubmit}
                colorScheme={"blackAlpha"}
                variant={"solid"}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Does not have a user? <Link color={"blue.400"}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </form>
  );
};

export default LoginComponent;
