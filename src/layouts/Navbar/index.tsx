import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from 'react'


import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import ThemeToggle from "components/buttons/ThemeToggle";
import { FiExternalLink } from "react-icons/fi";
import UnstoppableDomain from '../Navbar/UnstoppableDomain';
import Body from '../Navbar/body';







Link;
const LinkItem = ({ href, children, ...props }: any) => {
  const { pathname } = useRouter();

  let isActive = false;
  if (href === pathname) {
    isActive = true;
  }

  return (
    <NextLink href={href}>
      <Link
        _hover={{ textDecoration: "none", color: "primary" }}
        color={isActive ? "accent" : ""}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};
const LinkItems = () => {
  return (
    <>
      <LinkItem href="/">Adventure</LinkItem>
      <LinkItem href="/example">Sample</LinkItem>

      <Link
        display="inline-flex"
        alignItems="center"
        gap="2"
        isExternal
        href="https://github.com"
        _hover={{ textDecoration: "none", color: "primary" }}
      >
        Github
        <Icon as={FiExternalLink} />
      </Link>
      

      
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" w="100%" top="0" zIndex={1}>
      <Container display="flex" p={2} maxW="7xl" alignItems="center">
        <HStack>
          <NextLink href="/">
            <Link
              flex="none"
              fontWeight="bold"
              color="accent"
              textTransform="uppercase"
              size="md"
              _hover={{
                textDecoration: "none",
                color: "primary",
                transform: "rotate(-5deg)",
              }}
            >
              QUESTILE
            </Link>
          </NextLink>
          <HStack px="2" spacing="4" display={{ base: "none", md: "flex" }}>
            <LinkItems />
          </HStack>
        </HStack>

        <HStack marginLeft="auto">

          <ConnectButton />
        <UnstoppableDomain/>


          <ThemeToggle display={{ base: "none", md: "flex" }} />
          <IconButton
            size="md"
            px="2"
            mr="2"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>
      </Container>

      {isOpen ? (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack onClick={onClose} align="start" fontSize="lg" spacing="4">
                <LinkItems />
                <ThemeToggle display={{ base: "flex", md: "none" }} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : null}
      <Body setAnimate={undefined} animate={undefined}/>
    </Box>
    
  );
};

export default Navbar;
