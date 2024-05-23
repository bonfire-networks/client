import { Button } from "@/components/ui/button";
import { usePageTitle } from '@/contexts/pageMetadata';
import { ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Editor} from "@/components/editor"
export default function PageHeader() {
  const { pageTitle, showBackButton } = usePageTitle();
  
  return (
    <nav className="sticky top-0 z-10 bg-background flex-col border-b-0 bg-app">
      <div className="hidden sm:flex sm:px-4 h-14 flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        {showBackButton && (
            <Button variant="ghost" size="icon" className="mr-2" onClick={() => window.history.back()}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
          )}
          <h2 className="font hidden flex-row items-center text-center text-xl font-bold decoration-0 sm:flex sm:text-left">
            {pageTitle}
          </h2>
      </div>
        <div className="hidden sm:block">

        <Dialog>
          <DialogTrigger asChild><Button>Publish</Button></DialogTrigger>
          <DialogContent className="md:min-w-[640px]">
            <Editor />
          </DialogContent>
        </Dialog>

          
        </div>
      </div>
      
    </nav>
  );
}
