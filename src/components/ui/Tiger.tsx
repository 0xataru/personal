'use client';

import React, { useState } from "react";

export default function Tiger() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3500);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
  };

  return (
    <div
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseLeave}
      className={`w-auto mx-auto my-8 z-10 cursor-pointer ${isAnimating ? 'tiger-animating' : ''}`}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-34 122.4 542 548.6"
        xmlSpace="preserve"
        className="overflow-visible w-[200px] tiger-svg"
      >
        <style jsx>{`
          .tiger-svg polygon,
          .tiger-svg path,
          .tiger-svg ellipse {
            opacity: 1;
            transform-origin: center;
            transform: translate(0);
            transition: transform 3.5s ease, scale 0.3s ease-in-out, opacity 0.2s ease;
          }

          .tiger-svg #left-side polygon,
          .tiger-svg #left-side path,
          .tiger-svg #left-side ellipse {
            opacity: 0;
            stroke: #fafafa;
            stroke-width: 0.5;
            animation: dash 8s ease-in-out 1 forwards;
          }

          @keyframes dash {
            to {
              opacity: 1;
              stroke-width: 0;
            }
          }

          .tiger-animating .tiger-svg #right-side polygon:nth-of-type(5n + 1),
          .tiger-animating .tiger-svg #right-side path:nth-of-type(5n + 1) {
            transform: translate(2000px, -6000px) scale(8) rotate(-180deg);
            opacity: 0.3;
          }

          .tiger-animating .tiger-svg #right-side polygon:nth-of-type(5n + 2),
          .tiger-animating .tiger-svg #right-side path:nth-of-type(5n + 2) {
            transform: translate(8000px, -6000px) scale(8) rotate(-180deg);
            opacity: 0.5;
          }

          .tiger-animating .tiger-svg #right-side polygon:nth-of-type(5n + 3),
          .tiger-animating .tiger-svg #right-side path:nth-of-type(5n + 3) {
            transform: translate(10000px, 0) scale(8) rotate(-180deg);
            opacity: 0.3;
          }

          .tiger-animating .tiger-svg #right-side polygon:nth-of-type(5n + 4),
          .tiger-animating .tiger-svg #right-side path:nth-of-type(5n + 4) {
            transform: translate(10000px, 6000px) scale(8) rotate(-180deg);
            opacity: 0.5;
          }

          .tiger-animating .tiger-svg #right-side polygon:nth-of-type(5n + 5),
          .tiger-animating .tiger-svg #right-side ellipse {
            transform: translate(0, 10000px) scale(8) rotate(-180deg);
            opacity: 0.3;
          }

          .tiger-animating .tiger-svg #left-side polygon:nth-of-type(5n + 1),
          .tiger-animating .tiger-svg #left-side path:nth-of-type(5n + 1) {
            transform: translate(-4000px, -4000px) scale(8) rotate(180deg);
            opacity: 0.3;
          }

          .tiger-animating .tiger-svg #left-side polygon:nth-of-type(5n + 2),
          .tiger-animating .tiger-svg #left-side path:nth-of-type(5n + 2) {
            transform: translate(-8000px, -1000px) scale(8) rotate(180deg);
            opacity: 0.5;
          }

          .tiger-animating .tiger-svg #left-side polygon:nth-of-type(5n + 3),
          .tiger-animating .tiger-svg #left-side path:nth-of-type(5n + 3) {
            transform: translate(-8000px, 1000px) scale(8) rotate(180deg);
            opacity: 0.3;
          }

          .tiger-animating .tiger-svg #left-side polygon:nth-of-type(5n + 4),
          .tiger-animating .tiger-svg #left-side path:nth-of-type(5n + 4) {
            transform: translate(-8000px, 5000px) scale(8) rotate(180deg);
            opacity: 0.5;
          }

          .tiger-animating .tiger-svg #left-side polygon:nth-of-type(5n + 5),
          .tiger-animating .tiger-svg #left-side ellipse {
            transform: translate(0, 9000px) scale(8) rotate(180deg);
            opacity: 0.3;
          }
        `}</style>
        <g id="left-side">
          <path
            id="XMLID_418_"
            className="fill-[#ffe475]"
            d="M165.5,362.6c-0.4-1.6-1.4-3.1-2.7-4.1c-0.1-0.8-0.8-1.6-1.9-1.3c-0.1,0-0.2,0.1-0.3,0.1
		s-0.1-0.1-0.2-0.1c-1-0.3-1.6,0.3-1.8,1.1c-1.4,1.1-2.2,2.8-2.1,4.7c0.2,3,3,4.9,5.9,4.7C165.1,367.4,166,364.9,165.5,362.6z
		 M162.5,364.5c-1.3,0.4-2.7-0.6-3-1.8c-0.2-1,0.3-1.8,1.1-2.3c0.7,0.5,1.3,1.3,1.7,2.1C162.5,363,162.9,364.4,162.5,364.5z"
          />
          <polygon
            id="XMLID_417_"
            className="fill-[#c26c47]"
            points="237,527.7 225,527.7 204,515.2 196.3,521.5 221.6,543.2 222.4,555.2 237,558.7 	"
          />
          <polygon
            id="XMLID_416_"
            className="fill-[#49312d]"
            points="196.3,521.5 184.3,505.3 184.3,517.3 204.3,541.8 211.3,541.8 218.1,553.8 232,563.1 
		230.6,575.9 191.6,584.6 237,580.8 237,558.7 221.5,554.8 221.6,543.2 	"
          />
          <polygon
            id="XMLID_415_"
            className="fill-[#49312d]"
            points="237,172.9 209.6,158.1 183.7,172.9 	"
          />
          <polygon
            id="XMLID_414_"
            className="fill-[#49312d]"
            points="220.3,244.2 190.1,264.8 147,252.8 	"
          />
          <polygon
            id="XMLID_413_"
            className="fill-[#49312d]"
            points="237,186.5 153.2,197.3 207.3,178.9 	"
          />
          <polygon
            id="XMLID_412_"
            className="fill-[#49312d]"
            points="220.3,244.2 237,219.2 237,253.1 	"
          />
          <polygon
            id="XMLID_411_"
            className="fill-[#49312d]"
            points="147,252.8 124.6,310.8 98.5,298.4 	"
          />
          <polygon
            id="XMLID_410_"
            className="fill-[#49312d]"
            points="98.2,247.2 71.4,232.6 68.4,261.7 	"
          />
          <polygon
            id="XMLID_409_"
            className="fill-[#49312d]"
            points="71.4,232.6 71.4,188.9 35.3,174.5 	"
          />
          <polygon
            id="XMLID_408_"
            className="fill-[#49312d]"
            points="124.6,310.8 124.6,347.8 101.7,347.8 	"
          />
          <polygon
            id="XMLID_407_"
            className="fill-[#49312d]"
            points="126.2,373.4 101.7,389.5 101.7,367.6 	"
          />
          <polygon
            id="XMLID_406_"
            className="fill-[#49312d]"
            points="87.7,347.8 80,317.5 65.3,368.2 	"
          />
          <polygon
            id="XMLID_405_"
            className="fill-[#49312d]"
            points="52.4,325.2 52.4,360.9 30.9,365 	"
          />
          <polygon
            id="XMLID_404_"
            className="fill-[#49312d]"
            points="135.7,410.5 114.4,401.7 120.5,426.2 	"
          />
          <polygon
            id="XMLID_403_"
            className="fill-[#49312d]"
            points="68.7,413.9 70,462.4 104,477.8 	"
          />
          <polygon
            id="XMLID_402_"
            className="fill-[#49312d]"
            points="40.6,449.1 71.7,484.5 52.4,542.5 	"
          />
          <polygon
            id="XMLID_401_"
            className="fill-[#49312d]"
            points="191.6,584.6 151.3,581.2 167,602.9 	"
          />
          <polygon
            id="XMLID_400_"
            className="fill-[#604219]"
            points="237,172.9 225,166.4 237,152.1 	"
          />
          <polygon
            id="XMLID_399_"
            className="fill-[#604219]"
            points="237,186.5 237,219.2 218.3,188.9 	"
          />
          <polygon
            id="XMLID_398_"
            className="fill-[#604219]"
            points="147,252.8 152.7,224.8 113.1,254.5 	"
          />
          <polygon
            id="XMLID_397_"
            className="fill-[#604219]"
            points="71.4,232.6 68.4,261.7 55.3,241.2 	"
          />
          <polygon
            id="XMLID_396_"
            className="fill-[#604219]"
            points="52.4,325.2 64.8,321.8 52.4,360.9 	"
          />
          <polygon
            id="XMLID_395_"
            className="fill-[#604219]"
            points="65.3,368.2 78.7,389.7 87.7,347.8 	"
          />
          <polygon
            id="XMLID_394_"
            className="fill-[#604219]"
            points="126.2,373.4 114.4,401.7 101.7,389.5 	"
          />
          <polygon
            id="XMLID_393_"
            className="fill-[#604219]"
            points="52.4,360.9 41.6,393.8 30.9,365 	"
          />
          <polygon
            id="XMLID_392_"
            className="fill-[#604219]"
            points="78.7,389.7 68.7,413.9 90.7,453.8 	"
          />
          <polygon
            id="XMLID_391_"
            className="fill-[#604219]"
            points="120,508.8 109.4,526.7 131.5,561.7 	"
          />
          <polygon
            id="XMLID_390_"
            className="fill-[#604219]"
            points="219,206.5 194.5,203.2 147,252.8 	"
          />
          <polygon
            id="XMLID_389_"
            className="fill-[#554d4d]"
            points="52.4,325.2 79.7,286.2 80,317.5 	"
          />
          <polygon
            id="XMLID_388_"
            className="fill-[#554d4d]"
            points="41.6,393.8 40.6,449.1 26.3,440.8 	"
          />
          <polygon
            id="XMLID_387_"
            className="fill-[#554d4d]"
            points="90.7,453.8 138.3,455.2 87,434.2 	"
          />
          <polygon
            id="XMLID_386_"
            className="fill-[#554d4d]"
            points="71.7,484.5 81.2,513.2 52.4,542.5 	"
          />
          <polygon
            id="XMLID_385_"
            className="fill-[#554d4d]"
            points="120,508.8 81.2,513.2 109.4,526.7 	"
          />
          <polygon
            id="XMLID_384_"
            className="fill-[#554d4d]"
            points="124.6,310.8 161.1,338.1 147.6,313.2 	"
          />
          <polygon
            id="XMLID_383_"
            className="fill-[#554d4d]"
            points="35.3,174.5 55.3,241.2 71.4,232.6 	"
          />
          <polygon
            id="XMLID_382_"
            className="fill-[#635723]"
            points="55.3,241.2 43.9,262.1 36.2,235.7 	"
          />
          <polygon
            id="XMLID_381_"
            className="fill-[#84712c]"
            points="30.9,365 41.6,393.8 26.3,440.8 	"
          />
          <polygon
            id="XMLID_380_"
            className="fill-[#84712c]"
            points="65.3,368.2 68.7,413.9 78.7,389.7 	"
          />
          <polygon
            id="XMLID_379_"
            className="fill-[#84712c]"
            points="81.2,513.2 104,477.8 120,508.8 	"
          />
          <polygon
            id="XMLID_378_"
            className="fill-[#84712c]"
            points="104,477.8 167,436.2 133,484.5 	"
          />
          <polygon
            id="XMLID_377_"
            className="fill-[#554d4d]"
            points="40.6,449.1 26.3,497.5 52.4,542.5 	"
          />
          <polygon
            id="XMLID_376_"
            className="fill-[#84712c]"
            points="113.1,254.5 98.5,298.4 79.7,286.2 	"
          />
          <polygon
            id="XMLID_375_"
            className="fill-[#947158]"
            points="147,252.8 98.5,298.4 113.1,254.5 	"
          />
          <polygon
            id="XMLID_374_"
            className="fill-[#947158]"
            points="237,219.2 218.3,188.9 220.3,244.2 	"
          />
          <polygon
            id="XMLID_373_"
            className="fill-[#947158]"
            points="142.8,517.8 171.5,519.2 175.7,540.8 	"
          />
          <polygon
            id="XMLID_372_"
            className="fill-[#c07e48]"
            points="192.6,386.6 189.3,429.2 168.3,405.5 	"
          />
          <polygon
            id="XMLID_371_"
            className="fill-[#c07e48]"
            points="213,400.4 191.2,352.4 220.3,347.8 	"
          />
          <polygon
            id="XMLID_370_"
            className="fill-[#c07e48]"
            points="213,400.4 213,475.5 198.1,453.9 	"
          />
          <polygon
            id="XMLID_369_"
            className="fill-[#947158]"
            points="198.1,453.9 180.1,477.2 213,475.5 	"
          />
          <polygon
            id="XMLID_368_"
            className="fill-[#c07e48]"
            points="180.1,477.2 184.3,505.3 213,475.5 	"
          />
          <polygon
            id="XMLID_367_"
            className="fill-[#c98777]"
            points="168.3,405.5 167,436.2 189.3,429.2 	"
          />
          <polygon
            id="XMLID_366_"
            className="fill-[#df9126]"
            points="237,317.5 220.3,347.8 237,383.5 	"
          />
          <polygon
            id="XMLID_365_"
            className="fill-[#df9126]"
            points="167,436.2 180.1,477.2 133,484.5 	"
          />
          <polygon
            id="XMLID_364_"
            className="fill-[#df9126]"
            points="189.3,429.2 198.1,453.9 167,436.2 	"
          />
          <polygon
            id="XMLID_363_"
            className="fill-[#df9126]"
            points="192.6,386.6 213,400.4 189.3,429.2 	"
          />
          <polygon
            id="XMLID_362_"
            className="fill-[#f68c47]"
            points="213,400.4 191.2,352.4 192.6,386.6 	"
          />
          <polygon
            id="XMLID_361_"
            className="fill-[#f68c47]"
            points="167,436.2 198.1,453.9 180.1,477.2 	"
          />
          <polygon
            id="XMLID_360_"
            className="fill-[#f68c47]"
            points="135.7,410.5 153.3,391 168.3,405.5 	"
          />
          <polygon
            id="XMLID_359_"
            className="fill-[#f68c47]"
            points="180.1,477.2 171.5,519.2 184.3,505.3 	"
          />
          <polygon
            id="XMLID_358_"
            className="fill-[#fbad23]"
            points="153.3,391 126.2,373.4 135.7,410.5 	"
          />
          <polygon
            id="XMLID_357_"
            className="fill-[#fbad23]"
            points="180.1,477.2 142.8,517.8 133,484.5 	"
          />
          <polygon
            id="XMLID_356_"
            className="fill-[#fbad23]"
            points="220.3,347.8 205.8,301.8 191.2,352.4 	"
          />
          <polygon
            id="XMLID_355_"
            className="fill-[#fbad23]"
            points="220.3,347.8 223,310.5 237,317.5 	"
          />
          <polygon
            id="XMLID_354_"
            className="fill-[#fbad23]"
            points="168.3,405.5 167,436.2 135.7,410.5 	"
          />
          <polygon
            id="XMLID_353_"
            className="fill-[#f8b26c]"
            points="180.1,477.2 171.5,519.2 142.8,517.8 	"
          />
          <polygon
            id="XMLID_352_"
            className="fill-[#f8b26c]"
            points="167,436.2 135.7,410.5 138.3,455.1 	"
          />
          <polygon
            id="XMLID_351_"
            className="fill-[#f8b26c]"
            points="126.2,373.4 124.6,347.8 101.7,347.8 	"
          />
          <polygon
            id="XMLID_350_"
            className="fill-[#f8b26c]"
            points="205.8,301.8 237,317.5 237,253.1 	"
          />
          <polygon
            id="XMLID_349_"
            className="fill-[#eec075]"
            points="237,253.1 220.3,244.2 205.8,301.8 	"
          />
          <polygon
            id="XMLID_348_"
            className="fill-[#eec075]"
            points="213,475.5 204,515.2 196.3,521.5 184.3,505.3 	"
          />
          <polygon
            id="XMLID_347_"
            className="fill-[#eec075]"
            points="126.2,373.4 135.7,410.5 114.4,401.7 	"
          />
          <polygon
            id="XMLID_346_"
            className="fill-[#eec075]"
            points="194.5,203.2 152.7,224.8 147,252.8 	"
          />
          <polygon
            id="XMLID_345_"
            className="fill-[#eec075]"
            points="98.5,298.4 80,317.5 79.7,286.2 	"
          />
          <polygon
            id="XMLID_344_"
            className="fill-[#f6dc8f]"
            points="220.3,244.2 205.8,301.8 190.1,264.8 	"
          />
          <polygon
            id="XMLID_343_"
            className="fill-[#f6dc8f]"
            points="98.5,298.4 124.6,310.8 80,317.5 	"
          />
          <polygon
            id="XMLID_342_"
            className="fill-[#f6dc8f]"
            points="101.7,347.8 101.7,389.5 87.7,347.8 	"
          />
          <polygon
            id="XMLID_341_"
            className="fill-[#f6dc8f]"
            points="80,317.5 52,362.3 64.8,321.8 	"
          />
          <polygon
            id="XMLID_340_"
            className="fill-[#f6dc8f]"
            points="147,252.8 219,206.5 220.3,244.2 	"
          />
          <path id="XMLID_339_" className="fill-[#f6dc8f]" d="M142.8,517.8" />
          <polygon
            id="XMLID_338_"
            className="fill-[#f6dc8f]"
            points="131.5,561.7 175.7,540.8 142.8,517.8 	"
          />
          <polygon
            id="XMLID_337_"
            className="fill-[#f6dc8f]"
            points="79.7,286.2 42.2,296.3 52.4,325.2 	"
          />
          <polygon
            id="XMLID_336_"
            className="fill-[#f6dc8f]"
            points="98.2,247.2 113.1,254.5 68.4,261.7 	"
          />
          <polygon
            id="XMLID_335_"
            className="fill-[#ead4b5]"
            points="101.7,347.8 80,317.5 87.7,347.8 	"
          />
          <polygon
            id="XMLID_334_"
            className="fill-[#ead4b5]"
            points="189.3,291.8 191.2,352.4 171.3,358 	"
          />
          <polygon
            id="XMLID_333_"
            className="fill-[#ead4b5]"
            points="101.7,389.5 78.7,389.7 87.7,347.8 	"
          />
          <polygon
            id="XMLID_332_"
            className="fill-[#ead4b5]"
            points="135.7,410.5 138.3,455.1 120.5,426.2 	"
          />
          <polygon
            id="XMLID_331_"
            className="fill-[#ead4b5]"
            points="-6,550.2 52.4,542.5 26.3,497.5 	"
          />
          <polygon
            id="XMLID_330_"
            className="fill-[#ead4b5]"
            points="109.4,526.7 78.5,560.9 81.2,513.2 	"
          />
          <polygon
            id="XMLID_329_"
            className="fill-[#ead4b5]"
            points="79.7,286.2 79.4,285.6 68.4,261.7 42.2,296.3 	"
          />
          <polygon
            id="XMLID_328_"
            className="fill-[#ead4b5]"
            points="52.4,325.2 8.8,340 30.9,365 	"
          />
          <polygon
            id="XMLID_327_"
            className="fill-[#eaddce]"
            points="42.2,296.3 52.4,325.2 8.8,340 	"
          />
          <polygon
            id="XMLID_326_"
            className="fill-[#eaddce]"
            points="101.7,347.8 80,317.5 124.6,310.8 	"
          />
          <polygon
            id="XMLID_325_"
            className="fill-[#eaddce]"
            points="136.1,357 126.2,373.4 124.6,347.8 	"
          />
          <polygon
            id="XMLID_324_"
            className="fill-[#eaddce]"
            points="171.3,358 191.2,352.4 192.6,386.6 	"
          />
          <polygon
            id="XMLID_323_"
            className="fill-[#eaddce]"
            points="171.3,358 161.1,338.1 149.8,345.1 	"
          />
          <polygon
            id="XMLID_322_"
            className="fill-[#eaddce]"
            points="189.3,291.8 190.1,264.8 205.8,301.8 	"
          />
          <polygon
            id="XMLID_321_"
            className="fill-[#eaddce]"
            points="147,252.8 147.6,313.2 124.6,310.8 	"
          />
          <polygon
            id="XMLID_320_"
            className="fill-[#eaddce]"
            points="219,206.5 153.2,197.3 218.3,188.9 	"
          />
          <polygon
            id="XMLID_319_"
            className="fill-[#eaddce]"
            points="133,484.5 142.8,517.8 120,508.8 	"
          />
          <polygon
            id="XMLID_318_"
            className="fill-[#eaddce]"
            points="26.3,440.8 26.3,497.5 -34,487.7 	"
          />
          <polygon
            id="XMLID_317_"
            className="fill-[#fef8cc]"
            points="147,252.8 177.9,283.3 147.6,313.2 	"
          />
          <polygon
            id="XMLID_316_"
            className="fill-[#fef8cc]"
            points="190.1,264.8 177.9,283.3 189.3,291.8 	"
          />
          <polygon
            id="XMLID_315_"
            className="fill-[#fef8cc]"
            points="189.3,291.8 205.8,301.8 191.2,352.4 	"
          />
          <polygon
            id="XMLID_314_"
            className="fill-[#fef8cc]"
            points="161.1,299.9 161.1,338.1 173.1,314.9 	"
          />
          <polygon
            id="XMLID_313_"
            className="fill-[#fef8cc]"
            points="8.8,340 30.9,365 -6.6,382.5 	"
          />
          <polygon
            id="XMLID_312_"
            className="fill-[#fef8cc]"
            points="-6.6,382.5 26.3,440.8 -24.7,444 	"
          />
          <polygon
            id="XMLID_311_"
            className="fill-[#fef8cc]"
            points="101.7,389.5 87,434.2 78.7,389.7 	"
          />
          <polygon
            id="XMLID_310_"
            className="fill-[#fef8cc]"
            points="87,434.2 114.4,401.7 120.5,426.2 	"
          />
          <polygon
            id="XMLID_309_"
            className="fill-[#fef8cc]"
            points="68.7,413.9 41.6,393.8 40.6,449.1 	"
          />
          <polygon
            id="XMLID_308_"
            className="fill-[#fef8cc]"
            points="133,484.5 104,477.8 120,508.8 	"
          />
          <polygon
            id="XMLID_307_"
            className="fill-[#fefdf4]"
            points="120,508.8 142.8,517.8 131.5,561.7 	"
          />
          <polygon
            id="XMLID_306_"
            className="fill-[#e9e9ea]"
            points="30.9,365 26.3,440.8 -6.6,382.5 	"
          />
          <polygon
            id="XMLID_305_"
            className="fill-[#e9e9ea]"
            points="41.6,393.8 65.3,368.2 68.7,413.9 	"
          />
          <polygon
            id="XMLID_304_"
            className="fill-[#e9e9ea]"
            points="68.7,413.9 70,462.4 40.6,449.1 	"
          />
          <polygon
            id="XMLID_303_"
            className="fill-[#e9e9ea]"
            points="114.4,401.7 101.7,389.5 87,434.2 	"
          />
          <polygon
            id="XMLID_302_"
            className="fill-[#e9e9ea]"
            points="120.5,426.2 138.3,455.1 87,434.2 	"
          />
          <polygon
            id="XMLID_301_"
            className="fill-[#e9e9ea]"
            points="153.3,391 171.8,383.9 168.3,405.5 	"
          />
          <polygon
            id="XMLID_300_"
            className="fill-[#e9e9ea]"
            points="124.6,310.8 138.3,335.8 124.6,347.8 	"
          />
          <polygon
            id="XMLID_299_"
            className="fill-[#e9e9ea]"
            points="190.1,264.8 147,252.8 177.9,283.3 	"
          />
          <polygon
            id="XMLID_298_"
            className="fill-[#e9e9ea]"
            points="-14.6,443.4 -6.6,466.4 26.3,440.8 	"
          />
          <polygon
            id="XMLID_297_"
            className="fill-[#e9e9ea]"
            points="184.3,505.3 184.3,517.3 204.3,541.8 175.7,540.8 171.5,519.2 	"
          />
          <polygon
            id="XMLID_296_"
            className="fill-[#bbbcac]"
            points="138.3,455.1 104,477.8 90.7,453.8 	"
          />
          <polygon
            id="XMLID_295_"
            className="fill-[#bbbcac]"
            points="104,477.8 71.7,484.5 40.6,449.1 	"
          />
          <polygon
            id="XMLID_294_"
            className="fill-[#bbbcac]"
            points="26.3,497.5 -6,550.2 -14.6,490.8 	"
          />
          <polygon
            id="XMLID_293_"
            className="fill-[#bbbcac]"
            points="65.3,368.2 52,362.3 80,317.5 	"
          />
          <polygon
            id="XMLID_292_"
            className="fill-[#bbbcac]"
            points="161.1,338.1 173.1,314.9 171.3,358 	"
          />
          <polygon
            id="XMLID_291_"
            className="fill-[#bbbcac]"
            points="149.8,345.1 138.3,335.8 124.6,347.8 	"
          />
          <polygon
            id="XMLID_290_"
            className="fill-[#bbbcac]"
            points="173.1,314.9 189.3,291.8 161.1,299.9 	"
          />
          <polygon
            id="XMLID_289_"
            className="fill-[#bbbcac]"
            points="40.6,449.1 26.3,440.8 26.3,497.5 	"
          />
          <polygon
            id="XMLID_288_"
            className="fill-[#bbbcac]"
            points="81.2,513.2 78.5,560.9 52.4,542.5 	"
          />
          <polygon
            id="XMLID_287_"
            className="fill-[#bbbcac]"
            points="52.4,542.5 9,584.6 9,548.2 	"
          />
          <polygon
            id="XMLID_286_"
            className="fill-[#bbbcac]"
            points="175.7,540.8 151.3,581.2 191.6,584.6 	"
          />
          <polygon
            id="XMLID_285_"
            className="fill-[#bbbcac]"
            points="204.3,541.8 191.6,584.6 218.1,553.8 211.3,541.8 	"
          />
          <polygon
            id="XMLID_284_"
            className="fill-[#bbbcac]"
            points="192.2,596.7 185.5,642.5 237,611.3 	"
          />
          <polygon
            id="XMLID_283_"
            className="fill-[#bbbcac]"
            points="237,611.3 237,671 219.4,647.8 	"
          />
          <polygon
            id="XMLID_282_"
            className="fill-[#c9c0ad]"
            points="189.3,291.8 171.3,358 173.1,314.9 	"
          />
          <polygon
            id="XMLID_281_"
            className="fill-[#c9c0ad]"
            points="101.7,347.8 126.2,373.4 101.7,367.6 	"
          />
          <polygon
            id="XMLID_280_"
            className="fill-[#c9c0ad]"
            points="52,362.3 41.6,393.8 65.3,368.2 	"
          />
          <polygon
            id="XMLID_279_"
            className="fill-[#c9c0ad]"
            points="104,477.8 81.2,513.2 71.7,484.5 	"
          />
          <polygon
            id="XMLID_278_"
            className="fill-[#c9c0ad]"
            points="218.1,553.8 232,563.1 230.6,575.9 191.6,584.6 	"
          />
          <polygon
            id="XMLID_277_"
            className="fill-[#c9c0ad]"
            points="237,611.3 210.7,665.8 198.1,634.9 	"
          />
          <polygon
            id="XMLID_276_"
            className="fill-[#c9c0ad]"
            points="192.2,596.7 185.5,642.5 163.6,611.3 	"
          />
          <polygon
            id="XMLID_275_"
            className="fill-[#c9c0ad]"
            points="109.4,526.7 131.5,561.7 78.5,560.9 	"
          />
          <polygon
            id="XMLID_274_"
            className="fill-[#c9c0ad]"
            points="52.4,542.5 43.2,584.2 78.5,560.9 	"
          />
          <polygon
            id="XMLID_273_"
            className="fill-[#d3c8c2]"
            points="175.7,540.8 151.3,581.2 131.5,561.7 	"
          />
          <polygon
            id="XMLID_272_"
            className="fill-[#d3c8c2]"
            points="175.7,540.8 204.3,541.8 191.6,584.6 	"
          />
          <polygon
            id="XMLID_271_"
            className="fill-[#afa49f]"
            points="192.2,596.7 237,580.8 237,611.3 	"
          />
          <polygon
            id="XMLID_270_"
            className="fill-[#afa49f]"
            points="192.2,596.7 191.6,584.6 138.8,623.9 	"
          />
          <polygon
            id="XMLID_269_"
            className="fill-[#afa49f]"
            points="131.5,561.7 70.7,602.4 78.5,560.9 	"
          />
          <polygon
            id="XMLID_268_"
            className="fill-[#afa49f]"
            points="52.4,542.5 46.8,568.2 9,584.6 	"
          />
          <polygon
            id="XMLID_267_"
            className="fill-[#8d7d71]"
            points="192.2,596.7 191.6,584.6 237,580.8 	"
          />
          <polygon
            id="XMLID_266_"
            className="fill-[#8d7d71]"
            points="167,602.9 151.3,581.2 138.8,623.9 	"
          />
          <polygon
            id="XMLID_265_"
            className="fill-[#8d7d71]"
            points="131.5,561.7 135.6,596.1 70.7,602.4 	"
          />
          <polygon
            id="XMLID_264_"
            className="fill-[#8d7d71]"
            points="68.4,261.7 43.9,262.1 55.2,279.2 	"
          />
          <polygon
            id="XMLID_263_"
            className="fill-[#8d7d71]"
            points="55.3,241.2 4.7,206.5 35.3,174.5 	"
          />
          <polygon
            id="XMLID_262_"
            className="fill-[#8d7d71]"
            points="35.3,174.5 50.4,122.4 71.4,188.9 	"
          />
          <polygon
            id="XMLID_261_"
            className="fill-[#8d7d71]"
            points="50.4,122.4 101.7,148.2 76.5,128.2 	"
          />
          <polygon
            id="XMLID_260_"
            className="fill-[#fef8cc]"
            points="42.2,296.3 -3.8,335.8 8.8,340 	"
          />
          <polygon
            id="XMLID_259_"
            className="fill-[#b5ad6e]"
            points="151.3,581.2 131.5,561.7 138.8,623.9 	"
          />
          <polygon
            id="XMLID_258_"
            className="fill-[#787fa0]"
            points="124.6,310.8 138.3,335.8 161.1,338.1 	"
          />
          <polygon
            id="XMLID_257_"
            className="fill-[#787fa0]"
            points="161.1,299.9 161.1,338.1 147.6,313.2 	"
          />
          <polygon
            id="XMLID_256_"
            className="fill-[#787fa0]"
            points="189.3,291.8 177.9,283.3 161.1,299.9 	"
          />
          <polygon
            id="XMLID_255_"
            className="fill-[#787fa0]"
            points="55.3,241.2 68.4,261.7 43.9,262.1 	"
          />
          <polygon
            id="XMLID_254_"
            className="fill-[#787fa0]"
            points="71.4,188.9 98.2,247.2 71.4,232.6 	"
          />
          <polygon
            id="XMLID_253_"
            className="fill-[#bbbcac]"
            points="136.1,357 153.3,391 126.2,373.4 	"
          />
          <polygon
            id="XMLID_252_"
            className="fill-[#afa49f]"
            points="153.3,391 171.8,383.9 149.6,383.6 	"
          />
          <polygon
            id="XMLID_251_"
            className="fill-[#afa49f]"
            points="171.8,383.9 177.9,398 168.3,405.5 	"
          />
          <polygon
            id="XMLID_250_"
            className="fill-[#ead4b5]"
            points="161.1,338.1 138.3,335.8 149.8,345.1 	"
          />
          <polygon
            id="XMLID_243_"
            className="fill-[#f68c47]"
            points="223,310.5 205.8,301.8 220.3,347.8 	"
          />
          <polygon
            id="XMLID_242_"
            className="fill-[#c9c0ad]"
            points="204,515.2 237,501.1 225,527.7 	"
          />
          <polygon
            id="XMLID_241_"
            className="fill-[#afa49f]"
            points="225,527.7 237,501.1 237,527.7 	"
          />
          <polygon
            id="XMLID_240_"
            className="fill-[#f8b26c]"
            points="237,501.1 213,475.5 204,515.2 	"
          />
          <polygon
            id="XMLID_239_"
            className="fill-[#e1afa3]"
            points="213,475.5 237,436.2 237,501.1 	"
          />
          <polygon
            id="XMLID_238_"
            className="fill-[#d69385]"
            points="213,475.5 213,400.4 237,436.2 	"
          />
          <polygon
            id="XMLID_237_"
            className="fill-[#d69385]"
            points="213,400.4 198.1,453.9 189.3,429.2 	"
          />
          <polygon
            id="XMLID_236_"
            className="fill-[#c98777]"
            points="213,400.4 237,383.5 237,417.1 	"
          />
          <polygon
            id="XMLID_235_"
            className="fill-[#c69849]"
            points="213,400.4 220.3,347.8 237,383.5 	"
          />
          <polygon
            id="XMLID_234_"
            className="fill-[#e1afa3]"
            points="213,400.4 237,436.2 237,417.1 	"
          />
          <polygon
            id="XMLID_233_"
            className="fill-[#f8b26c]"
            points="153.2,197.3 136.9,174 124.6,207.8 	"
          />
          <polygon
            id="XMLID_232_"
            className="fill-[#faa64c]"
            points="153.2,197.3 183.7,172.9 136.9,174 	"
          />
          <polygon
            id="XMLID_231_"
            className="fill-[#faa64c]"
            points="183.7,172.9 237,186.5 237,172.9 	"
          />
          <polygon
            id="XMLID_230_"
            className="fill-[#f8b26c]"
            points="153.2,197.3 207.3,178.9 183.7,172.9 	"
          />
          <polygon
            id="XMLID_229_"
            className="fill-[#ffd386]"
            points="183.7,172.9 209.6,158.1 136.9,174 	"
          />
          <polygon
            id="XMLID_228_"
            className="fill-[#ffd386]"
            points="209.6,158.1 237,152.1 225,166.4 	"
          />
          <polygon
            id="XMLID_227_"
            className="fill-[#c07e48]"
            points="237,152.1 177.9,144.8 237,134.9 	"
          />
          <polygon
            id="XMLID_226_"
            className="fill-[#947158]"
            points="237,152.1 136.9,174 177.9,144.8 	"
          />
          <polygon
            id="XMLID_225_"
            className="fill-[#e9e9ea]"
            points="152.7,224.8 153.2,197.3 194.5,203.2 	"
          />
          <polygon
            id="XMLID_224_"
            className="fill-[#ffd386]"
            points="113.1,254.5 79.7,286.2 68.4,261.7 	"
          />
          <polygon
            id="XMLID_223_"
            className="fill-[#ffd386]"
            points="113.1,254.5 124.6,207.8 98.2,247.2 	"
          />
          <polygon
            id="XMLID_222_"
            className="fill-[#eaddce]"
            points="153.2,197.3 113.1,254.5 124.6,207.8 	"
          />
          <polygon
            id="XMLID_221_"
            className="fill-[#fef8cc]"
            points="152.7,224.8 142,213.3 153.2,197.3 	"
          />
          <polygon
            id="XMLID_220_"
            className="fill-[#fef8cc]"
            points="152.7,224.8 133.9,224.8 113.1,254.5 	"
          />
          <polygon
            id="XMLID_219_"
            className="fill-[#84712c]"
            points="152.7,224.8 142,213.3 133.9,224.8 	"
          />
          <polygon
            id="XMLID_218_"
            className="fill-[#ffd386]"
            points="124.6,207.8 101.7,148.2 136.9,174 	"
          />
          <polygon
            id="XMLID_217_"
            className="fill-[#d69385]"
            points="35.3,174.5 14.7,140.8 50.4,122.4 	"
          />
          <polygon
            id="XMLID_216_"
            className="fill-[#c98777]"
            points="35.3,174.5 14.7,140.8 4.7,206.5 	"
          />
          <polygon
            id="XMLID_215_"
            className="fill-[#ead4b5]"
            points="101.7,148.2 71.4,188.9 50.4,122.4 	"
          />
          <polygon
            id="XMLID_214_"
            className="fill-[#eaddce]"
            points="101.7,148.2 124.6,207.8 71.4,188.9 	"
          />
          <polygon
            id="XMLID_213_"
            className="fill-[#bbbcac]"
            points="124.6,207.8 98.2,247.2 71.4,188.9 	"
          />
          <path
            id="XMLID_249_"
            className="fill-[#49312d]"
            d="M165.6,353.1l-15.8-8l-25.2,2.8l11.5,9.1c0,0-8.2,34.5,35.7,27l6.2,14.1l14.7-11.5L170.6,357
		L165.6,353.1z"
          />
          <path
            id="XMLID_248_"
            className="fill-[#84712c]"
            d="M157.5,361.1c7,0,12.9,4,15.2,9.7c0.6-1.6,1-3.2,1-5c0-8.1-7.2-14.7-16.2-14.7
		c-8.9,0-16.2,6.6-16.2,14.7c0,1.8,0.4,3.4,1,5C144.6,365.1,150.5,361.1,157.5,361.1z"
          />
          <path
            id="XMLID_247_"
            className="fill-[#d1c76d]"
            d="M157.5,380.4c7,0,12.9-4,15.2-9.7c-2.3-5.6-8.2-9.7-15.2-9.7s-12.9,4-15.2,9.7
		C144.6,376.4,150.5,380.4,157.5,380.4z"
          />
          <ellipse
            id="XMLID_245_"
            className="fill-[#56481c]"
            cx="161.1"
            cy="362.3"
            rx="4.6"
            ry="5.3"
          />
        </g>
        <g id="right-side">
          <path
            id="XMLID_209_"
            className="fill-[#ffe475]"
            d="M311.6,367.6c2.9,0.2,5.7-1.7,5.9-4.7c0.1-1.9-0.7-3.6-2.1-4.7c-0.2-0.8-0.8-1.4-1.8-1.1
		c-0.1,0-0.1,0.1-0.2,0.1s-0.2-0.1-0.3-0.1c-1-0.2-1.7,0.5-1.9,1.3c-1.3,1.1-2.3,2.5-2.7,4.1C308,364.9,308.9,367.4,311.6,367.6z
		 M311.7,362.5c0.4-0.8,1-1.5,1.7-2.1c0.7,0.5,1.3,1.3,1.1,2.3c-0.3,1.2-1.7,2.3-3,1.8C311,364.4,311.5,363,311.7,362.5z"
          />
          <polygon
            id="XMLID_208_"
            className="fill-[#c26c47]"
            points="237,527.7 249,527.7 270,515.2 277.6,521.5 252.4,543.2 251.6,555.2 237,558.7 	"
          />
          <polygon
            id="XMLID_207_"
            className="fill-[#49312d]"
            points="277.6,521.5 289.6,505.3 289.6,517.3 269.6,541.8 262.6,541.8 255.9,553.8 242,563.1 
		243.3,575.9 282.4,584.6 237,580.8 237,558.7 252.5,554.8 252.4,543.2 	"
          />
          <polygon
            id="XMLID_206_"
            className="fill-[#49312d]"
            points="237,172.9 264.4,158.1 290.3,172.9 	"
          />
          <polygon
            id="XMLID_205_"
            className="fill-[#49312d]"
            points="253.6,244.2 283.9,264.8 327,252.8 	"
          />
          <polygon
            id="XMLID_204_"
            className="fill-[#49312d]"
            points="237,186.5 320.8,197.3 266.7,178.9 	"
          />
          <polygon
            id="XMLID_203_"
            className="fill-[#49312d]"
            points="253.6,244.2 237,219.2 237,253.1 	"
          />
          <polygon
            id="XMLID_202_"
            className="fill-[#49312d]"
            points="327,252.8 349.4,310.8 375.5,298.4 	"
          />
          <polygon
            id="XMLID_201_"
            className="fill-[#49312d]"
            points="375.8,247.2 402.6,232.6 405.6,261.7 	"
          />
          <polygon
            id="XMLID_200_"
            className="fill-[#49312d]"
            points="402.6,232.6 402.6,188.9 438.6,174.5 	"
          />
          <polygon
            id="XMLID_199_"
            className="fill-[#49312d]"
            points="349.4,310.8 349.4,347.8 372.3,347.8 	"
          />
          <polygon
            id="XMLID_198_"
            className="fill-[#49312d]"
            points="347.8,373.4 372.3,389.5 372.3,367.6 	"
          />
          <polygon
            id="XMLID_197_"
            className="fill-[#49312d]"
            points="386.3,347.8 394,317.5 408.7,368.2 	"
          />
          <polygon
            id="XMLID_196_"
            className="fill-[#49312d]"
            points="421.5,325.2 421.5,360.9 443.1,365 	"
          />
          <polygon
            id="XMLID_195_"
            className="fill-[#49312d]"
            points="338.3,410.5 359.5,401.7 353.5,426.2 	"
          />
          <polygon
            id="XMLID_194_"
            className="fill-[#49312d]"
            points="405.3,413.9 404,462.4 370,477.8 	"
          />
          <polygon
            id="XMLID_193_"
            className="fill-[#49312d]"
            points="433.4,449.1 402.3,484.5 421.5,542.5 	"
          />
          <polygon
            id="XMLID_192_"
            className="fill-[#49312d]"
            points="282.4,584.6 322.6,581.2 307,602.9 	"
          />
          <polygon
            id="XMLID_191_"
            className="fill-[#604219]"
            points="237,172.9 248.9,166.4 237,152.1 	"
          />
          <polygon
            id="XMLID_190_"
            className="fill-[#604219]"
            points="237,186.5 237,219.2 255.7,188.9 	"
          />
          <polygon
            id="XMLID_189_"
            className="fill-[#604219]"
            points="327,252.8 321.3,224.8 360.9,254.5 	"
          />
          <polygon
            id="XMLID_188_"
            className="fill-[#604219]"
            points="402.6,232.6 405.6,261.7 418.6,241.2 	"
          />
          <polygon
            id="XMLID_187_"
            className="fill-[#604219]"
            points="421.5,325.2 409.2,321.8 421.5,360.9 	"
          />
          <polygon
            id="XMLID_186_"
            className="fill-[#604219]"
            points="408.7,368.2 395.3,389.7 386.3,347.8 	"
          />
          <polygon
            id="XMLID_185_"
            className="fill-[#604219]"
            points="347.8,373.4 359.5,401.7 372.3,389.5 	"
          />
          <polygon
            id="XMLID_184_"
            className="fill-[#604219]"
            points="421.5,360.9 432.3,393.8 443.1,365 	"
          />
          <polygon
            id="XMLID_183_"
            className="fill-[#604219]"
            points="395.3,389.7 405.3,413.9 383.3,453.8 	"
          />
          <polygon
            id="XMLID_182_"
            className="fill-[#604219]"
            points="354,508.8 364.6,526.7 342.4,561.7 	"
          />
          <polygon
            id="XMLID_181_"
            className="fill-[#604219]"
            points="255,206.5 279.5,203.2 327,252.8 	"
          />
          <polygon
            id="XMLID_180_"
            className="fill-[#554d4d]"
            points="421.5,325.2 394.3,286.2 394,317.5 	"
          />
          <polygon
            id="XMLID_179_"
            className="fill-[#554d4d]"
            points="432.3,393.8 433.4,449.1 447.6,440.8 	"
          />
          <polygon
            id="XMLID_178_"
            className="fill-[#554d4d]"
            points="383.3,453.8 335.6,455.2 386.9,434.2 	"
          />
          <polygon
            id="XMLID_177_"
            className="fill-[#554d4d]"
            points="402.3,484.5 392.8,513.2 421.5,542.5 	"
          />
          <polygon
            id="XMLID_176_"
            className="fill-[#554d4d]"
            points="354,508.8 392.8,513.2 364.6,526.7 	"
          />
          <polygon
            id="XMLID_175_"
            className="fill-[#554d4d]"
            points="349.4,310.8 312.9,338.1 326.4,313.2 	"
          />
          <polygon
            id="XMLID_174_"
            className="fill-[#554d4d]"
            points="438.6,174.5 418.6,241.2 402.6,232.6 	"
          />
          <polygon
            id="XMLID_173_"
            className="fill-[#635723]"
            points="418.6,241.2 430.1,262.1 437.7,235.7 	"
          />
          <polygon
            id="XMLID_172_"
            className="fill-[#84712c]"
            points="443.1,365 432.3,393.8 447.6,440.8 	"
          />
          <polygon
            id="XMLID_171_"
            className="fill-[#84712c]"
            points="408.7,368.2 405.3,413.9 395.3,389.7 	"
          />
          <polygon
            id="XMLID_170_"
            className="fill-[#84712c]"
            points="392.8,513.2 370,477.8 354,508.8 	"
          />
          <polygon
            id="XMLID_169_"
            className="fill-[#84712c]"
            points="370,477.8 307,436.2 341,484.5 	"
          />
          <polygon
            id="XMLID_168_"
            className="fill-[#554d4d]"
            points="433.4,449.1 447.6,497.5 421.5,542.5 	"
          />
          <polygon
            id="XMLID_167_"
            className="fill-[#84712c]"
            points="360.9,254.5 375.5,298.4 394.3,286.2 	"
          />
          <polygon
            id="XMLID_166_"
            className="fill-[#947158]"
            points="327,252.8 375.5,298.4 360.9,254.5 	"
          />
          <polygon
            id="XMLID_165_"
            className="fill-[#947158]"
            points="237,219.2 255.7,188.9 253.6,244.2 	"
          />
          <polygon
            id="XMLID_164_"
            className="fill-[#947158]"
            points="331.2,517.8 302.5,519.2 298.3,540.8 	"
          />
          <polygon
            id="XMLID_163_"
            className="fill-[#c07e48]"
            points="281.4,386.6 284.6,429.2 305.6,405.5 	"
          />
          <polygon
            id="XMLID_162_"
            className="fill-[#c07e48]"
            points="261,400.4 282.8,352.4 253.6,347.8 	"
          />
          <polygon
            id="XMLID_161_"
            className="fill-[#c07e48]"
            points="261,400.4 261,475.5 275.9,453.9 	"
          />
          <polygon
            id="XMLID_160_"
            className="fill-[#947158]"
            points="275.9,453.9 293.9,477.2 261,475.5 	"
          />
          <polygon
            id="XMLID_159_"
            className="fill-[#c07e48]"
            points="293.9,477.2 289.6,505.3 261,475.5 	"
          />
          <polygon
            id="XMLID_158_"
            className="fill-[#c98777]"
            points="305.6,405.5 307,436.2 284.6,429.2 	"
          />
          <polygon
            id="XMLID_157_"
            className="fill-[#df9126]"
            points="237,317.5 253.6,347.8 237,383.5 	"
          />
          <polygon
            id="XMLID_156_"
            className="fill-[#df9126]"
            points="307,436.2 293.9,477.2 341,484.5 	"
          />
          <polygon
            id="XMLID_155_"
            className="fill-[#df9126]"
            points="284.6,429.2 275.9,453.9 307,436.2 	"
          />
          <polygon
            id="XMLID_154_"
            className="fill-[#df9126]"
            points="281.4,386.6 261,400.4 284.6,429.2 	"
          />
          <polygon
            id="XMLID_153_"
            className="fill-[#f68c47]"
            points="261,400.4 282.8,352.4 281.4,386.6 	"
          />
          <polygon
            id="XMLID_152_"
            className="fill-[#f68c47]"
            points="307,436.2 275.9,453.9 293.9,477.2 	"
          />
          <polygon
            id="XMLID_151_"
            className="fill-[#f68c47]"
            points="338.3,410.5 320.6,391 305.6,405.5 	"
          />
          <polygon
            id="XMLID_150_"
            className="fill-[#f68c47]"
            points="293.9,477.2 302.5,519.2 289.6,505.3 	"
          />
          <polygon
            id="XMLID_149_"
            className="fill-[#fbad23]"
            points="320.6,391 347.8,373.4 338.3,410.5 	"
          />
          <polygon
            id="XMLID_148_"
            className="fill-[#fbad23]"
            points="293.9,477.2 331.2,517.8 341,484.5 	"
          />
          <polygon
            id="XMLID_147_"
            className="fill-[#fbad23]"
            points="253.6,347.8 268.2,301.8 282.8,352.4 	"
          />
          <polygon
            id="XMLID_146_"
            className="fill-[#fbad23]"
            points="253.6,347.8 251,310.5 237,317.5 	"
          />
          <polygon
            id="XMLID_145_"
            className="fill-[#fbad23]"
            points="305.6,405.5 307,436.2 338.3,410.5 	"
          />
          <polygon
            id="XMLID_144_"
            className="fill-[#f8b26c]"
            points="293.9,477.2 302.5,519.2 331.2,517.8 	"
          />
          <polygon
            id="XMLID_143_"
            className="fill-[#f8b26c]"
            points="307,436.2 338.3,410.5 335.6,455.1 	"
          />
          <polygon
            id="XMLID_142_"
            className="fill-[#f8b26c]"
            points="347.8,373.4 349.4,347.8 372.3,347.8 	"
          />
          <polygon
            id="XMLID_141_"
            className="fill-[#f8b26c]"
            points="268.2,301.8 237,317.5 237,253.1 	"
          />
          <polygon
            id="XMLID_140_"
            className="fill-[#eec075]"
            points="237,253.1 253.6,244.2 268.2,301.8 	"
          />
          <polygon
            id="XMLID_139_"
            className="fill-[#eec075]"
            points="261,475.5 270,515.2 277.6,521.5 289.6,505.3 	"
          />
          <polygon
            id="XMLID_138_"
            className="fill-[#eec075]"
            points="347.8,373.4 338.3,410.5 359.5,401.7 	"
          />
          <polygon
            id="XMLID_137_"
            className="fill-[#eec075]"
            points="279.5,203.2 321.3,224.8 327,252.8 	"
          />
          <polygon
            id="XMLID_136_"
            className="fill-[#eec075]"
            points="375.5,298.4 394,317.5 394.3,286.2 	"
          />
          <polygon
            id="XMLID_135_"
            className="fill-[#f6dc8f]"
            points="253.6,244.2 268.2,301.8 283.9,264.8 	"
          />
          <polygon
            id="XMLID_134_"
            className="fill-[#f6dc8f]"
            points="375.5,298.4 349.4,310.8 394,317.5 	"
          />
          <polygon
            id="XMLID_133_"
            className="fill-[#f6dc8f]"
            points="372.3,347.8 372.3,389.5 386.3,347.8 	"
          />
          <polygon
            id="XMLID_132_"
            className="fill-[#f6dc8f]"
            points="394,317.5 422,362.3 409.2,321.8 	"
          />
          <polygon
            id="XMLID_131_"
            className="fill-[#f6dc8f]"
            points="327,252.8 255,206.5 253.6,244.2 	"
          />
          <path id="XMLID_130_" className="fill-[#f6dc8f]" d="M331.2,517.8" />
          <polygon
            id="XMLID_129_"
            className="fill-[#f6dc8f]"
            points="342.4,561.7 298.3,540.8 331.2,517.8 	"
          />
          <polygon
            id="XMLID_128_"
            className="fill-[#f6dc8f]"
            points="394.3,286.2 431.8,296.3 421.5,325.2 	"
          />
          <polygon
            id="XMLID_127_"
            className="fill-[#f6dc8f]"
            points="375.8,247.2 360.9,254.5 405.6,261.7 	"
          />
          <polygon
            id="XMLID_126_"
            className="fill-[#ead4b5]"
            points="372.3,347.8 394,317.5 386.3,347.8 	"
          />
          <polygon
            id="XMLID_125_"
            className="fill-[#ead4b5]"
            points="284.6,291.8 282.8,352.4 302.7,358 	"
          />
          <polygon
            id="XMLID_124_"
            className="fill-[#ead4b5]"
            points="372.3,389.5 395.3,389.7 386.3,347.8 	"
          />
          <polygon
            id="XMLID_123_"
            className="fill-[#ead4b5]"
            points="338.3,410.5 335.6,455.1 353.5,426.2 	"
          />
          <polygon
            id="XMLID_122_"
            className="fill-[#ead4b5]"
            points="480,550.2 421.5,542.5 447.6,497.5 	"
          />
          <polygon
            id="XMLID_121_"
            className="fill-[#ead4b5]"
            points="364.6,526.7 395.5,560.9 392.8,513.2 	"
          />
          <polygon
            id="XMLID_120_"
            className="fill-[#ead4b5]"
            points="394.3,286.2 394.6,285.6 405.6,261.7 431.8,296.3 	"
          />
          <polygon
            id="XMLID_119_"
            className="fill-[#ead4b5]"
            points="421.5,325.2 465.1,340 443.1,365 	"
          />
          <polygon
            id="XMLID_118_"
            className="fill-[#eaddce]"
            points="431.8,296.3 421.5,325.2 465.1,340 	"
          />
          <polygon
            id="XMLID_117_"
            className="fill-[#eaddce]"
            points="372.3,347.8 394,317.5 349.4,310.8 	"
          />
          <polygon
            id="XMLID_116_"
            className="fill-[#eaddce]"
            points="337.9,357 347.8,373.4 349.4,347.8 	"
          />
          <polygon
            id="XMLID_115_"
            className="fill-[#eaddce]"
            points="302.7,358 282.8,352.4 281.4,386.6 	"
          />
          <polygon
            id="XMLID_114_"
            className="fill-[#eaddce]"
            points="302.7,358 312.9,338.1 324.1,345.1 	"
          />
          <polygon
            id="XMLID_113_"
            className="fill-[#eaddce]"
            points="284.6,291.8 283.9,264.8 268.2,301.8 	"
          />
          <polygon
            id="XMLID_112_"
            className="fill-[#eaddce]"
            points="327,252.8 326.4,313.2 349.4,310.8 	"
          />
          <polygon
            id="XMLID_111_"
            className="fill-[#eaddce]"
            points="255,206.5 320.8,197.3 255.7,188.9 	"
          />
          <polygon
            id="XMLID_110_"
            className="fill-[#eaddce]"
            points="341,484.5 331.2,517.8 354,508.8 	"
          />
          <polygon
            id="XMLID_109_"
            className="fill-[#eaddce]"
            points="447.6,440.8 447.6,497.5 508,487.7 	"
          />
          <polygon
            id="XMLID_108_"
            className="fill-[#fef8cc]"
            points="327,252.8 296.1,283.3 326.4,313.2 	"
          />
          <polygon
            id="XMLID_107_"
            className="fill-[#fef8cc]"
            points="283.9,264.8 296.1,283.3 284.6,291.8 	"
          />
          <polygon
            id="XMLID_106_"
            className="fill-[#fef8cc]"
            points="284.6,291.8 268.2,301.8 282.8,352.4 	"
          />
          <polygon
            id="XMLID_105_"
            className="fill-[#fef8cc]"
            points="312.9,299.9 312.9,338.1 300.9,314.9 	"
          />
          <polygon
            id="XMLID_104_"
            className="fill-[#fef8cc]"
            points="465.1,340 443.1,365 480.6,382.5 	"
          />
          <polygon
            id="XMLID_103_"
            className="fill-[#fef8cc]"
            points="480.6,382.5 447.6,440.8 498.6,444 	"
          />
          <polygon
            id="XMLID_102_"
            className="fill-[#fef8cc]"
            points="372.3,389.5 386.9,434.2 395.3,389.7 	"
          />
          <polygon
            id="XMLID_101_"
            className="fill-[#fef8cc]"
            points="386.9,434.2 359.5,401.7 353.5,426.2 	"
          />
          <polygon
            id="XMLID_100_"
            className="fill-[#fef8cc]"
            points="405.3,413.9 432.3,393.8 433.4,449.1 	"
          />
          <polygon
            id="XMLID_99_"
            className="fill-[#fef8cc]"
            points="341,484.5 370,477.8 354,508.8 	"
          />
          <polygon
            id="XMLID_98_"
            className="fill-[#fefdf4]"
            points="354,508.8 331.2,517.8 342.4,561.7 	"
          />
          <polygon
            id="XMLID_97_"
            className="fill-[#e9e9ea]"
            points="443.1,365 447.6,440.8 480.6,382.5 	"
          />
          <polygon
            id="XMLID_96_"
            className="fill-[#e9e9ea]"
            points="432.3,393.8 408.7,368.2 405.3,413.9 	"
          />
          <polygon
            id="XMLID_95_"
            className="fill-[#e9e9ea]"
            points="405.3,413.9 404,462.4 433.4,449.1 	"
          />
          <polygon
            id="XMLID_94_"
            className="fill-[#e9e9ea]"
            points="359.5,401.7 372.3,389.5 386.9,434.2 	"
          />
          <polygon
            id="XMLID_93_"
            className="fill-[#e9e9ea]"
            points="353.5,426.2 335.6,455.1 386.9,434.2 	"
          />
          <polygon
            id="XMLID_92_"
            className="fill-[#e9e9ea]"
            points="320.6,391 302.2,383.9 305.6,405.5 	"
          />
          <polygon
            id="XMLID_91_"
            className="fill-[#e9e9ea]"
            points="349.4,310.8 335.6,335.8 349.4,347.8 	"
          />
          <polygon
            id="XMLID_90_"
            className="fill-[#e9e9ea]"
            points="283.9,264.8 327,252.8 296.1,283.3 	"
          />
          <polygon
            id="XMLID_89_"
            className="fill-[#e9e9ea]"
            points="488.6,443.4 480.6,466.4 447.6,440.8 	"
          />
          <polygon
            id="XMLID_88_"
            className="fill-[#e9e9ea]"
            points="289.6,505.3 289.6,517.3 269.6,541.8 298.3,540.8 302.5,519.2 	"
          />
          <polygon
            id="XMLID_87_"
            className="fill-[#bbbcac]"
            points="335.6,455.1 370,477.8 383.3,453.8 	"
          />
          <polygon
            id="XMLID_86_"
            className="fill-[#bbbcac]"
            points="370,477.8 402.3,484.5 433.4,449.1 	"
          />
          <polygon
            id="XMLID_85_"
            className="fill-[#bbbcac]"
            points="447.6,497.5 480,550.2 488.6,490.8 	"
          />
          <polygon
            id="XMLID_84_"
            className="fill-[#bbbcac]"
            points="408.7,368.2 422,362.3 394,317.5 	"
          />
          <polygon
            id="XMLID_83_"
            className="fill-[#bbbcac]"
            points="312.9,338.1 300.9,314.9 302.7,358 	"
          />
          <polygon
            id="XMLID_82_"
            className="fill-[#bbbcac]"
            points="324.1,345.1 335.6,335.8 349.4,347.8 	"
          />
          <polygon
            id="XMLID_81_"
            className="fill-[#bbbcac]"
            points="300.9,314.9 284.6,291.8 312.9,299.9 	"
          />
          <polygon
            id="XMLID_80_"
            className="fill-[#bbbcac]"
            points="433.4,449.1 447.6,440.8 447.6,497.5 	"
          />
          <polygon
            id="XMLID_79_"
            className="fill-[#bbbcac]"
            points="392.8,513.2 395.5,560.9 421.5,542.5 	"
          />
          <polygon
            id="XMLID_78_"
            className="fill-[#bbbcac]"
            points="421.5,542.5 465,584.6 465,548.2 	"
          />
          <polygon
            id="XMLID_77_"
            className="fill-[#bbbcac]"
            points="298.3,540.8 322.6,581.2 282.4,584.6 	"
          />
          <polygon
            id="XMLID_76_"
            className="fill-[#bbbcac]"
            points="269.6,541.8 282.4,584.6 255.9,553.8 262.6,541.8 	"
          />
          <polygon
            id="XMLID_75_"
            className="fill-[#bbbcac]"
            points="281.8,596.7 288.5,642.5 237,611.3 	"
          />
          <polygon
            id="XMLID_74_"
            className="fill-[#bbbcac]"
            points="237,611.3 237,671 254.6,647.8 	"
          />
          <polygon
            id="XMLID_73_"
            className="fill-[#c9c0ad]"
            points="284.6,291.8 302.7,358 300.9,314.9 	"
          />
          <polygon
            id="XMLID_72_"
            className="fill-[#c9c0ad]"
            points="372.3,347.8 347.8,373.4 372.3,367.6 	"
          />
          <polygon
            id="XMLID_71_"
            className="fill-[#c9c0ad]"
            points="422,362.3 432.3,393.8 408.7,368.2 	"
          />
          <polygon
            id="XMLID_70_"
            className="fill-[#c9c0ad]"
            points="370,477.8 392.8,513.2 402.3,484.5 	"
          />
          <polygon
            id="XMLID_69_"
            className="fill-[#c9c0ad]"
            points="255.9,553.8 242,563.1 243.3,575.9 282.4,584.6 	"
          />
          <polygon
            id="XMLID_68_"
            className="fill-[#c9c0ad]"
            points="237,611.3 263.3,665.8 275.9,634.9 	"
          />
          <polygon
            id="XMLID_67_"
            className="fill-[#c9c0ad]"
            points="281.8,596.7 288.5,642.5 310.4,611.3 	"
          />
          <polygon
            id="XMLID_66_"
            className="fill-[#c9c0ad]"
            points="364.6,526.7 342.4,561.7 395.5,560.9 	"
          />
          <polygon
            id="XMLID_65_"
            className="fill-[#c9c0ad]"
            points="421.5,542.5 430.8,584.2 395.5,560.9 	"
          />
          <polygon
            id="XMLID_64_"
            className="fill-[#d3c8c2]"
            points="298.3,540.8 322.6,581.2 342.4,561.7 	"
          />
          <polygon
            id="XMLID_63_"
            className="fill-[#d3c8c2]"
            points="298.3,540.8 269.6,541.8 282.4,584.6 	"
          />
          <polygon
            id="XMLID_62_"
            className="fill-[#afa49f]"
            points="281.8,596.7 237,580.8 237,611.3 	"
          />
          <polygon
            id="XMLID_61_"
            className="fill-[#afa49f]"
            points="281.8,596.7 282.4,584.6 335.1,623.9 	"
          />
          <polygon
            id="XMLID_60_"
            className="fill-[#afa49f]"
            points="342.4,561.7 403.2,602.4 395.5,560.9 	"
          />
          <polygon
            id="XMLID_59_"
            className="fill-[#afa49f]"
            points="421.5,542.5 427.2,568.2 465,584.6 	"
          />
          <polygon
            id="XMLID_58_"
            className="fill-[#8d7d71]"
            points="281.8,596.7 282.4,584.6 237,580.8 	"
          />
          <polygon
            id="XMLID_57_"
            className="fill-[#8d7d71]"
            points="307,602.9 322.6,581.2 335.1,623.9 	"
          />
          <polygon
            id="XMLID_56_"
            className="fill-[#8d7d71]"
            points="342.4,561.7 338.4,596.1 403.2,602.4 	"
          />
          <polygon
            id="XMLID_55_"
            className="fill-[#8d7d71]"
            points="405.6,261.7 430.1,262.1 418.8,279.2 	"
          />
          <polygon
            id="XMLID_54_"
            className="fill-[#8d7d71]"
            points="418.6,241.2 469.3,206.5 438.6,174.5 	"
          />
          <polygon
            id="XMLID_53_"
            className="fill-[#8d7d71]"
            points="438.6,174.5 423.6,122.4 402.6,188.9 	"
          />
          <polygon
            id="XMLID_52_"
            className="fill-[#8d7d71]"
            points="423.6,122.4 372.3,148.2 397.5,128.2 	"
          />
          <polygon
            id="XMLID_51_"
            className="fill-[#fef8cc]"
            points="431.8,296.3 477.8,335.8 465.1,340 	"
          />
          <polygon
            id="XMLID_50_"
            className="fill-[#b5ad6e]"
            points="322.6,581.2 342.4,561.7 335.1,623.9 	"
          />
          <polygon
            id="XMLID_49_"
            className="fill-[#787fa0]"
            points="349.4,310.8 335.6,335.8 312.9,338.1 	"
          />
          <polygon
            id="XMLID_48_"
            className="fill-[#787fa0]"
            points="312.9,299.9 312.9,338.1 326.4,313.2 	"
          />
          <polygon
            id="XMLID_47_"
            className="fill-[#787fa0]"
            points="284.6,291.8 296.1,283.3 312.9,299.9 	"
          />
          <polygon
            id="XMLID_46_"
            className="fill-[#787fa0]"
            points="418.6,241.2 405.6,261.7 430.1,262.1 	"
          />
          <polygon
            id="XMLID_45_"
            className="fill-[#787fa0]"
            points="402.6,188.9 375.8,247.2 402.6,232.6 	"
          />
          <polygon
            id="XMLID_44_"
            className="fill-[#bbbcac]"
            points="337.9,357 320.6,391 347.8,373.4 	"
          />
          <polygon
            id="XMLID_43_"
            className="fill-[#afa49f]"
            points="320.6,391 302.2,383.9 324.4,383.6 	"
          />
          <polygon
            id="XMLID_42_"
            className="fill-[#afa49f]"
            points="302.2,383.9 296.1,398 305.6,405.5 	"
          />
          <polygon
            id="XMLID_41_"
            className="fill-[#ead4b5]"
            points="312.9,338.1 335.6,335.8 324.1,345.1 	"
          />
          <polygon
            id="XMLID_34_"
            className="fill-[#f68c47]"
            points="251,310.5 268.2,301.8 253.6,347.8 	"
          />
          <polygon
            id="XMLID_33_"
            className="fill-[#c9c0ad]"
            points="270,515.2 237,501.1 249,527.7 	"
          />
          <polygon
            id="XMLID_32_"
            className="fill-[#afa49f]"
            points="249,527.7 237,501.1 237,527.7 	"
          />
          <polygon
            id="XMLID_31_"
            className="fill-[#f8b26c]"
            points="237,501.1 261,475.5 270,515.2 	"
          />
          <polygon
            id="XMLID_30_"
            className="fill-[#e1afa3]"
            points="261,475.5 237,436.2 237,501.1 	"
          />
          <polygon
            id="XMLID_29_"
            className="fill-[#d69385]"
            points="261,475.5 261,400.4 237,436.2 	"
          />
          <polygon
            id="XMLID_28_"
            className="fill-[#d69385]"
            points="261,400.4 275.9,453.9 284.6,429.2 	"
          />
          <polygon
            id="XMLID_27_"
            className="fill-[#c98777]"
            points="261,400.4 237,383.5 237,417.1 	"
          />
          <polygon
            id="XMLID_26_"
            className="fill-[#c69849]"
            points="261,400.4 253.6,347.8 237,383.5 	"
          />
          <polygon
            id="XMLID_25_"
            className="fill-[#e1afa3]"
            points="261,400.4 237,436.2 237,417.1 	"
          />
          <polygon
            id="XMLID_24_"
            className="fill-[#f8b26c]"
            points="320.8,197.3 337.1,174 349.4,207.8 	"
          />
          <polygon
            id="XMLID_23_"
            className="fill-[#faa64c]"
            points="320.8,197.3 290.3,172.9 337.1,174 	"
          />
          <polygon
            id="XMLID_22_"
            className="fill-[#faa64c]"
            points="290.3,172.9 237,186.5 237,172.9 	"
          />
          <polygon
            id="XMLID_21_"
            className="fill-[#f8b26c]"
            points="320.8,197.3 266.7,178.9 290.3,172.9 	"
          />
          <polygon
            id="XMLID_20_"
            className="fill-[#ffd386]"
            points="290.3,172.9 264.4,158.1 337.1,174 	"
          />
          <polygon
            id="XMLID_19_"
            className="fill-[#ffd386]"
            points="264.4,158.1 237,152.1 248.9,166.4 	"
          />
          <polygon
            id="XMLID_18_"
            className="fill-[#c07e48]"
            points="237,152.1 296.1,144.8 237,134.9 	"
          />
          <polygon
            id="XMLID_17_"
            className="fill-[#947158]"
            points="237,152.1 337.1,174 296.1,144.8 	"
          />
          <polygon
            id="XMLID_16_"
            className="fill-[#e9e9ea]"
            points="321.3,224.8 320.8,197.3 279.5,203.2 	"
          />
          <polygon
            id="XMLID_15_"
            className="fill-[#ffd386]"
            points="360.9,254.5 394.3,286.2 405.6,261.7 	"
          />
          <polygon
            id="XMLID_14_"
            className="fill-[#ffd386]"
            points="360.9,254.5 349.4,207.8 375.8,247.2 	"
          />
          <polygon
            id="XMLID_13_"
            className="fill-[#eaddce]"
            points="320.8,197.3 360.9,254.5 349.4,207.8 	"
          />
          <polygon
            id="XMLID_12_"
            className="fill-[#fef8cc]"
            points="321.3,224.8 331.9,213.3 320.8,197.3 	"
          />
          <polygon
            id="XMLID_11_"
            className="fill-[#fef8cc]"
            points="321.3,224.8 340,224.8 360.9,254.5 	"
          />
          <polygon
            id="XMLID_10_"
            className="fill-[#84712c]"
            points="321.3,224.8 331.9,213.3 340,224.8 	"
          />
          <polygon
            id="XMLID_9_"
            className="fill-[#ffd386]"
            points="349.4,207.8 372.3,148.2 337.1,174 	"
          />
          <polygon
            id="XMLID_8_"
            className="fill-[#d69385]"
            points="438.6,174.5 459.3,140.8 423.6,122.4 	"
          />
          <polygon
            id="XMLID_7_"
            className="fill-[#c98777]"
            points="438.6,174.5 459.3,140.8 469.3,206.5 	"
          />
          <polygon
            id="XMLID_6_"
            className="fill-[#ead4b5]"
            points="372.3,148.2 402.6,188.9 423.6,122.4 	"
          />
          <polygon
            id="XMLID_5_"
            className="fill-[#eaddce]"
            points="372.3,148.2 349.4,207.8 402.6,188.9 	"
          />
          <polygon
            id="XMLID_4_"
            className="fill-[#bbbcac]"
            points="349.4,207.8 375.8,247.2 402.6,188.9 	"
          />
          <path
            id="XMLID_40_"
            className="fill-[#49312d]"
            d="M308.4,353.1l15.8-8l25.3,2.8L338,357c0,0,8.2,34.5-35.7,27l-6.2,14.1l-14.7-11.5l22.1-29.6
		L308.4,353.1z"
          />
          <path
            id="XMLID_39_"
            className="fill-[#84712c]"
            d="M316.5,361.1c-7,0-12.9,4-15.2,9.7c-0.6-1.6-1-3.2-1-5c0-8.1,7.2-14.7,16.2-14.7
		c8.9,0,16.2,6.6,16.2,14.7c0,1.8-0.4,3.4-1,5C329.4,365.1,323.5,361.1,316.5,361.1z"
          />
          <path
            id="XMLID_38_"
            className="fill-[#d1c76d]"
            d="M316.5,380.4c-7,0-12.9-4-15.2-9.7c2.3-5.6,8.2-9.7,15.2-9.7s12.9,4,15.2,9.7
		C329.4,376.4,323.5,380.4,316.5,380.4z"
          />
          <ellipse
            id="XMLID_36_"
            className="fill-[#56481c]"
            cx="312.9"
            cy="362.3"
            rx="4.6"
            ry="5.3"
          />
        </g>
      </svg>
    </div>
  );
}
