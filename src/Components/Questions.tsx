import { useState } from "react";
import arrow from "/src/assets/arrow.png"
import React from "react";

export function Questions() {

    let paid = new Question(
        "Is QuickCoords paid?",
        [
            "QuickCoords is totally free with no ads.",
            "We think that the users deserve a great app for free and without advertisements ruining the user experience. We never know the future but if one day the app has a subscrition we will try to make it affordable and worth it."
        ]
    );

    let ios = new Question(
        "Why is there no IOS version?",
        [
            "There's no QuickCoords for IOS devices because the price to submit an app to the App Store is expensive but if in the future our user base grows we will launch an IOS version."
        ]
    );

    let standout = new Question(
        "How QuickCoords standout from the other apps?",
        [
            "You will think that this is just trying to convince you but QuickCoords may not have all the features or options but one thing you can be sure is that QuickCoords is built from the ground to be simple, easy and effective. We think that an app is not good because it has a lot of features but because it has the right features"
        ]
    );

    return (
        <div className="flex-col">
            <div className="flex justify-center mb-6">
                <h1 className="lg:text-5xl text-3xl pb-6 font-semibold">Questions to answer</h1>
            </div>

            <QuestionDesign question={paid} />
            <QuestionDesign question={ios} />
            <QuestionDesign question={standout} />

        </div>
    )
}

class Question {
    title: string;
    text: string[];

    constructor(title: string, text: string[]) {
        this.title = title;
        this.text = text;
    }
}

function QuestionDesign({ question }: { question: Question }) {
    let title = question.title;
    let text = question.text;

    const HorizontalLine = () => {
        return (
            <div className="max-w-full border-t border-gray-600" />
        );
    }

    const [rotated, setRotated] = useState(false);

    const rotateImage = () => {
        setRotated(!rotated);
    };

    return (
        <div className="flex-col mx-20 py-6">
            <div className="flex justify-between">
                <h1 className="lg:text-2xl text-xl">{title}</h1>
                <img
                    src={arrow}
                    alt="Rotating Arrow"
                    id="img"
                    onClick={rotateImage}
                    className={`transform transition-transform duration-500 ease-in-out mb-5 w-auto h-auto object-contain cursor-pointer ${rotated ? 'rotate-180' : ''}`}
                />
            </div>
            <HorizontalLine />
            <div className="h-5"></div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${rotated ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className={`mt-4 transform transition-all duration-500 ease-in-out leading-relaxed ${rotated ? 'translate-y-0' : '-translate-y-4'
                    }`}>
                    {text.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}<br />
                        </React.Fragment>
                    ))}
                </p>
            </div>

        </div>
    )
}