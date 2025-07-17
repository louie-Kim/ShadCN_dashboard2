"use client";

import {
  BadgeDollarSign,
  BarChart2,
  Bell,
  Calendar,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  ChevronUp,
  CornerUpRight,
  Ellipsis,
  FileText,
  Folder,
  Home,
  Inbox,
  LogOut,
  MoreHorizontal,
  Newspaper,
  PictureInPicture2,
  Plane,
  PlusCircle,
  Receipt,
  Rocket,
  ScanSearch,
  Search,
  SearchCheckIcon,
  Settings,
  SquareActivity,
  SquareMousePointer,
  Trash,
  User2,
  UserCog,
  Wrench,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Menu items.
const items = [
  {
    title: "User",
    url: "/users/test",
    icon: User2,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: BadgeDollarSign,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [isOpenPlayground, setIsOpenPlayground] = useState(false);
  const [isOpenModels, setIsOpenModels] = useState(false);
  const [isOpenDocumentation, setIsOpenDocumentation] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  return (
    // side="left" : 사이드바 위치 설정
    // variant = sidebar | floating | inset : 사이드바 스타일 설정
    // collapsible="offcanvas | icon | none" : 사이드바의 접기 기능 설정
    <Sidebar side="left" variant="floating" collapsible="icon">
      {/* SidebarHeader ---------------------------------------------------------*/}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size={"lg"}>
                  <Avatar className="rounded-md">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <span className="">JY Inc</span>
                    <span className="text-sm text-muted-foreground">
                      Enterprise
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="left"
                align="start"
                sideOffset={20}
                className="w-[--radix-popper-anchor-width]"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="p-2 text-sm text-muted-foreground">
                    Teams
                  </span>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <SquareActivity />
                        {/* truncate : text가 길어도 <ScanSearch /> 안밀림 */}
                        <span className="truncate">1.Acme Inc</span>
                      </div>
                      <ScanSearch />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <Newspaper />
                        <span className="truncate">2.Acme Corp</span>
                      </div>
                      <ScanSearch />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <PictureInPicture2 />
                        <span className="truncate">3.Evil Corp.</span>
                      </div>
                      <ScanSearch />
                    </div>
                  </DropdownMenuItem>
                  <SidebarSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <PlusCircle />
                        <span className="truncate">Add team</span>
                      </div>
                      <ScanSearch />
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Group -0 : link to Approuter -------------------------------------------- */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* asChild : no default wrapper -> directly use childs */}
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Payments" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Group -1 : Collapsible SidebarMenu ----------------------------------------*/}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>

            {/* Playground 메뉴 */}
            <Collapsible
              open={isOpenPlayground}
              onOpenChange={setIsOpenPlayground}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <SquareMousePointer className="w-4 h-4" />
                      <span>Playground</span>
                    </div>
                    {isOpenPlayground ? <ChevronDown /> : <ChevronRight />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>History</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Starred</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>

            {/* Models 메뉴 (새로 추가된 항목) */}
            <Collapsible open={isOpenModels} onOpenChange={setIsOpenModels}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <SearchCheckIcon className="w-4 h-4" />
                      <span>Models</span>
                    </div>
                    {isOpenModels ? <ChevronDown /> : <ChevronRight />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Genesis</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Explore</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Quantum</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>

            {/* Documentation */}
            <Collapsible
              open={isOpenDocumentation}
              onOpenChange={setIsOpenDocumentation}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Documentation</span>
                    </div>
                    {isOpenDocumentation ? <ChevronDown /> : <ChevronRight />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Introduction</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Get Started</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Tutorials</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>changelog</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>

            {/* Settings */}
            <Collapsible open={isOpenSettings} onOpenChange={setIsOpenSettings}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </div>
                    {isOpenSettings ? <ChevronDown /> : <ChevronRight />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>General</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Team</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Billing</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                        <span>Limits</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
        {/* Group -2 : ... 클릭 -> 작은창 ----------------------------------------------*/}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Design Engineering */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Wrench className="w-4 h-4" />
                    <span>Design Engineering</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <Folder />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CornerUpRight />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <SidebarSeparator />
                    <DropdownMenuItem>
                      <Trash />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
              {/* Sales & Marketing */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <BarChart2 className="w-4 h-4" />
                    <span>Sales & Marketing</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <Folder />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CornerUpRight />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <SidebarSeparator />
                    <DropdownMenuItem>
                      <Trash />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
              {/* Travel */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Plane className="w-4 h-4" />
                    <span>Travel</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <Folder />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CornerUpRight />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <SidebarSeparator />
                    <DropdownMenuItem>
                      <Trash />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
              {/* More */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Ellipsis className="w-4 h-4" />
                    <span>More</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <Folder />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CornerUpRight />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <SidebarSeparator />
                    <DropdownMenuItem>
                      <Trash />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* SidebarFooter -------------------------------------------------------------- */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size={"lg"}>
                  <Avatar className="rounded-md">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="">louieKim</span>
                    <span className="text-sm text-muted-foreground">
                      m@gamil.com
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="left"
                align="end"
                sideOffset={20}
                className="w-[--radix-popper-anchor-width]"
                // className="w-[15rem]"
              >
                <div className="flex flex-col items-start gap-1 px-2">
                  <div className="flex items-center gap-2 p-1">
                    <Avatar className="rounded-md">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="">louieKim</span>
                      <span className="text-sm text-muted-foreground">
                        m@gamil.com
                      </span>
                    </div>
                  </div>
                  <SidebarSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <Rocket />
                        <span className="truncate">Upgrade to pro</span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <SidebarSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <UserCog />
                        <span className="truncate">Account</span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <Receipt />
                        <span className="truncate">Billing</span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <Bell />
                        <span className="truncate">Notification</span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <SidebarSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 w-[150px]">
                        <LogOut />
                        <span className="truncate">Log out</span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
