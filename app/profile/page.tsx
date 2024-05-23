'use client';
import ProfileHero from "@/components/profileHero";
import Activity from "@/components/activity";
import { usePageTitle } from '@/contexts/pageMetadata';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { setPageTitle, setShowBackButton } = usePageTitle();
  useEffect(() => {
    setPageTitle('Profile');
    setShowBackButton(true);
  }, [setPageTitle]);

  return (
    <div>
      <ProfileHero />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </div>
  );
}
