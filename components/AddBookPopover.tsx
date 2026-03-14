import { PopoverTrigger, Popover, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { Form } from "./ui/"

export function AddBookPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Add Book</Button>
      </PopoverTrigger>
      <PopoverContent>

      </PopoverContent>
    </Popover>
  );
}
