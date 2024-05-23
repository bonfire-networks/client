"use client";
import Link from "next/link";
import { MessageCircle, Flame, RefreshCcw, Bookmark, Ellipsis } from "lucide-react";
import { usePageTitle } from '@/contexts/pageMetadata';
import { useEffect } from 'react';

export default function Explore() {
  const { setPageTitle, setShowBackButton } = usePageTitle();
  useEffect(() => {
    setPageTitle('Explore');
    setShowBackButton(true);
  }, [setPageTitle]);

  return (
    <div>
      <div className="flex h-14 flex-row items-center justify-around border-b border-border">
        <Link
          href="/"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-base font-semibold text-sm">
              Trending posts
              <div className="absolute bottom-0 h-1 w-full min-w-[56px] rounded-full bg-primary" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-base font-medium text-muted-foreground text-sm">
              Users
            </div>
          </div>
        </Link>
       
        
       
        
      </div>
    </div>
  );
}
