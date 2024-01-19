import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon, DownloadIcon } from "@radix-ui/react-icons";
import "./DownPopover.css";
import { Button } from "@radix-ui/themes";

function DownPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          display="flex"
          className="IconButton"
          aria-label="Update dimensions"
        >
          <DownloadIcon />
          <p>Download</p>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ marginBottom: 10 }}>Confirm to download</p>
            <button className="Confirm">Confirm</button>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
            <Button>Cancel</Button>
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default DownPopover;
