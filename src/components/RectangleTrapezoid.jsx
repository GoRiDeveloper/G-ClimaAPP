import { DefsLight } from "./DefsLight";
import { DefsDark } from "./DefsDark";

export function RectangleTrapezoid ({ darkMode }) {

    return (

        <svg className="rectangleTrapezoid" width="419" height="285" viewBox="0 0 419 285" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
                filter={
                    darkMode
                        ? "url(#filter0_d_702_1516)"
                        : "url(#filter0_d_702_1503)"
                }
            >
                <path 
                    d="M5 26.7381C5 9.83369 20.5103 -2.81603 37.0694 0.583238L392.669 73.581C405.086 76.1301 414 87.0593 414 99.7359V247.653C414 262.399 402.046 274.353 387.3 274.353H31.7003C16.9541 274.353 5 262.399 5 247.653V26.7381Z" 
                    fill={
                        darkMode
                            ? "url(#paint0_linear_702_1516)"
                            : "url(#paint0_linear_702_1503)"
                    } 
                />
            </g>
            {
                darkMode
                    ? <DefsDark />
                    : <DefsLight />
            }
        </svg>

    );

};