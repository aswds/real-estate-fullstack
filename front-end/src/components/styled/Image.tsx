import { ComponentProps, useState } from "react";
import Loader from "./Loader/Loader";

function Image(imageProps: ComponentProps<"img">) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {/* ${isLoading ? `opacity-100` : `opacity-0`} */}
      <div
        className={`absolute z-10 ${isLoading ? `bg-black` : `bg-transparent `}  transition-all duration-500 size-full flex items-center justify-center `}
      >
        <div className={`${isLoading ? `` : `hidden`}`}>
          <Loader />
        </div>
      </div>
      <div className="absolute size-full ">
        <img
          decoding="async"
          loading="lazy"
          className={` size-full object-cover  `}
          {...imageProps}
          onLoad={() => {
            setIsLoading(false);
          }}
          id="project-image"
        />
      </div>
    </>
  );
}

export default Image;
