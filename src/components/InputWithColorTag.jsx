import { useState } from "react";
import DropDownColorMenu from "./DropDownColorMenu";

const InputWithColorTag = () => {
  const [dropDownIsVisible, setDropDownIsVisible] = useState(false);
  return (
    <div className="">
      <label>Color Tag</label>
      <div
        className="w-full flex items-center border border-beige500 rounded-xl gap-3 px-4 py-3
                    relative"
      >
        <div className="w-[20px] aspect-square rounded-full bg-green"></div>
        <input
          className="w-full outline-none placeholder:text-beige500"
          type=""
        ></input>
        <button
          onClick={() => {
            setDropDownIsVisible(!dropDownIsVisible);
          }}
        >
          <svg
            fill="none"
            height="6"
            viewBox="0 0 12 6"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.3538.85375-5.00002 5c-.04644.04649-.10158.08337-.16228.10853s-.12576.03811-.19147.03811-.13077-.01295-.19147-.03811-.11585-.06204-.16228-.10853l-5.000002-5c-.070006-.069927-.11769-.159054-.137015-.256096-.019325-.097043-.009423-.197638.028453-.289049.037877-.091412.102024-.16953.18432-.224465.082297-.0549354.179044-.08421771.277994-.08413985h9.99997c.099-.00007786.1957.02920445.278.08413985.0823.054935.1465.133053.1843.224465.0379.091411.0478.192006.0285.289049-.0193.097042-.067.186169-.137.256096z"
              fill="#201f24"
            />
          </svg>
        </button>
        <DropDownColorMenu isVisible={dropDownIsVisible}></DropDownColorMenu>
      </div>
    </div>
  );
};

export default InputWithColorTag;