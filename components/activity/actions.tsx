import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Flame,
  RefreshCcw,
  Bookmark,
  Ellipsis,
} from "lucide-react";

export const Actions = () => {
  return (
    <div className="flex w-full items-start justify-between">
      <Button variant={"ghost"} size={"icon"}>
        <MessageCircle className="w-5 h-5 text-muted-foreground/70" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Flame className="w-5 h-5 text-muted-foreground/70" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <RefreshCcw className="w-5 h-5 text-muted-foreground/70" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Bookmark className="w-5 h-5 text-muted-foreground/70" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Ellipsis className="w-5 h-5 text-muted-foreground/70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Copy link to post</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Flag this post</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Mute @sujiyan</DropdownMenuItem>
          <DropdownMenuItem>Report @sujiyan</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
