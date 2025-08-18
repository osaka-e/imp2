import svgPaths from "./svg-6k1d7ug5k1";

function Group() {
  return (
    <div
      className="absolute inset-[22.01%_24.32%_23.57%_25.5%]"
      data-name="Group"
    >
      <div className="absolute inset-[-4.35%_-4.36%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 44 45"
        >
          <g id="Group">
            <path
              d={svgPaths.p754f520}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.5"
            />
            <path
              d={svgPaths.p1afcb680}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-20">
      <Group />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[72px] relative shrink-0 w-20">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 72"
      >
        <g id="Frame 24">
          <path
            d={svgPaths.p3b598b00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute inset-[26.63%_25.56%_25.97%_26.21%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 36"
      >
        <g id="Group">
          <path d={svgPaths.p184e300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-20">
      <Group1 />
    </div>
  );
}

export default function Frame30() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-center px-[116px] py-0 relative size-full">
          <Frame23 />
          <Frame24 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}