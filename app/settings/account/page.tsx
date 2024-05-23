import { Button } from "@/components/ui/button";

export default function AccountPage() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <div className="text-sm font-medium">Email</div>
          <div className="text-sm text-muted-foreground">
            ivanminutillo@gmail.com
          </div>
        </div>
        <Button variant="outline">Change email</Button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <div className="text-sm font-medium">Password</div>
          <div className="text-sm text-muted-foreground">
            **********
          </div>
        </div>
        <Button variant="outline">Change password</Button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <div className="text-sm font-medium">Account</div>
          <div className="text-sm text-muted-foreground">
            Joined 6 months ago
          </div>
        </div>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}
