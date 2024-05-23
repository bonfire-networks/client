import Link from "next/link";
import Image from "next/image";
import { Actions } from "./activity/actions";

export default function Activity() {
  return (
    <div>
    <div className="relative">
      <div className="relative cursor-pointer p-4 hover:bg-accent/50 border-b border-border">
        <div className="relative flex flex-col">
          <div className="relative gap-2 text-sm flex">
            <span className="relative h-min w-auto">
              <Link href="/profile">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-2 relative border-border border shrink-0 aspect-square"
                />
              </Link>
            </span>
            <div className="relative w-full min-w-0">
              <div className="flex flex-row justify-between gap-2">
                <div className="flex min-w-0 flex-1 shrink flex-row items-baseline gap-1">
                  <span className="relative h-min w-auto">
                    <Link className="relative min-w-0" href="/profile">
                      <div className="flex min-w-0 flex-row items-center">
                        <span className="!block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap break-words hover:underline text-sm font-semibold">
                          Suji Yan
                        </span>
                      </div>
                    </Link>
                  </span>
                  <span className="relative h-min w-auto">
                    <Link
                      className="relative text-muted-foreground hover:underline"
                      href="/profile"
                    >
                      @sujiyan@bonfire.cafe
                    </Link>
                  </span>
                  <div className="text-muted-foreground">·</div>
                  <Link href="/">
                    <div className="text-muted-foreground hover:underline">
                      58min
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col whitespace-pre-wrap break-words pb-2 text-sm leading-5 tracking-normal">
                <div>
                  My 7yo hit the game winning shot in triple OT in his
                  basketball game today and immediately ran across the court
                  and jumped into my arms. It was a peak parenting
                  experience.{" "}
                </div>
              </div>
              <Actions />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

