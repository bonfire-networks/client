import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {

  return (<div className="p-6">
    <div className="flex items-center gap-6">
      <Image src="/profile.png" alt="Profile" className="rounded-full" width={80} height={80} />
      <div className="flex flex-col">
          <div className="font-semibold">Ivan Minutillo</div>
          <div className="text-sm text-muted-foreground">@ivanminutillo</div>
        <Button className="mt-2" size="sm" variant="outline">Remove Image</Button>
      </div>
    </div>
    <Separator className="my-6" />
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-muted-foreground">Display Name</div>
          <Input value="Ivan Minutillo" placeholder="Edit your display name" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-muted-foreground">Bio</div>
          <Textarea value="Explore territories" placeholder="Edit your bio" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-muted-foreground">Location</div>
          <Input value="" placeholder="Edit your location" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-muted-foreground">Website</div>
          <Input value="" placeholder="Edit your website" />
        </div>
      </div>
      <Button>Save</Button>
    </div>
  </div>);
}

