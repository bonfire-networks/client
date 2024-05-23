"use client";
import Activity from "@/components/activity";
import Link from "next/link";
import { usePageTitle } from '@/contexts/pageMetadata';
import { useEffect } from 'react';

export default function HomePage() {
  const { setPageTitle, setShowBackButton } = usePageTitle();
  useEffect(() => {
    setPageTitle('Home');
    setShowBackButton(false);
  }, [setPageTitle]);

  return (
    <>
    <div>
        <div className="flex h-14 flex-row items-center justify-around border-b border-border">
          <Link
            href="/"
            className="current flex h-full w-full items-center justify-center text-inherit"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
              <div className="relative flex h-full items-center justify-center text-base font-semibold text-sm">
                Home
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
                Trending
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="current flex h-full w-full items-center justify-center text-inherit"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
              <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
                Local
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="current flex h-full w-full items-center justify-center text-inherit"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
              <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
                Federated
              </div>
            </div>
          </Link>
        </div>
      </div>
    <div className="fade-in">
     <Activity />
     <Activity />
     <Activity />
     <Activity />
     <Activity />
     <Activity />
     <Activity />
     <Activity />
     <Activity />
    </div>
    </>
  );
}
