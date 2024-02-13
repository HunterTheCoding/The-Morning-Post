import { useEffect } from "react";

interface GoogleTranslateAPI {
    translate: {
        TranslateElement: new (
            options: {
                pageLanguage: string;
                autoDisplay: boolean;
            },
            elementId: string
        ) => void;
    };
}

interface CustomWindow extends Window {
    google?: GoogleTranslateAPI;
    googleTranslateElementInit?: (() => void) | undefined;
}

declare let window: CustomWindow;


const TranslateText: React.FC = () => {

    const googleTranslateElementInit = () => {
        if (window.google) {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    autoDisplay: false
                },
                "google_translate_element"
            );
        }
    };

    useEffect(() => {
        const addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        return () => {
            document.body.removeChild(addScript);
            window.googleTranslateElementInit = undefined; 
        };
    }, []);

    return (
        <div className="mt-4">
            <div id="google_translate_element"></div>
        </div>
    );
};

export default TranslateText;