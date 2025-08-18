import svgPaths from "./svg-va7lb458it";
import imgImage1 from "figma:asset/7eb4ccef9088806deaa1e06702501de9755a554a.png";
import imgRectangle11 from "figma:asset/93bb151b287ddd107f56828cdabcd4ace7a46937.png";

function Frame18() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
      <div
        className="bg-center bg-cover bg-no-repeat h-[100px] shrink-0 w-[97px]"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ffffff] h-10 relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-10 w-full" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-10 items-end justify-start left-[163px] p-0 top-[298px] w-[200px]">
      <Frame16 />
    </div>
  );
}

function TopLink() {
  return (
    <div
      className="h-[375px] overflow-clip relative shrink-0 w-[363px]"
      data-name="top_link"
    >
      <div
        className="absolute bg-[#d9d9d9] bg-size-[100%_100%,auto] bg-top-left h-[375px] left-0 top-0 w-[300px]"
        style={{ backgroundImage: `url('${imgRectangle11}')` }}
      />
      <Frame5 />
      <div className="absolute font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] font-normal leading-[0] left-[173px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[306px]">
        <p className="block leading-[normal] whitespace-pre">
          なまえデモテキスト
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#d9d9d9] h-[2683px] relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-11 h-[2683px] items-start justify-center px-[51px] py-[139px] relative w-full">
          {[...Array(9).keys()].map((_, i) => (
            <TopLink key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Shop() {
  return (
    <div className="relative shrink-0 size-[81px]" data-name="shop">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 81 81"
      >
        <g id="shop">
          <rect
            fill="var(--fill-0, #D9D9D9)"
            height="81"
            rx="40.5"
            width="81"
          />
          <path
            d={svgPaths.p328d9ef0}
            id="Vector"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#ffffff] h-28 relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-28 items-center justify-center px-[669px] py-4 relative w-full">
          <Shop />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#ffffff] h-14 relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-14 items-start justify-center px-[17px] py-[3px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              © 2023 New Grid Tone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full">
      <Frame30 />
      <Frame19 />
    </div>
  );
}

export default function Frame21() {
  return (
    <div className="bg-[#d9d9d9] box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full">
      <Frame18 />
      <Frame27 />
      <Frame20 />
    </div>
  );
}