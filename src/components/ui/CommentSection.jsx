import * as React from "react";

export const CommentSection = () => {
    return (
        <section className="flex flex-col mt-10 w-full bg-white max-md:max-w-full">
            <div className="flex flex-wrap gap-8 justify-between items-start w-full leading-snug min-h-[42px] text-zinc-800 max-md:max-w-full">
                <div className="flex gap-4 items-start">
                    <h2 className="text-3xl font-bold">댓글</h2>
                    <div className="text-base">총 2개</div>
                </div>
            </div>
            <form className="flex flex-col px-20 pt-5 mt-8 w-full text-sm leading-snug whitespace-nowrap rounded-3xl bg-neutral-100 h-[216px] text-zinc-800 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full min-h-[360px] max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex gap-10 items-start w-full min-h-[40px] max-md:max-w-full">
                            <button type="submit" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                등록
                            </button>
                        </div>
                        <textarea
                            className="flex gap-2.5 mt-5 w-full bg-white rounded-3xl min-h-[98px] max-md:max-w-full p-4"
                            aria-label="댓글 작성"
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}