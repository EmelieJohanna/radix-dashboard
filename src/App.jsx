import "./App.css";
import { Card, Flex } from "@radix-ui/themes";
import { Separator } from "@radix-ui/themes";
import { Navbar } from "./componets/NavBar.jsx";
import Dashboard from "./componets/Dashboard.jsx";

function App() {
  return (
    <>
      <Flex width="100%">
        <Card style={{ width: "100%", padding: "10px" }}>
          <Navbar />
          <Separator size="4" my="4" mx="0" p="0" />
          <Dashboard />
        </Card>
      </Flex>
    </>
  );
}
export default App;
