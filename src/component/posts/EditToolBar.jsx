import * as React from "react";

export const EditorToolbar = () => {
    const toolbarItems = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d328f3a2b8dd81ceb29f0c8f081b9c31d44f9e897b3cf7abfe0f7f42f1c4b48b?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d", alt: "Bold text" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c28f224f7d4681d3202c2d81d8a0eb9a119e3f0b9486569f49e09607a54f96ed?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d", alt: "Italic text" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e721ed6990c83eeb54dcfc5b8a5f9e65baff0e7f3fd685cbc887c4d10d61c03?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d", alt: "Underline text" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b22ad3ec52c7a7a1deb8f0dc3952b4ad8cfccf01e255867a46dffea374502b0f?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d", alt: "Text color" }
    ];

    return (
        <div className="flex gap-3 justify-center items-center self-stretch my-auto rounded">
            {toolbarItems.map((item, index) => (
                <img
                    key={index}
                    loading="lazy"
                    src={item.src}
                    alt={item.alt}
                    className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                    role="button"
                    tabIndex={0}
                />
            ))}
        </div>
    );
};