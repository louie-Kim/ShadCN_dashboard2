"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DateRange } from "react-day-picker";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dropdown, setDropdown] =
    useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    );

  //  mode="range" -> selected={range} onSelect={setRange}
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full ">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-4">
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              captionLayout={dropdown}
              className="rounded-lg border shadow-sm"
            />
            {/* <div className="flex flex-col gap-3">
              <Label
                htmlFor="dropdown"
                className="flex items-center justify-center px-1"
              >
                Choose oprions
              </Label>
              <Select
                value={dropdown}
                onValueChange={(value) =>
                  setDropdown(
                    value as React.ComponentProps<
                      typeof Calendar
                    >["captionLayout"]
                  )
                }
              >
                <SelectTrigger
                  id="dropdown"
                  size="sm"
                  className="bg-background w-full"
                >
                  <SelectValue placeholder="Dropdown" />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectItem value="dropdown">Month and Year</SelectItem>
                  <SelectItem value="dropdown-months">Month Only</SelectItem>
                  <SelectItem value="dropdown-years">Year Only</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-[400px]  mt-4 overflow-y-auto rounded-2xl p-2">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items1" />
              <label htmlFor="items1" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items2" checked/>
              <label htmlFor="items2" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items3" checked/>
              <label htmlFor="items3" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items4" />
              <label htmlFor="items4" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items5" />
              <label htmlFor="items5" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items6" />
              <label htmlFor="items6" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items7" />
              <label htmlFor="items7" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items8" />
              <label htmlFor="items8" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items9" />
              <label htmlFor="items9" className="text-sm text-muted-foreground">
                TodoList
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Checkbox id="items10" />
              <label
                htmlFor="items10"
                className="text-sm text-muted-foreground"
              >
                TodoList
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
