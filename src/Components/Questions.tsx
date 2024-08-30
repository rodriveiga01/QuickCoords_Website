import { useState } from "react";
import arrow from "/src/assets/arrow.png"
import React from "react";
import { useLanguageDetection, useTranslatedText } from "../locale/languageUtility";

export function Questions() {
    useLanguageDetection();
    const t = useTranslatedText();

    const paidStepsString = t('questionPaidText');
    const paidSteps = paidStepsString ? paidStepsString.split('\n') : [];

    const iosStepsString = t('questionIOSText');
    const iosSteps = iosStepsString ? iosStepsString.split('\n') : [];

    const standoutStepsString = t('questionStandoutText');
    const standoutSteps = standoutStepsString ? standoutStepsString.split('\n') : [];


    let paid = new Question(
        t('questionPaid'),
        paidSteps
    );

    let ios = new Question(
        t('questionIOS'),
        iosSteps
    );

    let standout = new Question(
        t('questionStandout'),
        standoutSteps
    );

    return (
        <div className="flex-col">
            <div className="flex justify-center mb-6">
                <h1 className="lg:text-5xl text-3xl pb-6 font-semibold">{t('questions')}</h1>
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