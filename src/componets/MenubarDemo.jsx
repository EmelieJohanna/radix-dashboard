import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import "./menubarDemo.css";

const MenubarDemo = () => {
  return (
    <Menubar.Root className="MenubarRoot">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger" id="overview">
          Overview
        </Menubar.Trigger>
        <Menubar.Trigger className="MenubarTrigger">Analytics</Menubar.Trigger>
        <Menubar.Trigger className="MenubarTrigger">Reports</Menubar.Trigger>
        <Menubar.Trigger className="MenubarTrigger">
          Notifications
        </Menubar.Trigger>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenubarDemo;
