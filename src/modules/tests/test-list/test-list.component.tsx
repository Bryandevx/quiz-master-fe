import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { TestCardComponent } from "@/modules/tests/shared/components";
import {
  TestWhereUniqueInput,
  OrderByArg,
  useGetTestsQuery,
} from "@/shared/generated/graphql-schema";
import { Test } from "@/modules/tests/shared/model/test";
import AuthContext from "@/shared/contexts/auth.context";
import { useRouter } from "next/router";

const TestListComponent: FC = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);

  const [skip, setSkip] = useState(1);

  const { data, fetchMore, loading } = useGetTestsQuery({
    variables: {
      skip: 0,
      take: 1,
      order: {
        createdAt: OrderByArg.Asc,
      },
    },
    fetchPolicy: "cache-and-network",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const handleLoadMore = async () => {
    await fetchMore({
      variables: {
        skip: skip,
        take: 1,
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          payload: [...prev.payload, ...fetchMoreResult.payload],
        });
      },
    });
    setSkip(skip + 1);
  };

  return (
    <Box>
      <Flex wrap="wrap" height={"1000%"} justifyContent={"center"}>
        {data?.payload.map((item, index) => (
          <TestCardComponent key={index} test={item as Test} />
        ))}
      </Flex>
      <Flex p={14} justifyContent="center">
        <Button
          onClick={() => handleLoadMore()}
          colorScheme={"red"}
          variant={"solid"}
        >
          Load More
        </Button>
      </Flex>
    </Box>
  );
};

export default TestListComponent;
