import { TextField, Flex, Avatar, Box, Text, Link } from "@radix-ui/themes";
import { CaretSortIcon } from "@radix-ui/react-icons";

function User() {
  return (
    <Flex gap="3" align="center">
      <Avatar
        size="3"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      <Box>
        <Text as="div" size="2" weight="bold">
          Teodros Girmay
        </Text>
      </Box>
    </Flex>
  );
}

function Tabs1() {
  return (
    <>
      <Flex gap="3" align="center">
        <Link>
          <Text color="black">Overview</Text>
        </Link>
        <Link>
          <Text color="gray">Customers</Text>
        </Link>
        <Link>
          <Text color="gray">Products</Text>
        </Link>
        <Link>
          <Text color="gray">Settings</Text>
        </Link>
      </Flex>
    </>
  );
}

function SearchBar() {
  return (
    <TextField.Root>
      <TextField.Input placeholder="Search…" />
    </TextField.Root>
  );
}

export function Navbar() {
  return (
    <>
      <Flex justify="between" align="center">
        <Flex align="center">
          <User />
          <CaretSortIcon />
          <Tabs1 />
        </Flex>
        <SearchBar />
      </Flex>
    </>
  );
}
