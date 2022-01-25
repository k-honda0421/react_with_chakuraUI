import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { memo, useState, VFC, ChangeEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userID, setUserID] = useState("");

  const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) => setUserID(e.target.value)

  const onClickLogin = () => {
    login(userID);
  }

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} boderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userID} onChange={onChangeUserID}/>
          <PrimaryButton
            loading={loading}
            onClick={onClickLogin}
            disabled={userID === ""}
          >
            Login
          ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
