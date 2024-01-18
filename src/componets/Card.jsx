import { Card, Flex, Box, Text } from "@radix-ui/themes";
// import { gray } from "@radix-ui/colors";

// import {} from "@radix-ui/react-icons";

export default function Cards({ desc, num, growth, icon }) {
  //   const { desc, num, growth, icon } = data;

  return (
    <>
      <Card>
        <Flex gap="3" align="flex-start">
          <Box>
            <Text as="div" size="2" weight="bold">
              {desc}
            </Text>
            <Text as="div" size="2" color="gray">
              {num}
            </Text>
            <Text as="div" size="2" color="gray">
              {growth}
            </Text>
          </Box>
          <div>{icon}</div>
        </Flex>
      </Card>
    </>
  );
}
