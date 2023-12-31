import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";
import gsap from "gsap";

const HeroContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    height: fit-content;

    @media (max-width: ${breakPoint.tablet}) {
        & {
            display: none;
        }
    }
`;

export const Hero = () => {
    const [t2, setT2] = useState(gsap.timeline());

    useEffect(() => {
        gsap.set(["#terminal"], { scale: 0, transformOrigin: "bottom center" });
        setT2(
            t2
                .from(".line", { scaleX: 0, stagger: 0.2 })
                .to("#terminal", {
                    scale: 1,
                    ease: "back.out(1.5)",
                    duration: 0.3,
                })
                .to(
                    "#cursor",
                    {
                        opacity: 0,
                        repeat: -1,
                        yoyo: true,
                        ease: "Power1.easeIn",
                        delay: 0.2,
                    },
                    "<1"
                )
        );
    }, []);

    return (
        <HeroContainer>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="445"
                height="276"
                fill="none"
                viewBox="0 0 445 276"
            >
                <g id="pc">
                    <path
                        id="Vector"
                        fill="#C8CAD7"
                        d="M291 255.181V258h-85v-2.292a27.891 27.891 0 0012.95-9.637 27.124 27.124 0 005.3-15.085 27.06 27.06 0 00-4.143-15.43A27.777 27.777 0 00207.922 205h82.497a27.954 27.954 0 00-9.815 7.379 27.318 27.318 0 00-5.622 10.812 27.052 27.052 0 002.016 18.89c2.935 5.862 7.898 10.505 14.002 13.1z"
                    ></path>
                    <path
                        id="Vector_2"
                        fill="#000"
                        d="M290 205a27.952 27.952 0 00-9.757 7.707A29.078 29.078 0 00274.654 224h-51.308a29.057 29.057 0 00-5.589-11.293A27.94 27.94 0 00208 205h82z"
                        opacity="0.1"
                    ></path>
                    <path
                        id="Vector_3"
                        fill="#C8CAD7"
                        d="M109 190v16.5c0 9.111 6.496 16.5 14.503 16.5h248.994c8.011 0 14.503-7.389 14.503-16.5V190H109z"
                    ></path>
                    <path
                        id="Vector_4"
                        fill="#000"
                        d="M291 256.029V258h-85v-1.603a33.714 33.714 0 006.557-2.397h73.224a32.956 32.956 0 005.219 2.029z"
                        opacity="0.1"
                    ></path>
                    <path
                        id="Vector_5"
                        fill="#C8CAD7"
                        d="M315.513 255H181.487c-1.926 0-3.487 1.469-3.487 3.28v1.44c0 1.811 1.561 3.28 3.487 3.28h134.026c1.926 0 3.487-1.469 3.487-3.28v-1.44c0-1.811-1.561-3.28-3.487-3.28z"
                    ></path>
                    <path
                        id="Vector_6"
                        fill="#474157"
                        d="M387 14.528a14.54 14.54 0 00-4.248-10.273A14.49 14.49 0 00372.497 0H123.503a14.49 14.49 0 00-10.255 4.255A14.54 14.54 0 00109 14.528V194h278V14.528z"
                    ></path>
                    <path
                        id="Vector_7"
                        fill="#fff"
                        d="M249 11a4 4 0 100-8 4 4 0 000 8z"
                    ></path>
                    <path
                        id="Vector_8"
                        fill="#fff"
                        d="M248 215a8 8 0 100-16 8 8 0 000 16z"
                    ></path>
                    <g id="vs-code">
                        <path
                            id="Vector_9"
                            fill="#4C4C78"
                            d="M379 20.173v154.665c-.001 1.901-.523 3.723-1.45 5.066-.927 1.343-2.184 2.097-3.494 2.096H201.944a3.66 3.66 0 01-1.892-.545c-.6-.36-1.145-.889-1.605-1.555a7.937 7.937 0 01-1.071-2.328 10.024 10.024 0 01-.376-2.745V20.173c0-1.902.521-3.727 1.448-5.072.927-1.345 2.185-2.101 3.496-2.101h172.112c1.311 0 2.569.756 3.496 2.101S379 18.271 379 20.173z"
                        ></path>
                        <path
                            id="Vector_10"
                            fill="#706D84"
                            d="M203.851 36.346c1.934-.116 2.462-.265 2.462-.612 0-.348-.545-.712-2.049-.91v-.563l1.835-1.423h-2.149v-1.125h3.388l.099 1.125-1.752 1.324c1.372.298 1.901.844 1.901 1.489 0 .992-1.107 1.737-3.652 1.87l-.083-1.175zm5.041 1.042l-.116-1.01c1.653-1.157 2.479-1.918 2.479-2.663 0-.744-.529-.827-2.314-.877l.116-1.19c2.694 0 3.487.76 3.487 1.654 0 .893-.826 1.886-2.181 2.911h2.297v1.109l-3.768.066zm-5.041 9.96c1.934-.117 2.462-.282 2.462-.63 0-.347-.545-.694-2.049-.893v-.562l1.835-1.44h-2.149v-1.108h3.388l.099 1.108-1.752 1.34c1.372.282 1.901.844 1.901 1.473 0 1.009-1.107 1.753-3.652 1.886l-.083-1.175zm5.041 1.041l-.116-1.009c1.653-1.174 2.479-1.919 2.479-2.663 0-.745-.529-.828-2.314-.877l.116-1.208c2.694 0 3.487.778 3.487 1.654 0 .877-.826 1.903-2.181 2.929h2.297v1.108l-3.768.066zm-5.041 9.96c1.934-.116 2.462-.282 2.462-.63 0-.346-.545-.694-2.049-.892v-.563l1.835-1.44h-2.149v-1.108h3.388l.099 1.109-1.752 1.34c1.372.281 1.901.843 1.901 1.472 0 1.01-1.107 1.754-3.652 1.886l-.083-1.174zm8.511.148v.977h-1.206v-.977h-2.38a19.163 19.163 0 01.545-4.764l1.389.083-.909 3.573h1.355v-1.87l1.206-.132v1.92h.612l-.116 1.108-.496.082zm-8.511 10.853c1.934-.132 2.462-.281 2.462-.629 0-.347-.545-.711-2.049-.893v-.579l1.835-1.423h-2.149v-1.125h3.388l.099 1.125-1.752 1.34c1.372.282 1.901.844 1.901 1.473 0 .992-1.107 1.753-3.652 1.87l-.083-1.159zm5.107 1.175v-1.192c1.933-.148 2.528-.33 2.528-.81 0-.48-.644-.695-2.38-.894l.182-2.928h3.306l-.1 1.142h-2.165v.976c1.835.281 2.38.926 2.38 1.654-.066 1.043-1.157 1.903-3.751 2.052zm-5.107 9.81c1.934-.116 2.462-.265 2.462-.612 0-.348-.545-.712-2.049-.91v-.563l1.835-1.422h-2.149v-1.125h3.388l.099 1.125-1.752 1.34c1.372.281 1.901.843 1.901 1.472 0 .993-1.107 1.737-3.652 1.87l-.083-1.175zm4.826-1.075c0-1.655.925-2.862 3.024-3.756l.529 1.076c-1.388.512-1.967 1.009-2.198 1.654 1.289-.744 2.76-.132 2.76 1.323a2.073 2.073 0 01-.663 1.498 2.065 2.065 0 01-3.452-1.779v-.016zm2.908.38c0-.794-.677-1.108-1.652-.662v.15c0 .975.413 1.372.925 1.372.513 0 .727-.28.727-.86zm-7.734 11.697c1.934-.116 2.462-.265 2.462-.613 0-.347-.545-.711-2.049-.91v-.562l1.835-1.423h-2.149v-1.125h3.388l.099 1.125-1.752 1.324c1.372.297 1.901.843 1.901 1.489 0 .992-1.107 1.737-3.652 1.869l-.083-1.174zm5.47.992a22.332 22.332 0 012.165-4.417h-2.644l.099-1.158h3.851v1.125a24.39 24.39 0 00-2.149 4.632l-1.322-.182zm-5.47 10.009c1.934-.116 2.462-.281 2.462-.629 0-.347-.545-.695-2.049-.893v-.563l1.835-1.439h-2.149v-1.108h3.388l.099 1.108-1.752 1.34c1.372.281 1.901.844 1.901 1.473 0 1.009-1.107 1.753-3.652 1.886l-.083-1.175zm4.826-.281a1.524 1.524 0 00.082-2.879c0-.794.695-1.654 2.017-1.654 1.041 0 1.867.546 1.867 1.39a1.656 1.656 0 01-1.008 1.422c.595.348 1.124.778 1.124 1.473 0 .694-.81 1.654-2.149 1.654-1.338 0-1.933-.53-1.933-1.406zm2.826 0c0-.414-.529-.728-1.124-1.059a1.108 1.108 0 00-.479.86c0 .414.248.728.826.728.579 0 .793-.281.793-.579l-.016.05zm-.529-2.002a1.035 1.035 0 00.446-.794c0-.38-.198-.662-.727-.662-.529 0-.694.232-.694.48 0 .248.463.645.991.926l-.016.05zm-7.123 13.284c1.934-.115 2.462-.281 2.462-.628 0-.348-.545-.712-2.049-.894v-.579l1.835-1.422h-2.149v-1.109h3.388l.099 1.109-1.752 1.34c1.372.281 1.901.843 1.901 1.472 0 .993-1.107 1.754-3.652 1.886l-.083-1.175zm5.371.166c1.388-.53 1.967-1.009 2.198-1.655-1.289.728-2.76.133-2.76-1.323a2.069 2.069 0 012.207-2.042 2.058 2.058 0 011.455.749 2.062 2.062 0 01.453 1.574c0 1.655-.925 2.862-3.024 3.756l-.529-1.059zm2.33-2.399v-.149c0-.976-.413-1.373-.925-1.373s-.76.281-.76.844c0 .81.677 1.108 1.685.678zm-4.263 13.301v.976h-1.207v-.976h-2.363a19.17 19.17 0 01.545-4.765l1.388.083-.909 3.574h1.356v-1.787l1.206-.132v1.919h.595l-.099 1.108h-.512zm1.289-1.77c0-1.836.842-3.061 2.214-3.061 1.372 0 2.083 1.076 2.083 2.862 0 1.787-.843 3.061-2.232 3.061-1.388 0-2.065-1.075-2.065-2.862zm1.239-.116l1.735-.893c-.132-.629-.413-1.009-.842-1.009-.43 0-.893.628-.893 1.786v.116zm1.818.149l-1.653.877c.133.612.397.976.827.976.429 0 .826-.695.826-1.853zm-4.346 12.739v.959h-1.207v-.959h-2.363c-.02-1.605.163-3.206.545-4.765l1.388.083-.909 3.573h1.356v-1.787l1.206-.132v1.919h.595l-.099 1.109h-.512zm1.537.959v-1.075h1.503v-2.912h-1.338v-.943l1.338-.149v-.678l1.256-.099v4.764h1.356l-.1 1.076-4.015.016zm-1.537 10.025v.977h-1.207v-.977h-2.363c-.02-1.599.164-3.194.545-4.748l1.388.083-.909 3.557h1.356v-1.77l1.206-.132v1.902h.595l-.099 1.108h-.512zm1.603.977l-.116-1.01c1.653-1.174 2.479-1.919 2.479-2.663 0-.745-.529-.827-2.314-.877l.116-1.208c2.694 0 3.487.778 3.487 1.737 0 .96-.826 1.886-2.181 2.912h2.297v1.109h-3.768zm-1.603 10.025v.976h-1.207v-.976h-2.363a19.165 19.165 0 01.545-4.765l1.388.083-.909 3.574h1.356v-1.837l1.206-.116v1.903h.595l-.099 1.108-.512.05zm1.636-.066c1.933-.116 2.462-.281 2.462-.629 0-.347-.545-.695-2.049-.893v-.563l1.834-1.439h-2.148v-1.108h3.305l.099 1.108-1.751 1.34c1.371.281 1.9.844 1.9 1.472 0 1.01-1.107 1.754-3.652 1.886v-1.174zm-1.636 11.067v.943h-1.207v-.976h-2.363a19.163 19.163 0 01.545-4.764l1.388.082-.909 3.574h1.356v-1.787l1.206-.132v1.919h.595l-.099 1.108-.512.033zm5.073 0v.943h-1.206v-.976h-2.38a19.163 19.163 0 01.545-4.764l1.389.082-.909 3.574h1.355v-1.787l1.206-.132v1.919h.612l-.116 1.108-.496.033z"
                        ></path>
                        <g id="code">
                            <path
                                className="line"
                                fill="#A3848D"
                                d="M339.17 32.246H221.897v5.079H339.17v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#A58492"
                                d="M346.773 43.148H221.898v5.079h124.875v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#A284A3"
                                d="M323.669 54.15H221.898v5.079h101.771v-5.08z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#9084A0"
                                d="M308.96 65.25h-87.062v5.08h87.062v-5.08z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#83859E"
                                d="M294.086 76.136h-72.188v5.08h72.188v-5.08z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#83929B"
                                d="M342.675 87.22H221.898v5.08h120.777v-5.08z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#829995"
                                d="M363.564 98.57H221.898v5.078h141.666v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#84998B"
                                d="M340.129 109.223H221.898v5.079h118.231v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#899985"
                                d="M333.486 120.225H221.898v5.079h111.588v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#979987"
                                d="M274.948 131.127h-53.05v5.079h53.05v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#999488"
                                d="M376.389 142.129H221.898v5.079h154.491v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#998E8A"
                                d="M333.486 153.13H221.898v5.079h111.588v-5.079z"
                                opacity="0.39"
                            ></path>
                            <path
                                className="line"
                                fill="#998C8C"
                                d="M304.382 164.131H221.7v5.079h82.682v-5.079z"
                                opacity="0.39"
                            ></path>
                        </g>
                        <path
                            id="Vector_11"
                            fill="#C8CAD7"
                            d="M379 21H197c0-1.05.127-2.091.376-3.062.248-.971.612-1.853 1.071-2.596.46-.743 1.005-1.332 1.605-1.734.6-.402 1.243-.609 1.892-.608h172.112c.649 0 1.292.206 1.892.608.6.402 1.145.991 1.605 1.734.459.743.823 1.625 1.071 2.596.249.97.376 2.011.376 3.062z"
                        ></path>
                        <path
                            id="Vector_12"
                            fill="#E84D4D"
                            d="M208.5 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                        ></path>
                        <path
                            id="Vector_13"
                            fill="#F2DD77"
                            d="M214.5 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                        ></path>
                        <path
                            id="Vector_14"
                            fill="#4EB785"
                            d="M220.5 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                        ></path>
                    </g>
                    <g id="website">
                        <path
                            id="Vector_15"
                            fill="#F0F0F2"
                            d="M187.299 18.775h-64.473c-2.805 0-5.078 1.078-5.078 2.409v158.563c0 1.331 2.273 2.409 5.078 2.409h64.473c2.804 0 5.078-1.078 5.078-2.409V21.184c0-1.33-2.274-2.41-5.078-2.41z"
                        ></path>
                        <g id="Group 1">
                            <path
                                id="Vector_16"
                                fill="#C2E7EF"
                                d="M180.841 21.546h-48.63c-2.533 0-4.586 1.831-4.586 4.09V91.72c0 2.26 2.053 4.091 4.586 4.091h48.63c2.532 0 4.585-1.831 4.585-4.09V25.635c0-2.259-2.053-4.09-4.585-4.09z"
                            ></path>
                            <path
                                id="Vector_17"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M134.95 84.436h19.756"
                                opacity="0.81"
                            ></path>
                            <path
                                id="Vector_18"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M134.438 73.957h30.694"
                                opacity="0.81"
                            ></path>
                            <path
                                id="Vector_19"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M134.524 68.647h28.616"
                                opacity="0.68"
                            ></path>
                            <path
                                id="Vector_20"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M134.623 63.351h19.557"
                                opacity="0.68"
                            ></path>
                            <path
                                id="Vector_21"
                                fill="#fff"
                                d="M166.497 20.224h-22.046c-5.388 0-9.757 4.326-9.757 9.662v13.366c0 5.337 4.369 9.662 9.757 9.662h22.046c5.389 0 9.757-4.325 9.757-9.662V29.886c0-5.336-4.368-9.662-9.757-9.662z"
                                opacity="0.48"
                            ></path>
                        </g>
                        <g id="Group">
                            <path
                                id="Vector_22"
                                fill="#BDC0F4"
                                d="M177.579 107.892h-44.106c-2.623 0-4.75 2.106-4.75 4.704v60.057c0 2.598 2.127 4.705 4.75 4.705h44.106c2.624 0 4.751-2.107 4.751-4.705v-60.057c0-2.598-2.127-4.704-4.751-4.704z"
                            ></path>
                            <path
                                id="Vector_23"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M137.669 143.075h16.456"
                                opacity="0.81"
                            ></path>
                            <path
                                id="Vector_24"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M137.669 136.568h24.08"
                                opacity="0.81"
                            ></path>
                            <path
                                id="Vector_25"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M137.669 129.723h31.775"
                                opacity="0.81"
                            ></path>
                            <path
                                id="Vector_26"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M137.669 122.272h37.407"
                                opacity="0.81"
                            ></path>
                            <path
                                id="Vector_27"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="1.2"
                                d="M137.669 114.808h31.775"
                                opacity="0.81"
                            ></path>
                        </g>
                        <path
                            id="Vector_28"
                            fill="#DDD"
                            d="M185.131 13.703h-60.138a7.245 7.245 0 00-7.245 7.245h74.629a7.246 7.246 0 00-7.246-7.245z"
                        ></path>
                        <path
                            id="Vector_29"
                            fill="#E84D4D"
                            d="M123.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        ></path>
                        <path
                            id="Vector_30"
                            fill="#F2DD77"
                            d="M127.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        ></path>
                        <path
                            id="Vector_31"
                            fill="#4EB785"
                            d="M131.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        ></path>
                    </g>
                    <g id="terminal">
                        <path
                            id="Vector_32"
                            fill="#333"
                            d="M371.998 97.958H267.564v82.728h104.434V97.958z"
                        ></path>
                        <path
                            id="Vector_33"
                            fill="#D3D3D3"
                            d="M268.978 89.507h101.177a1.842 1.842 0 011.843 1.845v9.394H267.371v-9.63a1.611 1.611 0 011.607-1.609z"
                        ></path>
                        <path
                            id="Vector_34"
                            fill="#E84D4D"
                            d="M273.392 97.937a2.229 2.229 0 002.228-2.231 2.23 2.23 0 10-4.456 0c0 1.232.997 2.23 2.228 2.23z"
                        ></path>
                        <path
                            id="Vector_35"
                            fill="#F2DD77"
                            d="M281.727 97.937a2.229 2.229 0 002.228-2.231 2.23 2.23 0 10-4.456 0c0 1.232.997 2.23 2.228 2.23z"
                        ></path>
                        <path
                            id="Vector_36"
                            fill="#4EB785"
                            d="M289.676 97.937a2.23 2.23 0 000-4.462 2.23 2.23 0 00-2.228 2.231 2.23 2.23 0 002.228 2.23z"
                        ></path>
                        <path
                            id="Vector_37"
                            fill="#83E5AB"
                            d="M277.077 116.919a.949.949 0 01-.621-.236.799.799 0 01-.202-.931.78.78 0 01.202-.27l2.914-2.746-2.914-2.767a.77.77 0 010-1.179.882.882 0 01.958-.191.882.882 0 01.285.191l3.557 3.346a.783.783 0 01.257.6.764.764 0 01-.257.579l-3.557 3.368a.986.986 0 01-.622.236z"
                        ></path>
                        <path
                            id="cursor"
                            fill="#83E5AB"
                            d="M288.262 116.082a.847.847 0 00-.549-.779.843.843 0 00-.329-.057h-5.186a.832.832 0 00-.835.836.834.834 0 00.835.837h5.186a.872.872 0 00.805-.51.875.875 0 00.073-.327z"
                        ></path>
                    </g>
                    <path
                        id="desk"
                        fill="#404040"
                        d="M437.11 263H7.89C3.533 263 0 265.91 0 269.5s3.533 6.5 7.89 6.5h429.22c4.357 0 7.89-2.91 7.89-6.5s-3.533-6.5-7.89-6.5z"
                    ></path>
                    <g id="coffee-cup">
                        <path
                            id="Vector_38"
                            fill="#4C4C78"
                            d="M51.004 234.467c-1.49 0-2.948.462-4.187 1.329a7.822 7.822 0 00-2.776 3.541 8.231 8.231 0 00-.428 4.558 8.009 8.009 0 002.062 4.039 7.438 7.438 0 003.859 2.159 7.22 7.22 0 004.354-.449 7.622 7.622 0 003.382-2.905 8.157 8.157 0 001.27-4.383 8.209 8.209 0 00-.573-3.019 7.921 7.921 0 00-1.634-2.56 7.54 7.54 0 00-2.445-1.71 7.252 7.252 0 00-2.884-.6zm0 12.743a4.487 4.487 0 01-2.577-.818 4.807 4.807 0 01-1.708-2.179 5.066 5.066 0 01-.264-2.805 4.93 4.93 0 011.27-2.485 4.576 4.576 0 012.374-1.329 4.451 4.451 0 012.68.276c.847.368 1.571.99 2.081 1.788a5.02 5.02 0 01.782 2.698 4.97 4.97 0 01-1.359 3.432 4.533 4.533 0 01-3.28 1.422z"
                        ></path>
                        <path
                            id="Vector_39"
                            fill="#4C4C78"
                            d="M51.004 234.467c-1.49 0-2.948.462-4.187 1.329a7.822 7.822 0 00-2.776 3.541 8.231 8.231 0 00-.428 4.558 8.009 8.009 0 002.062 4.039 7.438 7.438 0 003.859 2.159 7.22 7.22 0 004.354-.449 7.622 7.622 0 003.382-2.905 8.157 8.157 0 001.27-4.383 8.209 8.209 0 00-.573-3.019 7.921 7.921 0 00-1.634-2.56 7.54 7.54 0 00-2.445-1.71 7.252 7.252 0 00-2.884-.6zm0 12.743a4.487 4.487 0 01-2.577-.818 4.807 4.807 0 01-1.708-2.179 5.066 5.066 0 01-.264-2.805 4.93 4.93 0 011.27-2.485 4.576 4.576 0 012.374-1.329 4.451 4.451 0 012.68.276c.847.368 1.571.99 2.081 1.788a5.02 5.02 0 01.782 2.698 4.97 4.97 0 01-1.359 3.432 4.533 4.533 0 01-3.28 1.422z"
                            opacity="0.1"
                        ></path>
                        <path
                            id="Vector_40"
                            fill="#4C4C78"
                            d="M51.74 228.398h28.985v28.036c0 1.577-.599 3.09-1.665 4.206a5.558 5.558 0 01-4.017 1.742H57.42a5.558 5.558 0 01-4.018-1.742 6.094 6.094 0 01-1.664-4.206v-28.036z"
                        ></path>
                        <path
                            id="Vector_41"
                            fill="#000"
                            d="M75.507 228.398v28.067a6.062 6.062 0 01-1.655 4.184 5.53 5.53 0 01-3.997 1.733h2.899a5.53 5.53 0 003.996-1.733 6.062 6.062 0 001.656-4.184v-28.067h-2.899z"
                            opacity="0.1"
                        ></path>
                    </g>
                    <g id="mouse" fillRule="evenodd" clipRule="evenodd">
                        <path
                            id="Vector_42"
                            fill="#BABCBE"
                            d="M368.493 262.928h-28.578c-3.748-10.581 32.226-10.872 28.578 0z"
                        ></path>
                        <path
                            id="Vector_43"
                            fill="#E5E6E7"
                            d="M339.974 259.794c2.879-6.639 25.383-7.043 28.44 0-4.5 1.556-9.335 2.358-14.22 2.358s-9.72-.802-14.22-2.358z"
                        ></path>
                        <path
                            id="Vector_44"
                            fill="#424243"
                            d="M355.574 255.077a.13.13 0 01-.052.103.198.198 0 01-.125.042h-2.406a.203.203 0 01-.126-.042.134.134 0 01-.052-.103v-.598c0-.177.513-.323 1.124-.323h.513c.612 0 1.124.146 1.124.323v.598z"
                        ></path>
                    </g>
                </g>
            </svg>
        </HeroContainer>
    );
};
