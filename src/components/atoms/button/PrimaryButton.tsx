import { Button } from '@chakra-ui/button'
import React, { ReactNode, VFC } from 'react'

type Props = {
    children: ReactNode
    isFullWidth?: boolean
    disabled?: boolean
    isLoading?: boolean
    onClick: () => void
}

export const PrimaryButton:VFC<Props> = (props) => {
    const {
        children,
        isFullWidth = false,
        disabled = false,
        isLoading = false,
        onClick } = props
    return (
        <Button
        bg="teal.400"
        color="white"
        isFullWidth={isFullWidth}
        disabled={disabled || isLoading}
        isLoading = {isLoading}
        onClick={onClick}
        _hover={{ opacity: .8}}
        >
            {children}
        </Button>

    )
}
