import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SidebarIcons = () => {
    return (
        <div className="flex justify-around px-2 text-xl pb-2">
            <span className="cursor-pointer">
                <SettingsIcon sx={{ fontSize: 40, color: "black" }} />
            </span>
            <span className="cursor-pointer">
                <AccountCircleIcon sx={{ fontSize: 40, color: "black" }} />
            </span>
            <span className="cursor-pointer">
                <ArrowBackIcon sx={{ fontSize: 40, color: "black" }} />
            </span>
        </div>
    );
};

export default SidebarIcons;
