import { Button } from '@chakra-ui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/modal'
import React, { memo, VFC } from 'react'

type Props = {
    onClose: () => void
    isOpen: boolean
    onClickHome:() => void
    onClickUserManagement:() => void
    onClickSetting:() => void
}

export const MenuDrawer:VFC<Props> = memo((props) => {
    const { isOpen, onClose, onClickUserManagement, onClickHome, onClickSetting } = props
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody as="nav" p={0} bg="gray.100">
                    <Button w="100%" onClick={onClickHome}>
                        TOP
                    </Button>
                    <Button w="100%" onClick={onClickUserManagement}>
                        ユーザー一覧
                    </Button>
                    <Button w="100%" onCLick={onClickSetting}>
                        設定
                    </Button>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
    )
})
