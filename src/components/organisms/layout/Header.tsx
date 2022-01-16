/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, Link } from '@chakra-ui/layout'
import { memo, useCallback, VFC } from 'react'

import { MenuDrawer } from "../../molecules/MenuDrawer"
import { useDisclosure } from '@chakra-ui/hooks'
import { useHistory } from 'react-router'
import { MenuIconButton } from '../../atoms/button/MenuIconButton'

export const Header:VFC = memo(() => {

    const history = useHistory()

    const onClickHome = useCallback(() => history.push("/home"),[])
    const onClickUserManagement = useCallback(
        () => history.push("/home/user_management"),
        []
    )
    const onClickSetting = useCallback(() => history.push("/home/setting"),[])
    // const onClick = useCallback(() => history.push("/home"), [])
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Flex
            as="nav"
            bg="teal.500"
            color="gray.50"
            align="center"
            justify="space-between"
            padding={{ base: 3, md: 5 }}>
            <Flex
            align="center"
            as="a"
            mr={8}
            _hover={{ cursor: "pointer" }}
            onClick={onClickHome}>
                <Heading
                    as="h1"
                    fontSize={{ base: "md", md: "lg" }}>
                    ユーザー管理アプリ
                </Heading>
            </Flex>
            <Flex
                algin="center"
                fontSize="sm"
                flexGrow={2}
                display={{ base: "none" , md: "flex"}}
                >
                <Box pr={4}>
                    <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
                    <Link onClick={onClickSetting}>設定</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
        />
        </>
    )
})
