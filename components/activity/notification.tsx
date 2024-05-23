import Image from "next/image";
import { Flame, RefreshCcw, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Notification = ({ type }: { type: string }) => {
    switch (type) {
      case 'like':
        return (
        <div className="relative">
        <div className="relative cursor-pointer p-4 hover:bg-accent/50 border-b border-border">
          <div className="relative flex flex-col">
            <div className="relative gap-2 text-sm flex">
              <span className="relative h-min w-auto">
                <div className="flex w-[55.5px] shrink-0 flex-row justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/30 text-red-500">
                    <div className="translate-y-[-1px] scale-[0.84]">
                      <Flame />
                    </div>
                  </div>
                </div>
              </span>
              <div className="relative w-full min-w-0">
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex min-w-0 flex-1 shrink flex-row items-baseline gap-1">
                    <span className="relative h-min w-auto">
                      <Image
                        src="/profile.png"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full object-cover mr-2 relative border-border border shrink-0 aspect-square"
                      />
                      <div className="flex mt-2 min-w-0 gap-1 text-base flex-row items-center">
                        <span className="!block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap break-words hover:underline  font-semibold">
                          Suji Yan
                        </span>
                        <span>liked your post</span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="flex text-muted-foreground flex-col whitespace-pre-wrap break-words pb-2 text-sm leading-5 tracking-normal">
                  <div>
                    My 7yo hit the game winning shot in triple OT in his
                    basketball game today and immediately ran across the court
                    and jumped into my arms. It was a peak parenting experience.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
      case 'boost':
        return (
        <div className="relative">
        <div className="relative cursor-pointer p-4 hover:bg-accent/50 border-b border-border">
          <div className="relative flex flex-col">
            <div className="relative gap-2 text-sm flex">
              <span className="relative h-min w-auto">
                <div className="flex w-[55.5px] shrink-0 flex-row justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/30 text-green-500">
                    <div className="translate-y-[-1px] scale-[0.84]">
                      <RefreshCcw className="w-4 h-4"/>
                    </div>
                  </div>
                </div>
              </span>
              <div className="relative w-full min-w-0">
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex min-w-0 flex-1 shrink flex-row items-baseline gap-1">
                    <span className="relative h-min w-auto">
                      <Image
                        src="/profile.png"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full object-cover mr-2 relative border-border border shrink-0 aspect-square"
                      />
                      <div className="flex mt-2 min-w-0 gap-1 text-base flex-row items-center">
                        <span className="!block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap break-words hover:underline  font-semibold">
                          Suji Yan
                        </span>
                        <span>boosted your post</span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="flex text-muted-foreground flex-col whitespace-pre-wrap break-words pb-2 text-sm leading-5 tracking-normal">
                  <div>
                    My 7yo hit the game winning shot in triple OT in his
                    basketball game today and immediately ran across the court
                    and jumped into my arms. It was a peak parenting experience.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
      case 'follow':
        return (
          <div className="relative">
          <div className="relative items-start gap-6 justify-between flex cursor-pointer p-4 hover:bg-accent/50 border-b border-border">
            <div className="relative flex flex-col">
              <div className="relative gap-2 text-sm flex">
                <span className="relative h-min w-auto">
                  <div className="flex w-[55.5px] shrink-0 flex-row justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/30 text-blue-500">
                      <div className="translate-y-[-1px] scale-[0.84]">
                        <UserRoundPlus className="w-4 h-4"/>
                      </div>
                    </div>
                  </div>
                </span>
                <div className="relative w-full min-w-0">
                  <div className="flex flex-row justify-between gap-2">
                    <div className="flex min-w-0 flex-1 shrink flex-row items-baseline gap-1">
                      <span className="relative h-min w-auto">
                        <Image
                          src="/profile.png"
                          alt="Profile"
                          width={40}
                          height={40}
                          className="rounded-full object-cover mr-2 relative border-border border shrink-0 aspect-square"
                        />
                        <div className="flex mt-2 min-w-0 gap-1 text-base flex-row items-center">
                          <span className="!block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap break-words hover:underline  font-semibold">
                            Suji Yan
                          </span>
                          <span>followed you</span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex text-muted-foreground flex-col whitespace-pre-wrap break-words pb-2 text-sm leading-5 tracking-normal">
                    <div>
                      My 7yo hit the game winning shot in triple OT in his
                      basketball game today and immediately ran across the court
                      and jumped into my arms. It was a peak parenting experience.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline">Follow</Button>
          </div>
        </div>);
      default:
        return <h1>Hello world!</h1>;
    }
  };

