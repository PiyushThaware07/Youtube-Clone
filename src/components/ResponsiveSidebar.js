import React from 'react';
// Icons
import { IoMdMenu } from "react-icons/io";
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

// Logo
import ytBlack from '../assets/logos/yt-black.png';

export default function ResponsiveSidebar(props) {





    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl fs-5" />,
            name: "Home",
        },
        {
            icon: <FaRegCompass className="text-xl fs-5" />,
            name: "Explore",
        },
        {
            icon: <MdOutlineSlowMotionVideo className="text-xl fs-5" />,
            name: "Shorts",
        },
        {
            icon: <MdSubscriptions className="text-xl fs-5" />,
            name: "Subscriptions",
        },
    ];

    const secondaryLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl fs-5" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl fs-5" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl fs-5" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl fs-5" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl fs-5" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl fs-5" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl fs-5" />,
            name: "Sport",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl fs-5" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl fs-5" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <MdSettings className="text-xl fs-5" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl fs-5" />,
            name: "Report history",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl fs-5" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl fs-5" />,
            name: "Send feedback",
        },
    ];






    return (
        <>
            <div className={`container-fluid p-0 m-0 ${props.sidebar ? "d-block" : "d-none"}`} style={{ position: "absolute", top: "0px", left: "0px", height: "100vh", width: "100vw", background: "#181819e6" }}>
                <div className="col-md-2  py-4 py-md-2 bg-white h-100" style={{ width: "250px" }}>
                    <div className="d-flex">
                        <div className="menu ms-3 ms-md-4 me-2 me-md-3 d-none d-md-block" style={{ marginTop: "7px" }} onClick={() => props.toggleSidebar()}>
                            <IoMdMenu size={26} />
                        </div>
                        <div className="menu ms-3 ms-md-4 me-2 me-md-3 d-block d-md-none" style={{ marginTop: "4.5px" }} onClick={() => props.toggleSidebar()}>
                            <IoMdMenu size={26} />
                        </div>
                        <div className="logo d-none d-md-block" style={{ marginTop: "3px" }}>
                            <img src={ytBlack} alt="" style={{ height: "35px" }} />
                        </div>
                        <div className="logo d-block d-md-none" style={{ marginTop: "3px" }}>
                            <img src={ytBlack} alt="" style={{ height: "29px" }} />
                        </div>
                    </div>

                    <div className='mt-3' style={{ overflowY: "scroll", height: "89vh" }}>
                        {/* First */}
                        {mainLinks.map(({ icon, name }) => {
                            return (
                                <button key={name} className='w-100 py-3 bg-white border-0 rounded-0 fw-semibold text-start ps-4' style={{ fontSize: "15px" }}>{icon}<span className='ms-3'>{name}</span></button>
                            )
                        })
                        }
                        <hr />


                        {/* Second */}
                        {secondaryLinks.map(({ icon, name }) => {
                            return (
                                <button key={name} className='w-100 py-3 bg-white border-0 rounded-0 fw-semibold text-start ps-4' style={{ fontSize: "15px" }}>{icon}<span className='ms-3'>{name}</span></button>
                            )
                        })
                        }
                        <hr />

                        {/* Third */}
                        {subscriptionLinks.map(({ icon, name }) => {
                            return (
                                <button key={name} className='w-100 py-3 bg-white border-0 rounded-0 fw-semibold text-start ps-4' style={{ fontSize: "15px" }}>{icon}<span className='ms-3'>{name}</span></button>
                            )
                        })
                        }
                        <hr />

                        {/* Fourth */}
                        {helpLinks.map(({ icon, name }) => {
                            return (
                                <button key={name} className='w-100 py-3 bg-white border-0 rounded-0 fw-semibold text-start ps-4' style={{ fontSize: "15px" }}>{icon}<span className='ms-3'>{name}</span></button>
                            )
                        })
                        }

                    </div>

                </div>

            </div>
        </>
    )
}
