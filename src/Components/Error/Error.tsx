import React, { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ParallaxJs from 'parallax-js';
import "./error.scss";

const Error: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null); const parallaxInstanceRef = useRef<ParallaxJs | null>(null);

    const cleanupParallax = useCallback(() => {
        if (parallaxInstanceRef.current) {
            parallaxInstanceRef.current.destroy();
        }
    }, []); // No dependencies for useCallback

    useEffect(() => {
        if (sceneRef.current) {
            parallaxInstanceRef.current = new ParallaxJs(sceneRef.current);
            document.body.classList.add("error-page");

            return cleanupParallax;
        }
    }, [cleanupParallax]);

    return (
        <div>
            <section className="wrapper">
                <div className="container">

                    <div
                        ref={sceneRef}
                        id="scene"
                        className="scene"
                        data-hover-only="false"
                    >
                        <div className="circle" data-depth="1.2"></div>

                        <div className="one" data-depth="0.9">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>

                        <div className="two" data-depth="0.60">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>

                        <div className="three" data-depth="0.40">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>

                        <p className="p404" data-depth="0.50">
                            404
                        </p>
                        <p className="p404" data-depth="0.10">
                            404
                        </p>
                    </div>

                    <div className="text">
                        <article>
                            <p>
                                Uh oh! Looks like you got lost. Go back to the homepage if you
                                dare!
                            </p>
                            <button>
                                {" "}
                                <Link to={"/"}>back to Home</Link>
                            </button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;
