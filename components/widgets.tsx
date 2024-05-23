import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Widgets() {
  return (
    <aside className="sticky top-0 hidden h-full gap-3 flex-shrink-0 flex-grow flex-col sm:flex sm:max-w-[330px] pt-3">
      <div className="hidden lg:block">
        <form>
          <Input className="h-10" placeholder="Search..." />
        </form>
      </div>
      <Card className="bg-muted-foreground/10 border-none shadow-none">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Trending now</CardTitle>
        </CardHeader>
        <CardContent className="text-base">
          <ul className="space-y-4">
            <li className="flex flex-col">
              <div className="font-semibold">
                #duckduckgo
              </div>
              <div className="text-sm text-muted-foreground">233 posts</div>
            </li>
            <li className="flex flex-col">
              <div className="font-semibold">
                #bing
              </div>
              <div className="text-sm text-muted-foreground">233 posts</div>
            </li>
            <li className="flex flex-col">
              <div className="font-semibold">
                #GitRules
              </div>
              <div className="text-sm text-muted-foreground">233 posts</div>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-muted-foreground/10 shadow-none">
        <CardHeader className="pb-3">
          <CardTitle>Participate in Bonfire</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            You can suggest new features and vote on existing ones to prioritize them.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Read more</Button>
        </CardFooter>
      </Card>
    </aside>
  );
}
