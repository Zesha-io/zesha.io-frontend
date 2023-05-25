/* eslint-disable react/no-unescaped-entities */

"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import DropdownIcon from "../Icons/DropdownIcon";
import Link from "next/link";

function HomeAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<DropdownIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is Zesha?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Zesha is a platform that empowers content creators to
                        earn from creating content they love, and viewers alike
                        make from engaging with the content they love. We are
                        building a more inclusive web where everyone benefits -
                        from the creator to the viewer to the platform.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<DropdownIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How does Zesha work for viewers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Zesha works in different ways for content creators and
                        viewers.
                    </Typography>
                    <br />

                    <Typography>
                        If you&apos;re a content viewer, Zesha provides a
                        browser extension (and in the future, a mobile app) that
                        allows you to earn rewards when you engage with ads on
                        videos from content creators. These rewards can be
                        redeemed for gift cards, exclusive offers, charity
                        donations, or even withdrawn directly as{" "}
                        <Link
                            href="https://coinmarketcap.com/currencies/theta-fuel/"
                            target={"_blank"}
                            className="underline text-[#046ed1]"
                        >
                            TFUEL.
                        </Link>
                    </Typography>
                    <br />

                    <Typography>
                        The extension recommends videos based on your interests
                        and frequency preferences. You can choose to watch
                        either in full mode, which opens the video on a new
                        page, or in distraction-free mode, which overlays the
                        video player in a floating window. At the same time, you
                        can continue your work in other tabs of your browser.
                    </Typography>
                    <br />

                    <Typography>
                        With Zesha, you can also support your favorite content
                        creators through tips, subscriptions, and premium
                        content.{" "}
                    </Typography>
                    <br />

                    <Typography>
                        If you&apos;re a content creators, see the{" "}
                        <Link
                            href="/creators"
                            className="underline text-[#046ed1]"
                        >
                            Creators section
                        </Link>
                        .
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<DropdownIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>
                        How do I start earning on Zesha as a viewer?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        As a viewer, download the Chrome extension and follow
                        the installation instructions. Then create a Zesha
                        account and set your interests and preferences. Based on
                        these interests and preferences, we&apos;ll send you a
                        recommended list of videos a few times during the day.
                    </Typography>
                    <br />
                    <Typography>
                        Whenever you watch an ad within each video, you&apos;ll
                        get paid an amount of TFUEL. Your TFUEL rewards keep
                        increasing with the more videos and ads you watch.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<DropdownIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>How do I payout?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To access your payout options, go to the{" "}
                        <Link
                            href="/individual/payouts"
                            className="underline text-[#046ed1]"
                        >
                            Payouts
                        </Link>{" "}
                        link on your Dashboard, or click on Withdraw on your
                        Chrome extension.
                    </Typography>
                    <br />
                    <Typography>
                        Zesha offers multiple payout options, including gift
                        cards, wallet transfers, and charity donations (coming
                        soon!). With Wallet Transfer, you can send your TFUEL
                        rewards to another crypto wallet. To access gift card
                        payouts, you need at least $5 worth of TFUEL in your
                        wallet. Click on the gift card option on the Payouts
                        page, and we&apos;ll send the equivalent amount to your
                        registered email. Charity donations are coming soon!
                    </Typography>
                    <br />

                    <Typography>
                        We're planning to add more payout options gradually.
                        When exactly it will happen depends on things like how
                        many people are using Zesha and any technical issues
                        that might come up. Whenever it does happen, we'll make
                        sure to let everyone know about it so you don&apos;t
                        miss out!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<DropdownIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>How much cash do I expect to make?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Each ad view earns you 0.1 TFUEL. To see the equivalent
                        amount in USD, view this{" "}
                        <Link
                            href="https://coinmarketcap.com/currencies/theta-fuel/"
                            target={"_blank"}
                            className="underline text-[#046ed1]"
                        >
                            link.
                        </Link>
                    </Typography>
                    <br />
                    <Typography>
                        How much you earn per month depends on how active you
                        are on Zesha. During our beta period, a good estimate is
                        around $1 - $5 per month. As our users increase, we
                        expect this amount to increase significantly!
                    </Typography>
                    <br />

                    <Typography>
                        We&apos;ll also be adding more earning options for
                        viewers very soon, including engagement rewards, creator
                        giveaways, and many other features. Stay tuned!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default HomeAccordion;
