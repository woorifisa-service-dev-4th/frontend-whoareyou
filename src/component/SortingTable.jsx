import * as React from "react";

function SortingTabs() {
    return (
        <div className="flex flex-wrap items-start self-center text-2xl font-medium leading-snug whitespace-nowrap min-h-[45px] text-zinc-400 max-md:max-w-full" role="tablist">
            <button
                role="tab"
                aria-selected="true"
                className="gap-2.5 px-5 py-2.5 text-sky-700 border-b border-solid border-b-sky-700 min-h-[40px] min-w-[240px] w-[300px]">
                최신순
            </button>
            <button
                role="tab"
                aria-selected="false"
                className="gap-2.5 px-5 py-2.5 min-h-[40px] min-w-[240px] w-[300px]">
                오랜된순
            </button>
            <button
                role="tab"
                aria-selected="false"
                className="gap-2.5 px-5 py-2.5 min-h-[40px] min-w-[240px] w-[300px]">
                좋아요순
            </button>
        </div>
    );
}

export default SortingTabs;