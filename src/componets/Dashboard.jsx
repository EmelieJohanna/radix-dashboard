import { Card, Flex, Heading, Tabs } from "@radix-ui/themes";
import Cards from "./Card.jsx";
import {
  PersonIcon,
  CardStackIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { Overview } from "./Overview.jsx";
import Sales from "./Sales.jsx";
import DownButton from "./DownButton.jsx";

function Tabs2() {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Overview</Tabs.Trigger>
        <Tabs.Trigger value="overview">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

function OverviewCard() {
  return (
    <>
      <Card style={{ width: "820px" }}>
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
          <DownButton />
        </Flex>
        <Tabs2 />
        {/* CARDS */}

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

          <Sales />
        </Flex>
      </Flex>
    </>
  );
}
