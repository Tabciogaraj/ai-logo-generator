
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "../../_data/Lookup";
import Colors from "../../_data/Colors";

function LogoPallette({ onHandleInputChange }) {


  const [selectedOption, setSelectedOption]=useState();
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, paletteIndex) => (
          <div className={`flex p-1 cursor-pointer ${selectedOption==palette.name&&'border-2 rounded-lg border-primary shadow-md '}`} key={paletteIndex}>
            {palette?.colors.map((color, colorIndex) => (
              <div
                className="h-24 w-full"
                key={`${paletteIndex}-${colorIndex}`}
                onClick={()=>{setSelectedOption(palette.name);
                  onHandleInputChange(palette.name)
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoPallette;
