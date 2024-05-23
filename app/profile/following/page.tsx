import Link from "next/link";


export default function Following() {
  return (
    <div>
      <div className="flex h-14 flex-row items-center justify-around border-b border-border">
        <Link
          href="/profile/following"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-base font-semibold text-sm">
              Following
              <div className="absolute bottom-0 h-1 w-full min-w-[56px] rounded-full bg-primary" />
            </div>
          </div>
        </Link>
        <Link
          href="/profile/followers"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-base font-medium text-muted-foreground text-sm">
              Followers
            </div>
          </div>
        </Link>
       
        
       
        
      </div>
    </div>
  )
}

