"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePageTitle } from '@/contexts/pageMetadata';
import { useEffect } from 'react';

export default function Settings() {
  const { setPageTitle, setShowBackButton } = usePageTitle();
  useEffect(() => {
    setPageTitle('Settings');
    setShowBackButton(true);
  }, [setPageTitle]);

  return (
    <div>
      <div className="py-6 divide-y divide-border pt-0 grid">
        <Link href="/settings/profile">
            <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
            <h3 className="text-sm">Edit your profile</h3>
            <Button variant="ghost" size="icon">
                <ChevronRight className="w-5 h-5" />
            </Button>
            </div>
        </Link>
        <Link href="/settings/account">
          <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
            <h3 className="text-sm">Manage your account</h3>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Link>
        <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
          <h3 className="text-sm">Set your preferences</h3>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
          <h3 className="text-sm">Moderate</h3>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
          <h3 className="text-sm">Manage your circles</h3>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
          <h3 className="text-sm">Define roles</h3>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
          <h3 className="text-sm">Import / Export</h3>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4 p-2 px-5 justify-between transition-all hover:bg-accent hover:text-accent-foreground">
          <h3 className="text-sm">Advanced</h3>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
