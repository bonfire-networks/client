import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Bell, Inbox, Compass, Bookmark, CircleUser, Settings } from "lucide-react"
import Image from "next/image"

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen shrink-0 sm:block xl:w-[220px]">
    <div className="justify-between pb-4 mx-2 flex min-h-screen flex-col items-end xl:items-start">
      <div className="flex grow flex-col space-y-1 xl:w-full">
        <div className="flex flex-row items-center justify-center xl:justify-between">
          <a className="mx-4 block xl:ml-[0.05rem]" title="Recommended feed" href="/">
            <div className="flex h-14 flex-col items-center justify-center md:items-start">
              <Image src="/logo.png" alt="bonfire" width={28} height={24} />
            </div>
          </a>
          <Button asChild variant={"ghost"} size={"icon"}>
            <Link href="/settings">
                <Settings className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <Button className="-ml-2" asChild variant={"ghost"}>
          <Link href="/">
            <div className="relative flex cursor-pointer flex-row items-center justify-center  text-default xl:w-full xl:justify-start">
              <div className="flex shrink-0 leading-4">
                <div className="translate-y-[-1px]">
                  <Home className="w-4 h-4" />
                </div>
                <div className="ml-3 mr-0.5 hidden grow overflow-hidden text-ellipsis whitespace-nowrap xl:block font-normal">Home</div>
              </div>
            </div>
          </Link>
        </Button>
        <Button className="-ml-2" asChild variant={"ghost"}>
          <Link href="/notifications">
            <div className="relative flex cursor-pointer flex-row items-center justify-center  text-default xl:w-full xl:justify-start">
              <div className="flex shrink-0 leading-4">
                <div className="translate-y-[-1px]">
                  <Bell className="w-4 h-4" />
                </div>
                <div className="ml-3 mr-0.5 hidden grow overflow-hidden text-ellipsis whitespace-nowrap xl:block font-normal">Notifications</div>
              </div>
            </div>
          </Link>
        </Button>
        <Button className="-ml-2" asChild variant={"ghost"}>
          <Link href="/messages">
            <div className="relative flex cursor-pointer flex-row items-center justify-center  text-default xl:w-full xl:justify-start">
              <div className="flex shrink-0 leading-4">
                <div className="translate-y-[-1px]">
                  <Inbox className="w-4 h-4" />
                </div>
                <div className="ml-3 mr-0.5 hidden grow overflow-hidden text-ellipsis whitespace-nowrap xl:block font-normal">Direct Messages</div>
              </div>
            </div>
          </Link>
        </Button>
        <Button className="-ml-2" asChild variant={"ghost"}>
          <Link href="/explore">
            <div className="relative flex cursor-pointer flex-row items-center justify-center  text-default xl:w-full xl:justify-start">
              <div className="flex shrink-0 leading-4">
                <div className="translate-y-[-1px]">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="ml-3 mr-0.5 hidden grow overflow-hidden text-ellipsis whitespace-nowrap xl:block font-normal">Explore</div>
              </div>
            </div>
          </Link>
        </Button>
        <Button className="-ml-2" asChild variant={"ghost"}>
          <Link href="/bookmarks">
            <div className="relative flex cursor-pointer flex-row items-center justify-center  text-default xl:w-full xl:justify-start">
              <div className="flex shrink-0 leading-4">
                <div className="translate-y-[-1px]">
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="ml-3 mr-0.5 hidden grow overflow-hidden text-ellipsis whitespace-nowrap xl:block font-normal">Bookmarks</div>
              </div>
            </div>
          </Link>
        </Button>
        <Button className="-ml-2" asChild variant={"ghost"}>
          <Link href="/profile">
            <div className="relative flex cursor-pointer flex-row items-center justify-center  text-default xl:w-full xl:justify-start">
              <div className="flex shrink-0 leading-4">
                <div className="translate-y-[-1px]">
                  <CircleUser className="w-4 h-4" />
                </div>
                <div className="ml-3 mr-0.5 hidden grow overflow-hidden text-ellipsis whitespace-nowrap xl:block font-normal">Profile</div>
              </div>
            </div>
          </Link>
        </Button>
        
      </div>
    </div>
  </aside>
  )
}

