import React from "react";
import calculation_img from "/src/assets/calculation.png";
import compass_img from "/src/assets/compass.png"

export function FeatureInDepth() {
  let calculation = new Feature(
    calculation_img,
    "UI of a coordinate calculator field",
    "From nowhere to anywhere in 5 clicks",
    [
      "Calculate any location worldwide in just 5 steps:",
      "• Click 'Use my location' to detect your current position",
      "• Enter your desired distance",
      "• Set your desired orientation",
      "• Hit 'Calculate'",
      "• Either tap 'Send to Compass' or copy your new coordinates"
    ]
  );
  let compass = new Feature(
    compass_img,
    "A compass with a level in the middle",
    "From anywhere to the right place - just a compass, no clicks",
    [
      "Either inserting the coordinates you want or calculating them you will always get to the place you want without need to worry:",
      "• Reach your exact destination within one meter of accuracy, without needing cell signals",
      "• Our smart system automatically keeps you on track, so you can navigate smoothly and reliably"
    ]
  );
  return (
    <div className="flex flex-col items-center">
      <FeatureDesign feature={calculation}/>
      <FeatureDesign feature={compass}/>
    </div>
  )
}

class Feature {
  img: string;
  img_alt: string;
  title: string;
  text: string[];
  constructor(img: string, img_alt: string, title: string, text: string[]) {
    this.img = img;
    this.img_alt = img_alt;
    this.title = title;
    this.text = text;
  }
}

export function FeatureDesign({ feature }: { feature: Feature }) {
  let img_path = feature.img;
  let img_alt = feature.img_alt;
  let title = feature.title;
  let text = feature.text;
  const renderLine = (line: string, index: number) => {
    if (index === 0) {
      return (
        <>
          {line}<br /><br />
        </>
      );
    } else {
      return (
        <>
          {line}<br />
        </>
      );
    }
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-start py-8 px-4 lg:px-20">
      <div className="flex flex-col lg:w-2/3">
        <h1 className="text-2xl lg:text-4xl pb-3 lg:pb-5">{title}</h1>
        <div className="text-base lg:text-xl leading-relaxed">
          {text.map((line, index) => (
            <React.Fragment key={index}>
              {renderLine(line, index)}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 mt-4 lg:mt-0 lg:pl-8">
        <img src={img_path} alt={img_alt} className="w-full h-auto object-contain" />
      </div>
    </div>
  );
}