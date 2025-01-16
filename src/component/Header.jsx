import * as React from "react";
import { createPortal } from "react-dom";
import Modal from "./ui/Modal";
import PostEditor from "./posts/PostEditor";

function Header() {

    const [openModal, open] = React.useState(false);

    return (
        <header className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 w-full leading-snug text-center bg-white border-b border-solid border-b-zinc-400 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 max-w-full w-[1300px]">
                <div className="flex flex-1 gap-1.5 text-3xl font-bold text-sky-600">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd22706289f3175776c482fcf29cfe317a5ff9562349439f62e5c661e4cdc41?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
                        className="object-contain shrink-0 w-12 aspect-square"
                        alt="Woori FISA Logo"
                    />
                    <div className="my-auto basis-auto">Woori FISA</div>
                </div>
                <div className="flex flex-1 gap-2.5 items-start text-base whitespace-nowrap text-zinc-800">
                    <button className="overflow-hidden gap-2.5 self-stretch px-7 py-3.5 rounded-xl bg-neutral-100 min-h-[48px] max-md:px-5"
                            onClick={() => open(true)}>
                        글쓰기
                    </button>
                    <button className="overflow-hidden gap-2.5 self-stretch px-7 py-3.5 bg-cyan-400 rounded-xl min-h-[48px] max-md:px-5">
                        로그인
                    </button>
                </div>
            </div>

            {openModal && createPortal(
            <Modal>
                <PostEditor />
            </Modal>,
            document.body
        )}
        </header>

    );
}

export default Header;