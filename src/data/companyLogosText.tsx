import React from 'react';

// Company logos data using text-based approach for the LogoLoop component
// Based on the companies shown in the screenshot

export interface CompanyLogoText {
  node: React.ReactNode;
  title: string;
  href?: string;
}

export const companyLogosText: CompanyLogoText[] = [
  {
    node: <span className="text-black font-bold text-lg">Uber</span>,
    title: "Uber",
    href: "https://www.uber.com"
  },
  {
    node: <span className="text-red-600 font-bold text-lg">REDFIN</span>,
    title: "Redfin",
    href: "https://www.redfin.com"
  },
  {
    node: <span className="text-green-500 font-bold text-lg">Spotify</span>,
    title: "Spotify",
    href: "https://www.spotify.com"
  },
  {
    node: <span className="text-green-600 font-bold text-lg">NVIDIA</span>,
    title: "NVIDIA",
    href: "https://www.nvidia.com"
  },
  {
    node: <span className="text-red-500 font-bold text-lg">TESLA</span>,
    title: "Tesla",
    href: "https://www.tesla.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">AUTODESK</span>,
    title: "Autodesk",
    href: "https://www.autodesk.com"
  },
  {
    node: <span className="text-green-600 font-bold text-lg">frog</span>,
    title: "frog",
    href: "https://www.frog.co"
  },
  {
    node: <span className="text-orange-500 font-bold text-lg">SEAT GEEK</span>,
    title: "SeatGeek",
    href: "https://www.seatgeek.com"
  },
  {
    node: <span className="text-purple-600 font-bold text-lg">Slack</span>,
    title: "Slack",
    href: "https://slack.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">Bank of America</span>,
    title: "Bank of America",
    href: "https://www.bankofamerica.com"
  },
  {
    node: <span className="text-blue-500 font-bold text-lg">Meta</span>,
    title: "Meta",
    href: "https://about.meta.com"
  },
  {
    node: <span className="text-pink-500 font-bold text-lg">Lyft</span>,
    title: "Lyft",
    href: "https://www.lyft.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">Microsoft</span>,
    title: "Microsoft",
    href: "https://www.microsoft.com"
  },
  {
    node: <span className="text-gray-800 font-bold text-lg">Apple</span>,
    title: "Apple",
    href: "https://www.apple.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">BNY Mellon</span>,
    title: "BNY Mellon",
    href: "https://www.bnymellon.com"
  },
  {
    node: <span className="text-green-600 font-bold text-lg">Deloitte</span>,
    title: "Deloitte",
    href: "https://www2.deloitte.com"
  },
  {
    node: <span className="text-red-600 font-bold text-lg">Capital One</span>,
    title: "Capital One",
    href: "https://www.capitalone.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">PwC</span>,
    title: "PwC",
    href: "https://www.pwc.com"
  },
  {
    node: <span className="text-orange-500 font-bold text-lg">Amazon</span>,
    title: "Amazon",
    href: "https://www.amazon.com"
  },
  {
    node: <span className="text-blue-500 font-bold text-lg">Google</span>,
    title: "Google",
    href: "https://www.google.com"
  },
  {
    node: <span className="text-red-500 font-bold text-lg">DoorDash</span>,
    title: "DoorDash",
    href: "https://www.doordash.com"
  },
  {
    node: <span className="text-red-600 font-bold text-lg">Jump Trading</span>,
    title: "Jump Trading",
    href: "https://www.jumptrading.com"
  },
  {
    node: <span className="text-green-600 font-bold text-lg">ServiceNow</span>,
    title: "ServiceNow",
    href: "https://www.servicenow.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">Indeed</span>,
    title: "Indeed",
    href: "https://www.indeed.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">Intuit</span>,
    title: "Intuit",
    href: "https://www.intuit.com"
  },
  {
    node: <span className="text-blue-800 font-bold text-lg">Jane Street</span>,
    title: "Jane Street",
    href: "https://www.janestreet.com"
  },
  {
    node: <span className="text-blue-600 font-bold text-lg">Citadel</span>,
    title: "Citadel",
    href: "https://www.citadel.com"
  },
  {
    node: <span className="text-blue-500 font-bold text-lg">Salesforce</span>,
    title: "Salesforce",
    href: "https://www.salesforce.com"
  },
  {
    node: <span className="text-purple-600 font-bold text-lg">Stripe</span>,
    title: "Stripe",
    href: "https://stripe.com"
  },
  {
    node: <span className="text-pink-500 font-bold text-lg">Instagram</span>,
    title: "Instagram",
    href: "https://www.instagram.com"
  },
  {
    node: <span className="text-green-600 font-bold text-lg">MongoDB</span>,
    title: "MongoDB",
    href: "https://www.mongodb.com"
  },
  {
    node: <span className="text-teal-600 font-bold text-lg">Two Sigma</span>,
    title: "Two Sigma",
    href: "https://www.twosigma.com"
  },
  {
    node: <span className="text-purple-600 font-bold text-lg">Accenture</span>,
    title: "Accenture",
    href: "https://www.accenture.com"
  },
  {
    node: <span className="text-red-600 font-bold text-lg">Toyota</span>,
    title: "Toyota",
    href: "https://www.toyota.com"
  }
];
