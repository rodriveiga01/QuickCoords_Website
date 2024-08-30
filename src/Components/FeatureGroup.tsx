import { useLanguageDetection, useTranslatedText } from "../locale/languageUtility";
import calculator_logo from "/src/assets/calculator.png";
import compass_logo from "/src/assets/compass_logo.png"

export function FeatureGroup() {
    useLanguageDetection();
    const t = useTranslatedText();

    let calculation = new Feature(
        calculator_logo,
        "Logo of a calculator",
        t('calculation'), 
        t('compassText')
    );

    let compass = new Feature(
        compass_logo,
        "Logo of a compass",
        t('compass'), 
        t('compassText')
    );

    return (
        <div className="flex items-center lg:px-20">
            <div className="pt-5 lg:pt-1">
                <FeatureDesign feature={calculation}/>
            </div>
            <FeatureDesign feature={compass}/>
        </div>
    )
}

class Feature {
    img: string;
    img_alt: string;
    title: string;
    text: string;

    constructor(img: string, img_alt: string, title: string, text: string) {
        this.img = img;
        this.img_alt = img_alt;
        this.title = title;
        this.text = text;
    }
}

export function FeatureDesign({feature}: {feature: Feature}) {
    let img_path = feature.img;
    let img_alt = feature.img_alt;
    let title = feature.title;
    let text = feature.text;

    return (
        <div className="p-8">
            <div className="flex items-center pb-2">
                <img src={img_path} alt={img_alt} className="h-12 w-14   lg:h-16 lg:w-[4.5rem] mr-2" />
                <h1 className="text-2xl">{title}</h1>
            </div>
            <p className="text-lg pt-4">{text}</p>
        </div>
    )
}


