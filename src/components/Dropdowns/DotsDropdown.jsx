"use client";

import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "../Icons/MoreVertIcon";
import EditIcon from "../Icons/EditIcon";
import TrashIcon from "../Icons/TrashIcon";

import { useRouter } from "next/navigation";
import { VideoData } from "../../utils/data";
import VideoIcon2 from "../Icons/VideoIcon2";
import LinkIcon from "../Icons/LinkIcon";
import ConfirmDeleteModal from "../Modals/ConfirmDeleteModal";
import ShareLinkModal from "../Modals/ShareLinkModal";
import Link from "next/link";
// import { ArrowRightAlt } from '@mui/icons-material';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 8,
        marginTop: theme.spacing(1),
        minWidth: 160,
        color: "rgb(55, 65, 81)",
        boxShadow: "0px 3px 14px 1px rgba(52, 64, 84, 0.06)",
        "& .MuiMenu-list": {
            padding: "4px 0",
            fontSize: "14px",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export default function DotsDropdown({ video }) {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [confirmDeleteModal, setConfirmDeleteModal] = React.useState(false);
    const [shareLinkModal, setShareLinkModal] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        console.log("deleting...");
        // alert(item.name);
        // console.log(item.id, 'item.id');

        // return;
        const index = VideoData.findIndex((x) => x.id == video.id);
        if (index !== -1) {
            ScreenData.splice(index, 1);
            console.log("deleted...");
            // console.log(ScreenData, 'ScreenData');
            handleClose();
            router.push("/");
        }
    };
    const handleEdit = () => {
        console.log("going to edit...");
        router.push(`/creator/videos/${video?.id}/edit`);
    };

    const handleConfirmDeleteModal = () => {
        handleClose();
        setConfirmDeleteModal(!confirmDeleteModal);
    };

    const handleShareLinkModal = () => {
        handleClose();
        setShareLinkModal(!shareLinkModal);
    };

    return (
        video && (
            <>
                <button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="text-[#344054] rounded-full p-2 hover:bg-[#F3F3FE] border-0"
                >
                    <span className="">
                        <MoreVertIcon />
                    </span>
                </button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem disableRipple>
                        <Link
                            href={`/creator/videos/${video._id}/edit`}
                            className="text-[#344054] text-xs flex items-center gap-2"
                        >
                            <EditIcon />
                            Edit
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose} disableRipple>
                        <span className="text-[#344054] text-xs flex items-center gap-2">
                            <VideoIcon2 />
                            View public video
                        </span>
                    </MenuItem>
                    <MenuItem onClick={handleShareLinkModal} disableRipple>
                        <span className="text-[#344054] text-xs flex items-center gap-2">
                            <LinkIcon />
                            Share link
                        </span>
                    </MenuItem>
                    <MenuItem onClick={handleConfirmDeleteModal} disableRipple>
                        <button className="text-[#E92005] text-xs flex items-center gap-2">
                            <TrashIcon />
                            Delete
                        </button>
                    </MenuItem>
                </StyledMenu>

                <ConfirmDeleteModal
                    show={confirmDeleteModal}
                    dismiss={handleConfirmDeleteModal}
                    item={video}
                />
                <ShareLinkModal
                    show={shareLinkModal}
                    dismiss={handleShareLinkModal}
                    item={video}
                />
            </>
        )
    );
}
