import React from 'react';

// Import all company logo images
import uberLogo from "@/assets/logos/uber.png";
import redfinLogo from "@/assets/logos/redfin.png";
import spotifyLogo from "@/assets/logos/spotify.png";
import nvidiaLogo from "@/assets/logos/nvidia.png";
import teslaLogo from "@/assets/logos/tesla.png";
import autodeskLogo from "@/assets/logos/autodesk.png";
import frogLogo from "@/assets/logos/frog.png";
import seatgeekLogo from "@/assets/logos/seatgeek.png";
import slackLogo from "@/assets/logos/slack.png";
import bankofamericaLogo from "@/assets/logos/bankofamerica.png";
import metaLogo from "@/assets/logos/meta.png";
import lyftLogo from "@/assets/logos/lyft.png";
import microsoftLogo from "@/assets/logos/microsoft.png";
import appleLogo from "@/assets/logos/apple.png";
import bnymellonLogo from "@/assets/logos/bnymellon.png";
import deloitteLogo from "@/assets/logos/deloitte.png";
import capitaloneLogo from "@/assets/logos/capitalone.png";
import pwcLogo from "@/assets/logos/pwc.png";
import amazonLogo from "@/assets/logos/amazon.png";
import googleLogo from "@/assets/logos/google.png";
import doordashLogo from "@/assets/logos/doordash.png";
import jumptradingLogo from "@/assets/logos/jumptrading.png";
import servicenowLogo from "@/assets/logos/servicenow.png";
import indeedLogo from "@/assets/logos/indeed.png";
import intuitLogo from "@/assets/logos/intuit.png";
import janestreetLogo from "@/assets/logos/janestreet.png";
import citadelLogo from "@/assets/logos/citadel.png";
import salesforceLogo from "@/assets/logos/salesforce.png";
import stripeLogo from "@/assets/logos/stripe.png";
import instagramLogo from "@/assets/logos/instagram.png";
import mongodbLogo from "@/assets/logos/mongodb.png";
import twosigmaLogo from "@/assets/logos/twosigma.png";
import accentureLogo from "@/assets/logos/accenture.png";
import toyotaLogo from "@/assets/logos/toyota.png";

// Company logos data for the LogoLoop component
export interface CompanyLogo {
  src: string;
  alt: string;
  title: string;
  href?: string;
}

export const companyLogos: CompanyLogo[] = [
  {
    src: uberLogo,
    alt: "Uber",
    title: "Uber",
    href: "https://www.uber.com"
  },
  {
    src: redfinLogo, 
    alt: "Redfin",
    title: "Redfin",
    href: "https://www.redfin.com"
  },
  {
    src: spotifyLogo,
    alt: "Spotify", 
    title: "Spotify",
    href: "https://www.spotify.com"
  },
  {
    src: nvidiaLogo,
    alt: "NVIDIA",
    title: "NVIDIA", 
    href: "https://www.nvidia.com"
  },
  {
    src: teslaLogo,
    alt: "Tesla",
    title: "Tesla",
    href: "https://www.tesla.com"
  },
  {
    src: autodeskLogo,
    alt: "Autodesk",
    title: "Autodesk",
    href: "https://www.autodesk.com"
  },
  {
    src: frogLogo,
    alt: "frog",
    title: "frog",
    href: "https://www.frog.co"
  },
  {
    src: seatgeekLogo,
    alt: "SeatGeek",
    title: "SeatGeek", 
    href: "https://www.seatgeek.com"
  },
  {
    src: slackLogo,
    alt: "Slack",
    title: "Slack",
    href: "https://slack.com"
  },
  {
    src: bankofamericaLogo,
    alt: "Bank of America",
    title: "Bank of America",
    href: "https://www.bankofamerica.com"
  },
  {
    src: metaLogo,
    alt: "Meta",
    title: "Meta",
    href: "https://about.meta.com"
  },
  {
    src: lyftLogo,
    alt: "Lyft",
    title: "Lyft",
    href: "https://www.lyft.com"
  },
  {
    src: microsoftLogo,
    alt: "Microsoft",
    title: "Microsoft",
    href: "https://www.microsoft.com"
  },
  {
    src: appleLogo,
    alt: "Apple",
    title: "Apple",
    href: "https://www.apple.com"
  },
  {
    src: bnymellonLogo,
    alt: "BNY Mellon",
    title: "BNY Mellon",
    href: "https://www.bnymellon.com"
  },
  {
    src: deloitteLogo,
    alt: "Deloitte",
    title: "Deloitte",
    href: "https://www2.deloitte.com"
  },
  {
    src: capitaloneLogo,
    alt: "Capital One",
    title: "Capital One",
    href: "https://www.capitalone.com"
  },
  {
    src: pwcLogo,
    alt: "PwC",
    title: "PwC",
    href: "https://www.pwc.com"
  },
  {
    src: amazonLogo,
    alt: "Amazon",
    title: "Amazon",
    href: "https://www.amazon.com"
  },
  {
    src: googleLogo,
    alt: "Google",
    title: "Google",
    href: "https://www.google.com"
  },
  {
    src: doordashLogo,
    alt: "DoorDash",
    title: "DoorDash",
    href: "https://www.doordash.com"
  },
  {
    src: jumptradingLogo,
    alt: "Jump Trading",
    title: "Jump Trading",
    href: "https://www.jumptrading.com"
  },
  {
    src: servicenowLogo,
    alt: "ServiceNow",
    title: "ServiceNow",
    href: "https://www.servicenow.com"
  },
  {
    src: indeedLogo,
    alt: "Indeed",
    title: "Indeed",
    href: "https://www.indeed.com"
  },
  {
    src: intuitLogo,
    alt: "Intuit",
    title: "Intuit",
    href: "https://www.intuit.com"
  },
  {
    src: janestreetLogo,
    alt: "Jane Street",
    title: "Jane Street",
    href: "https://www.janestreet.com"
  },
  {
    src: citadelLogo,
    alt: "Citadel",
    title: "Citadel",
    href: "https://www.citadel.com"
  },
  {
    src: salesforceLogo,
    alt: "Salesforce",
    title: "Salesforce",
    href: "https://www.salesforce.com"
  },
  {
    src: stripeLogo,
    alt: "Stripe",
    title: "Stripe",
    href: "https://stripe.com"
  },
  {
    src: instagramLogo,
    alt: "Instagram",
    title: "Instagram",
    href: "https://www.instagram.com"
  },
  {
    src: mongodbLogo,
    alt: "MongoDB",
    title: "MongoDB",
    href: "https://www.mongodb.com"
  },
  {
    src: twosigmaLogo,
    alt: "Two Sigma",
    title: "Two Sigma",
    href: "https://www.twosigma.com"
  },
  {
    src: accentureLogo,
    alt: "Accenture",
    title: "Accenture",
    href: "https://www.accenture.com"
  },
  {
    src: toyotaLogo,
    alt: "Toyota",
    title: "Toyota",
    href: "https://www.toyota.com"
  }
];
