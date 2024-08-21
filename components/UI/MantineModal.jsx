'use client'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Button from './Buttons/Button';
const MantineModal=({ children, name, ...props }) => {
    const [opened, { open, close }]=useDisclosure(false);
    return (
        <>
            <Modal
                size="auto"
                opened={opened}
                onClose={close}
                centered
                {...props}
            >
                {children}
            </Modal>
            <Button onClick={open}>{name}</Button>
        </>
    )
}

export default MantineModal