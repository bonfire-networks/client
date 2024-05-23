"use client"
import * as React from 'react'
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {
  BeautifulMentionsPlugin,
  BeautifulMentionNode,
} from "lexical-beautiful-mentions";
import { Paperclip, Smile, Siren, Globe, Home, AtSign } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, MenuItem } from "./editor/menu";
import { Input } from './ui/input';
const mentionItems = {
  "@": ["Anton", "Boris", "Catherine", "Dmitri", "Elena", "Felix", "Gina"],
  "#": ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"],
  "due:": ["Today", "Tomorrow", "01-01-2023"],
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

export const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    nodes: [BeautifulMentionNode],
    onError,
  };
  const [cw, setCw] = React.useState(false)
  return (
    <div className="flex w-full items-start mt-4 gap-3">
      <Image
        src="/profile.png"
        className="w-12 h-12 rounded-full"
        alt="editor"
        width={48}
        height={48}
      />
      <div className="w-full flex flex-col gap-3 flex-1">
        {cw ? (
            <Input placeholder='Type a content warning...' />
        ) : ""}
        <div className='relative'>

          <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-32 w-full px-2 " />
            }
            placeholder={
              <div className="text-muted-foreground/70 absolute top-0 left-2">
                Enter some text...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />

          <BeautifulMentionsPlugin // 👈 add the mentions plugin
            items={mentionItems}
            menuComponent={Menu}
            menuItemComponent={MenuItem}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </LexicalComposer>
        </div>
        <div className="border-t flex items-center border-border pt-2 mt-2 justify-between">
          <div className="flex items-center text-muted-foreground gap-2">
            <Button variant={"ghost"} size={"icon"}>
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <Smile className="w-4 h-4" />
            </Button>
            <Button className={cw ? "bg-orange-500/10" : ""} onClick={() => setCw(!cw)} variant={"ghost"} size={"icon"}>
              <Siren className={cw ? "text-orange-600 w-4 h-4" : "w-4 h-4"} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <Globe className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                    <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 shrink-none text-muted-foreground" />
                        <div className="flex flex-col">
                            <div className="text-sm font-medium">Public</div>
                            <div className="text-sm text-muted-foreground ">Visible for all</div>
                        </div>
                    </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className="flex items-center gap-3">
                        <Home  className="w-4 h-4 shrink-none text-muted-foreground" />
                        <div className="flex flex-col">
                            <div className="text-sm font-medium">Local only</div>
                            <div className="text-sm text-muted-foreground ">Visible only for member of this instance</div>
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <div className="flex items-center gap-3">
                        <AtSign  className="w-4 h-4 shrink-none text-muted-foreground" />
                        <div className="flex flex-col">
                            <div className="text-sm font-medium">Mentioned only</div>
                            <div className="text-sm text-muted-foreground ">Visible mentioned users only</div>
                        </div>
                    </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button>Post</Button>
        </div>
      </div>
    </div>
  );
};
