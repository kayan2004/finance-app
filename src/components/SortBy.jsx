/* eslint-disable react/prop-types */
import { useState } from "react";

const SortBy = ({ onClick }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const options = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];
  return (
    <>
      <div className=" hidden md:flex md:w-fit items-center gap-4  lg:ml-auto lg:mr-10">
        <span className="w-max">Sort by</span>
        <div
          className="relative w-fit flex border border-beige500 rounded-xl gap-3 px-4 py-3
                       "
        >
          <span className="grey900 text-[14px]">Latest</span>
          <button
            onClick={() => {
              setShowDropDown(!showDropDown);
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
          <ul
            className={`bg-white z-10 rounded-xl box-shadow left-0 p-4 top-[100%] absolute w-full ${
              showDropDown ? "grid gap-3" : "hidden"
            }`}
          >
            {options.map((option, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      onClick(option);
                    }}
                    key={index}
                  >
                    {option}
                  </li>
                  <hr></hr>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className=" md:hidden relative">
        <button
          className=""
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
        >
          <svg
            fill="none"
            height="15"
            viewBox="0 0 16 15"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.25 0h-12.5c-.33152 0-.64946.131696-.883884.366116-.23442.234421-.366116.552363-.366116.883884v12.5c0 .3315.131696.6495.366116.8839.234424.2344.552364.3661.883884.3661h12.5c.3315 0 .6495-.1317.8839-.3661s.3661-.5524.3661-.8839v-12.5c0-.331521-.1317-.649463-.3661-.883884-.2344-.23442-.5524-.366116-.8839-.366116zm-10.625 3.125h7.5c.1658 0 .3247.06585.4419.18306.1173.11721.1831.27618.1831.44194s-.0658.32473-.1831.44194c-.1172.11721-.2761.18306-.4419.18306h-7.5c-.16576 0-.32473-.06585-.44194-.18306s-.18306-.27618-.18306-.44194.06585-.32473.18306-.44194.27618-.18306.44194-.18306zm3.125 8.75h-3.125c-.16576 0-.32473-.0658-.44194-.1831-.11721-.1172-.18306-.2761-.18306-.4419s.06585-.3247.18306-.4419c.11721-.1173.27618-.1831.44194-.1831h3.125c.16576 0 .32473.0658.44194.1831.11721.1172.18306.2761.18306.4419s-.06585.3247-.18306.4419c-.11721.1173-.27618.1831-.44194.1831zm.625-3.75h-3.75c-.16576 0-.32473-.06585-.44194-.18306s-.18306-.27618-.18306-.44194.06585-.32473.18306-.44194.27618-.18306.44194-.18306h3.75c.16576 0 .32473.06585.44194.18306s.18306.27618.18306.44194-.06585.32473-.18306.44194-.27618.18306-.44194.18306zm6.0672 2.3172-1.875 1.875c-.0581.0581-.127.1042-.2029.1357-.0758.0314-.1572.0476-.2393.0476s-.1635-.0162-.2393-.0476c-.0759-.0315-.1448-.0776-.2029-.1357l-1.87499-1.875c-.11727-.1173-.18316-.2763-.18316-.4422 0-.16585.06589-.32491.18316-.44219.11728-.11727.27634-.18316.44219-.18316s.32491.06589.44219.18316l.80781.80859v-3.4914c0-.16576.0658-.32473.1831-.44194.1172-.11721.2761-.18306.4419-.18306s.3247.06585.4419.18306c.1173.11721.1831.27618.1831.44194v3.4914l.8078-.80859c.1173-.11727.2763-.18316.4422-.18316s.3249.06589.4422.18316c.1173.11728.1831.27634.1831.44219 0 .1659-.0658.3249-.1831.4422z"
              fill="#201f24"
            />
          </svg>
        </button>
        <ul
          className={`bg-white z-10 rounded-xl box-shadow p-4 top-[100%] right-0 absolute w-fit  ${
            showDropDown ? "grid gap-3" : "hidden"
          }`}
        >
          {options.map((option, index) => {
            return (
              <>
                <li
                  onClick={() => {
                    onClick(option);
                  }}
                  key={index}
                >
                  {option}
                </li>
                <hr></hr>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SortBy;
