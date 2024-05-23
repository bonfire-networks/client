import Image from "next/image";
import Link from "next/link";
import { Bell, EllipsisVertical, FileText } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileHero() {
  return (
    <div>
      <div className="p-4">
        <div className="flex w-full flex-row items-start">
          <span className="cursor-pointer">
            <Image
              src="/profile.png"
              alt="Profile"
              width={56}
              height={56}
              className="aspect-square shrink-0 rounded-full border object-cover bg-app border-default mr-2 md:mr-4"
            />
          </span>
          <div className="min-w-0 flex-auto space-y-3">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="flex min-w-0 flex-row items-center">
                  <div className="!block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap break-words text-default hover:underline text-base font-semibold leading-5">
                    Vitalik Buterin
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="mr-1 text-sm text-muted-foreground">
                    @vitalikbuterin
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Button variant="outline" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"} size={"icon"}>
                      <EllipsisVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Open original page</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Mute @sujiyan</DropdownMenuItem>
                    <DropdownMenuItem>Block @sujiyan</DropdownMenuItem>
                    <DropdownMenuItem>Report @sujiyan</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Block domain fediscience.org
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="mt-1 text-sm max-w-[480px] break-gracefully">
              Hullo.
            </div>
            <div className="flex w-full text-sm flex-row flex-wrap gap-2">
              <Link href="/profile/following">
                <span className="mr-1 font-semibold text-default">72</span>
                <span className="text-muted-foreground">Following</span>
              </Link>
              <Link href="/profile/followers">
                <span className="mr-1 font-semibold text-default">256,6k</span>
                <span className="text-muted-foreground">Followers</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <Button>Follow</Button>
              {/* <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Add to circle
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex h-14 flex-row items-center justify-around border-b border-border">
          <Link
            href="/"
            className="current flex h-full w-full items-center justify-center text-inherit"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
              <div className="relative flex h-full items-center justify-center text-base font-semibold text-sm">
                Posts
                <div className="absolute bottom-0 h-1 w-full min-w-[56px] rounded-full bg-primary" />
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="current flex h-full w-full items-center justify-center text-inherit"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
              <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
                Replies
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="current flex h-full w-full items-center justify-center text-inherit"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
              <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
                Media
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
