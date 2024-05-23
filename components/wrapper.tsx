'use client'
import { PageTitleProvider } from '@/contexts/pageMetadata';
import  Sidebar  from './sidebar';
import  PageHeader  from './pageHeader';
import Widgets from './widgets';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageTitleProvider>
          <div className="max-w-screen-lg mx-auto min-h-full">
            <div className="flex min-h-screen flex-row justify-center">
            <Sidebar />
              <main className="h-full w-full shrink-0 justify-center sm:mr-4 sm:w-[540px] lg:w-[620px]">
                <div className="h-full w-full">
                  <div className="h-full min-h-screen border-default sm:border-x">
                    <PageHeader />
                    {children}
                  </div>
                </div>
              </main>
            <Widgets />
            </div>
          </div>
        </PageTitleProvider>
  )
};

