import { Button, Text } from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";
import "@radix-ui/colors";

export default function DownButton() {
  return (
    <Button style={{ backgroundColor: "black" }}>
      <DownloadIcon />
      <Text>Download</Text>
    </Button>
  );
}
