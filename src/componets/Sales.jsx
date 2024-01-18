import { Card, Avatar, Text, Box, Flex } from "@radix-ui/themes";
import { purple } from "@radix-ui/colors";

function Profile({ col, name, email, sales }) {
  return (
    <>
      <Flex gap="3" align="center" justify-content="space-evenly" m="4">
        <Avatar
          size="3"
          style={{ backgroundColor: col }}
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            {name}
          </Text>
          <Text as="div" size="2">
            {email}
          </Text>
        </Box>
        <Text as="div" weight="extra-bold">
          {sales}
        </Text>
      </Flex>
    </>
  );
}

export default function Sales() {
  return (
    <>
      <Flex direction="column">
        <Card>
          <Text weight="bold">Recent Sales</Text>
          <br />
          <Text>You made 265 sales this month.</Text>
          <Profile
            col="blue"
            name="Olivia Martin"
            email="olivia.martin@email.com"
            sales="+$1,999.00"
          />
          <Profile
            col="pink"
            name="Jackson Lee"
            email="jackson.lee@email.com"
            sales="+$39.00"
          />
          <Profile
            col={purple}
            name="Isabella Nguyen"
            email="isabella.nguyen@email.com"
            sales="+$299.00"
          />
          <Profile
            col="black"
            name="William Kim"
            email="will@email.com"
            sales="+$99.00"
          />
          <Profile
            col="yellow"
            name="Sofia Davis"
            email="sofia.davis@email.com"
            sales="+$39.00"
          />
        </Card>
      </Flex>
    </>
  );
}
