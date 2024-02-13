import Image from "next/image";
import styles from "./page.module.css";
import SidebarComponent from "../modules/navigation/sidebar.component";
import SearchbarComponent from "../modules/navigation/searchbar.component";
import TestListComponent from "../modules/tests/test-list/test-list.component";

import { Box, Button, ChakraProvider, Flex, VStack } from "@chakra-ui/react";
import {
  useUserQuery,
  useCreateTestMutation,
  Role,
  Status,
  Level,
} from "../shared/generated/graphql-schema";
import SearchBar from "../modules/navigation/searchbar.component";
import Sidebar from "../modules/navigation/sidebar.component";

export default function Home() {
  return (
    <Flex h="100vh">
      <Box w="250px" bg="blue.500" color="white">
        <Sidebar />
      </Box>
      <VStack w="full" spacing={4}>
        <Box w="full" p="4">
          <SearchBar />
        </Box>
        <Box w="full" p="4" bg="gray.100">
          {<TestListComponent></TestListComponent>}
        </Box>
      </VStack>
    </Flex>
  );
}

// export default function Home() {
//   const user = useUserQuery({
//     variables: {
//       where: {
//         email: "bryan@test.com",
//       },
//     },
//   });
//   console.log(user.data?.user);
//   const [createTest] = useCreateTestMutation();
//   const handleClick = async () => {
//     const response = await createTest({
//       variables: {
//         data: {
//           status: Status.Active,
//           level: Level.Beginner,
//           name: "NEXT 1",
//           description: "NEXT fundamentals",
//           questions: {
//             create: [
//               {
//                 question: {
//                   text: "Texto de la primera pregunta aquí",
//                   correctAnswer: {
//                     create: {
//                       text: "Texto de la respuesta correcta para la primera pregunta aquí",
//                     },
//                   },
//                   answers: {
//                     create: [
//                       {
//                         answer: {
//                           create: {
//                             text: "Texto de la primera respuesta incorrecta aquí",
//                           },
//                         },
//                       },
//                       {
//                         answer: {
//                           create: {
//                             text: "Texto de la segunda respuesta incorrecta aquí",
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 question: {
//                   text: "Texto de la segunda pregunta aquí",
//                   correctAnswer: {
//                     create: {
//                       text: "Texto de la respuesta correcta para la segunda pregunta aquí",
//                     },
//                   },
//                   answers: {
//                     create: [
//                       {
//                         answer: {
//                           create: {
//                             text: "Texto de la primera respuesta incorrecta aquí",
//                           },
//                         },
//                       },
//                       {
//                         answer: {
//                           create: {
//                             text: "Texto de la segunda respuesta incorrecta aquí",
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//             ],
//           },
//         },
//       },
//     });
//     console.log(response);
//   };
//   return (

//     <ChakraProvider>
//       <main className={styles.main}>
//         <h1>Index</h1>
//         <Button variant="outline" colorScheme="blue" onClick={handleClick}>
//           CLICK ME!!!
//         </Button>
//       </main>
//     </ChakraProvider>
//   );
// }
