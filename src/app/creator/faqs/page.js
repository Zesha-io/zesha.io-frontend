/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import Layout from "@/components/CreatorLayout/Layout";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import DropdownIcon from "@/components/Icons/DropdownIcon";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<DropdownIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faqs = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Layout>
            <div className="pb-20">
                <div className="grow py-2 mb-3">
                    <h1 className="text-xl font-medium">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#7F8691] text-base">
                        View all activities on your Zesha videos
                    </p>
                </div>

                <div>
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography>What is Zesha? #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Zesha is a platform that empowers content
                                creators to earn from creating content they
                                love, and viewers alike make from engaging with
                                the content they love. We are building a more
                                inclusive web where everyone benefits - from the
                                creator to the viewer to the platform.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            <Typography>How does Zesha works? #2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                With Zesha, content creators can upload their
                                original videos and start earning from the first
                                view. To support this, ads are embedded in the
                                video, and earnings from these ads are split
                                between the creator (70%), Zesha (20%), and
                                viewers (10%). Zesha also provides monetization
                                tools for content creators to earn directly from
                                their loyal fans and followers.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography>
                                How do I start earning on Zesha? #3
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To access your payout options, go to the Payouts
                                link on your Dashboard, or click on Withdraw on
                                your Chrome extension. Zesha offers multiple
                                payout options, including gift cards, wallet
                                transfers, and charity donations (coming soon!).
                                With Wallet Transfer, you can send your TFUEL
                                rewards to another crypto wallet. To access gift
                                card payouts, you need at least $5 worth of
                                TFUEL in your wallet. Click on the gift card
                                option on the Payouts page, and we'll send the
                                equivalent amount to your registered email.
                                Charity donations are coming soon! We're
                                planning to add more payout options gradually.
                                When exactly it will happen depends on things
                                like how many people are using Zesha and any
                                technical issues that might come up. Whenever it
                                does happen, we'll make sure to let everyone
                                know about it so you don't miss out!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                    >
                        <AccordionSummary
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                        >
                            <Typography>
                                How much can I expect to make? #4
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Each ad view earns you 0.1 TFUEL. To see the
                                equivalent amount in USD, view this link. How
                                much you earn per month depends on how active
                                you are on Zesha. During our beta period, a good
                                estimate is around $1 - $5 per month. As our
                                users increase, we expect this amount to
                                increase significantly! We'll also be adding
                                more earning options for viewers very soon,
                                including engagement rewards, creator giveaways,
                                and many other features. Stay tuned!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </Layout>
    );
};

export default Faqs;
