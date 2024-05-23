"use client";
import Link from "next/link";
import { MessageCircle, Flame, RefreshCcw, Bookmark, Ellipsis } from "lucide-react";
import { usePageTitle } from '@/contexts/pageMetadata';
import { useEffect } from 'react';
import { Notification } from '@/components/activity/notification';

export default function Notifications() {
  const { setPageTitle, setShowBackButton } = usePageTitle();
  useEffect(() => {
    setPageTitle('Notifications');
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
              All
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
                  <MessageCircle className="w-5 h-5 text-muted-foreground/70" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
                  <Flame className="w-5 h-5 text-muted-foreground/70" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
            <RefreshCcw className="w-5 h-5 text-muted-foreground/70" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
            <Bookmark className="w-5 h-5 text-muted-foreground/70" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="current flex h-full w-full items-center justify-center text-inherit"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center hover:bg-foreground/5">
            <div className="relative flex h-full items-center justify-center text-muted-foreground font-medium text-sm">
            <Ellipsis className="w-5 h-5 text-muted-foreground/70" />
            </div>
          </div>
        </Link>
      </div>
      <div className="fade-in">
        <Notification type="like" />
        <Notification type="boost" />
        <Notification type="follow" />
        <Notification type="boost" />
        <Notification type="boost" />
        <Notification type="boost" />
      </div>
    </div>
  );
}
