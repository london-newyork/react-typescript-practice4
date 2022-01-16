import React, { VFC } from 'react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton } from '@chakra-ui/button'

type Props = {
    onOpen: () => void
}

export const MenuIconButton:VFC<Props> = (props) => {
    const { onOpen } = props

    return (
        <IconButton
        icon={<HamburgerIcon />}
        aria-label="メニューボタン"
        size="sm"
        variant ="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}/>

    )
}
