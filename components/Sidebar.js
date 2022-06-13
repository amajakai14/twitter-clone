import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/outline";
export default function Sidebar() {
  return (
    <>
      <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full">
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 lg:px-1">
          <Image
            width="50"
            height="50"
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          />
        </div>
        {/* Menu */}
        <div className="mt-2 mb-2 lg:items-start">
          <SidebarMenuItem text="Home" Icon={HomeIcon} active />
          <SidebarMenuItem text="Explore" Icon={SearchIcon} />
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        {/* Button */}
        <button type="button" className="hoverEffect ">
          <img
            width="50"
            height="50"
            alt="tweet-icon"
            src="/tweet-icon-white.svg"
            style={{ background: "rgb(29, 155, 240)" }}
            className="rounded-full shadow-md hover:brightness-95"
          />
        </button>
      </div>
      <div className="fixed bottom-1 flex justify-center lg:justify-start p-2">
        {/* Mini-Profile */}
        <button
          type="button"
          className="hoverEffect text-gray-700 flex  gap-1 items-center justify-center lg:justify-start"
        >
          <img
            alt="user-image"
            src="https://i1.sndcdn.com/artworks-000037691241-xcr4ug-t500x500.jpg"
            height="40"
            width="40"
            className="rounded-full "
          ></img>
        </button>
      </div>
    </>
  );
}
