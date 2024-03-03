import { useSignupMutation } from "@/shared/generated/graphql-schema";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  HStack,
  FormErrorMessage,
} from "@chakra-ui/react";

//import { useFormik } from "formik";
import { Formik, Field } from "formik";

import { useRouter } from "next/router";

import { FC } from "react";
import {
  ISignUpFormValues,
  INITIAL_SIGN_UP_VALUES,
  SIGN_UP_FORM_SCHEMA,
} from "./register.util";
import { useTranslation } from "@/shared/hooks";

const RegisterComponent: FC = () => {
  const { t } = useTranslation();
  const [signup] = useSignupMutation();
  const router = useRouter();

  // const onSubmit = async () => {
  //   console.log("SUBMIT!");
  //   await signup({
  //     variables: {
  //       data: values,
  //     },
  //   });
  //   router.push("/login");
  // };

  // const { handleSubmit, handleChange, setFieldValue, values, errors, touched } =
  //   useFormik<ISignUpFormValues>({
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //     initialValues: INITIAL_SIGN_UP_VALUES,
  //     validationSchema: SIGN_UP_FORM_SCHEMA,
  //     enableReinitialize: true,
  //   });

  // const formik = useFormik({
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  //   initialValues: INITIAL_SIGN_UP_VALUES,
  //   validationSchema: SIGN_UP_FORM_SCHEMA,
  //   enableReinitialize: true,
  // });

  // const { handleChange, setFieldValue, values, errors } = formik;

  return (
    <Formik
      initialValues={INITIAL_SIGN_UP_VALUES}
      onSubmit={async (values) => {
        console.log("SUBMIT!");
        console.log(values);
        await signup({
          variables: {
            data: values,
          },
        });
        router.push("/login");
      }}
    >
      {({ handleSubmit, handleChange, errors, touched, values }) => (
        <form onSubmit={handleSubmit}>
          <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"} textAlign={"center"}></Heading>
                  <Text fontSize={"lg"} color={"gray.600"}></Text>
                </Stack>
                <HStack>
                  <Box>
                    <FormControl
                      id="firstName"
                      isRequired
                      isInvalid={!!errors.firstName}
                    >
                      <FormLabel>{t("register.form.firstName")}</FormLabel>
                      <Input
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        type="text"
                      />
                      {!!errors.firstName ? (
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl
                      id="lastName"
                      isRequired
                      isInvalid={!!errors.lastName}
                    >
                      <FormLabel>{t("register.form.lastName")}</FormLabel>
                      <Input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                      />
                      {!!errors.lastName ? (
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired isInvalid={!!errors.email}>
                  <FormLabel>{t("register.form.email")}</FormLabel>
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
                <FormControl
                  id="username"
                  isRequired
                  isInvalid={!!errors.username}
                >
                  <FormLabel>{t("register.form.username")}</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                  />
                  {!!errors.username ? (
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl
                  id="password"
                  isRequired
                  isInvalid={!!errors.password}
                >
                  <FormLabel>{t("register.form.password")}</FormLabel>
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
                <Stack spacing={6} pt={6}>
                  <Button colorScheme={"red"} variant={"solid"} type="submit">
                    {t("register.form.submit")}
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    {t("register.form.alreadyRegister")}{" "}
                    <Link color={"red.400"}>{t("register.form.login")}</Link>
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}></Flex>
          </Stack>
        </form>
      )}
    </Formik>
  );

  // return (
  //   <form onSubmit={formik.handleSubmit}>
  //     <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
  //       <Flex p={8} flex={1} align={"center"} justify={"center"}>
  //         <Stack spacing={4} w={"full"} maxW={"md"}>
  //           <Stack align={"center"}>
  //             <Heading fontSize={"4xl"} textAlign={"center"}></Heading>
  //             <Text fontSize={"lg"} color={"gray.600"}>
  //               {t("coach.information.email")}
  //             </Text>
  //           </Stack>
  //           <HStack>
  //             <Box>
  //               <FormControl id="name" isRequired isInvalid={!!errors.name}>
  //                 <FormLabel>First Name</FormLabel>
  //                 <Input
  //                   name="name"
  //                   onChange={handleChange}
  //                   value={values.name}
  //                   type="text"
  //                 />
  //                 {!!errors.name ? (
  //                   <FormErrorMessage>{errors.name}</FormErrorMessage>
  //                 ) : (
  //                   ""
  //                 )}
  //               </FormControl>
  //             </Box>
  //             <Box>
  //               <FormControl
  //                 id="lastName"
  //                 isRequired
  //                 isInvalid={!!errors.lastName}
  //               >
  //                 <FormLabel>Last Name</FormLabel>
  //                 <Input
  //                   type="text"
  //                   name="lastName"
  //                   onChange={handleChange}
  //                   value={values.lastName}
  //                 />
  //                 {!!errors.name ? (
  //                   <FormErrorMessage>{errors.lastName}</FormErrorMessage>
  //                 ) : (
  //                   ""
  //                 )}
  //               </FormControl>
  //             </Box>
  //           </HStack>
  //           <FormControl id="email" isRequired isInvalid={!!errors.email}>
  //             <FormLabel>Email address</FormLabel>
  //             <Input
  //               type="email"
  //               name="email"
  //               onChange={handleChange}
  //               value={values.email}
  //             />
  //             {!!errors.name ? (
  //               <FormErrorMessage>{errors.email}</FormErrorMessage>
  //             ) : (
  //               ""
  //             )}
  //           </FormControl>
  //           <FormControl id="username" isRequired isInvalid={!!errors.username}>
  //             <FormLabel>Username</FormLabel>
  //             <Input
  //               type="text"
  //               name="username"
  //               onChange={handleChange}
  //               value={values.username}
  //             />
  //             {!!errors.name ? (
  //               <FormErrorMessage>{errors.username}</FormErrorMessage>
  //             ) : (
  //               ""
  //             )}
  //           </FormControl>
  //           <FormControl id="password" isRequired isInvalid={!!errors.password}>
  //             <FormLabel>Password</FormLabel>
  //             <Input
  //               type="password"
  //               name="password"
  //               onChange={handleChange}
  //               value={values.password}
  //             />
  //             {!!errors.name ? (
  //               <FormErrorMessage>{errors.password}</FormErrorMessage>
  //             ) : (
  //               ""
  //             )}
  //           </FormControl>
  //           <Stack spacing={6} pt={6}>
  //             <Button colorScheme={"red"} variant={"solid"} type="submit">
  //               Sign Up
  //             </Button>
  //           </Stack>
  //           <Stack pt={6}>
  //             <Text align={"center"}>
  //               Already a user? <Link color={"red.400"}>Login</Link>
  //             </Text>
  //           </Stack>
  //         </Stack>
  //       </Flex>
  //       <Flex flex={1}></Flex>
  //     </Stack>
  //   </form>
  // );
};

export default RegisterComponent;
