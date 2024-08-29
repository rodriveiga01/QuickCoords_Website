import React from "react";
import campsite_img from "/src/assets/campsite.png";
import mountain_img from "/src/assets/mountains.png"

export function UseCases() {
    let campsite = new UseCase(
        campsite_img,
        "campsite",
        "Finding a campsite",
        [
            "Use QuickCoords to return safely to your campsite after a day of exploring"
        ]
    );
    let mountain = new UseCase(
        mountain_img,
        "mountains",
        "Hiking in the mountains",
        [
            "Use QuickCoords to pinpoint your location on a trail, ensuring you stay on course with the built-in compass"
        ]
    );

    return (
        <div className="flex flex-col items-center mx-20 mt-10">
            <h1 className="lg:text-5xl text-4xl font-semibold">Use Cases</h1>
            <h2 className="lg:text-xl mt-5">Here are some use cases that QuickCoords can be valuable</h2>
            <FeatureDesign useCase={campsite} />
            <FeatureDesign useCase={mountain} />
        </div>
    )
}

class UseCase {
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

export function FeatureDesign({ useCase }: { useCase: UseCase }) {
    let img_path = useCase.img;
    let img_alt = useCase.img_alt;
    let title = useCase.title;
    let text = useCase.text;

    return (
        <div className="w-full flex flex-col lg:flex-row items-start py-8 px-8 mt-10 rounded-3xl bg-[#004c4c] max-w-full">
            <div className="flex flex-col lg:w-2/3">
                <h1 className="text-2xl lg:text-5xl pb-3 lg:pb-5">{title}</h1>
                <div className="text-base lg:text-2xl font-light  leading-relaxed ">
                    {text.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}<br/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-2/3 mt-4 lg:mt-0 ">
                <img src={img_path} alt={img_alt} className="w-full h-auto object-contain" />
            </div>
        </div>
    );
}