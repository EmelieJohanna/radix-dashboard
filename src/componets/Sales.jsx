import { Avatar, Text, Table } from "@radix-ui/themes";
import { purple } from "@radix-ui/colors";

function Profile({ col, name, email, sales }) {
  return (
    <>
      <Table.Row style={{ borderCollapse: "collapse", width: "max-width" }}>
        <Table.Cell>
          <Avatar
            size="3"
            style={{ backgroundColor: col }}
            radius="full"
            fallback="T"
          />
        </Table.Cell>
        <Table.Cell>
          <Text as="div" size="2" weight="bold">
            {name}
          </Text>
          <Text as="div" size="2">
            {email}
          </Text>
        </Table.Cell>
        <Table.Cell textalign="right" weight="extra-bold">
          {sales}
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default function Sales() {
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <strong>Recent Sales</strong>
            <br />
            You made 265 sales this month
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Profile
              col="blue"
              name="Olivia Martin"
              email="olivia.martin@email.com"
              sales="+$1,999.00"
            />
          </Table.Row>
          <Table.Row>
            <Profile
              col="pink"
              name="Jackson Lee"
              email="jackson.lee@email.com"
              sales="+$39.00"
            />
          </Table.Row>
          <Table.Row>
            <Profile
              col={purple}
              name="Isabella Nguyen"
              email="isabella.nguyen@email.com"
              sales="+$299.00"
            />
          </Table.Row>
          <Table.Row>
            <Profile
              col="black"
              name="William Kim"
              email="will@email.com"
              sales="+$99.00"
            />
          </Table.Row>

          <Table.Row>
            <Profile
              col="yellow"
              name="Sofia Davis"
              email="sofia.davis@email.com"
              sales="+$39.00"
            />
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
}
