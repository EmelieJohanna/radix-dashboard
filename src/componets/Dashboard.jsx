import { Card, Flex, Heading } from "@radix-ui/themes";
import Cards from "./Card.jsx";
import {
  PersonIcon,
  CardStackIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { Overview } from "./Overview.jsx";

import DownPopover from "./DownPopover.jsx";
import MenubarDemo from "./MenubarDemo.jsx";
import Sales from "./Sales.jsx";

function OverviewCard() {
  return (
    <>
      <Card style={{ width: "51em" }}>
        <Flex>
          <Overview />
        </Flex>
      </Card>
    </>
  );
}

export default function Dashboard() {
  return (
    <>
      <Flex direction="column" gap="5" width="100%">
        <Flex justify="between">
          <Heading>Dashboard</Heading>
          <DownPopover />
        </Flex>
        <MenubarDemo />

        <Flex direction="row" justify="between">
          <Cards
            desc="Total Revenue"
            num="$45,231.89"
            growth="+20.1% from last month"
            icon="$"
          />
          <Cards
            desc="Subscriptions"
            num="+2350"
            growth="+180.1% from last month"
            icon={<PersonIcon />}
          />
          <Cards
            desc="Sales"
            num="+12,234"
            growth="+19% from last month"
            icon={<CardStackIcon />}
          />
          <Cards
            desc="Active now"
            num="+573"
            growth="+201 from last hour"
            icon={<ArrowTopRightIcon />}
          />
        </Flex>
        <Flex gap="4" direction="row" width="100%">
          <OverviewCard />
          <Card>
            <Sales />
          </Card>
        </Flex>
      </Flex>
    </>
  );
}
