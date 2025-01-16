import * as React from "react";
import { EditorToolbar } from "./EditToolBar";

export const RichTextEditor = () => {
    const menuItems = ["File", "Edit", "View", "Insert", "Format", "Tools", "Help"];

    return (
        <div className="flex overflow-hidden flex-col justify-between w-full bg-white rounded-xl border border-solid shadow border-neutral-200 max-w-[900px] min-h-[645px] max-md:max-w-full">
            <div className="flex items-center px-6 py-3 w-full text-base leading-snug text-center whitespace-nowrap border-b bg-zinc-50 border-neutral-200 text-zinc-900 text-opacity-70 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap flex-1 shrink gap-1 items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden gap-2 self-stretch px-4 my-auto rounded-xl min-h-[44px]"
                            role="menuitem"
                            tabIndex={0}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center items-center px-8 py-2.5 w-full bg-white border border-solid border-neutral-200 min-h-[151px] max-md:px-5 max-md:max-w-full">
                <EditorToolbar />
            </div>

            <div className="flex overflow-hidden flex-col flex-1 px-16 pt-8 w-full max-md:px-5 max-md:max-w-full" role="textbox" tabIndex={0} aria-label="Rich text editor content area">
                <div className="text-5xl font-semibold leading-[64px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
                    WYSIWYG
                </div>
                <div className="mt-6 text-2xl leading-10 text-zinc-900 text-opacity-70 max-md:max-w-full">
                    Rich Text Editor Component in Figma
                </div>
            </div>

            <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-4 w-full text-base font-medium leading-6 text-center border-t bg-zinc-50 border-neutral-200 min-h-[40px] text-zinc-900 text-opacity-70 max-md:max-w-full">
                <div className="self-stretch my-auto">0 words</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fa42f855fd7a798d2eec45101d7ae14ac7449ad7fdbc45332349d40add70f44?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
            </div>
        </div>
    );
};