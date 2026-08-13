// Member image imports and mapping
import placeholderMale from "@/assets/placeholder-male.png";
import placeholderFemale from "@/assets/placeholder-female.png";

// Member images
import abreu from "@/assets/ktppictures/members/abreu.jpg";
import abuhaija from "@/assets/ktppictures/members/abuhaija.jpg";
import abyaneh from "@/assets/ktppictures/members/abyaneh.jpg";
import ager from "@/assets/ktppictures/members/ager.jpg";
import ahsan from "@/assets/ktppictures/members/ahsan.jpg";
import andujar from "@/assets/ktppictures/members/andujar.jpg";
import asma from "@/assets/ktppictures/members/asma.jpg";
import berhanu from "@/assets/ktppictures/members/berhanu.jpg";
import bradley from "@/assets/ktppictures/members/bradley.jpg";
import brugger from "@/assets/ktppictures/members/brugger.jpg";
import burns from "@/assets/ktppictures/members/burns.jpg";
import dave from "@/assets/ktppictures/members/dave.jpg";
import duarte from "@/assets/ktppictures/members/duarte.jpg";
import dugar from "@/assets/ktppictures/members/dugar.jpg";
import ehler from "@/assets/ktppictures/members/ehler.jpg";
import elias from "@/assets/ktppictures/members/elias.jpg";
import ghimire from "@/assets/ktppictures/members/ghimire.jpg";
import gupta from "@/assets/ktppictures/members/gupta.jpg";
import gurav from "@/assets/ktppictures/members/gurav.jpg";
import guttikonda from "@/assets/ktppictures/members/guttikonda.jpg";
import gwaltney from "@/assets/ktppictures/members/gwaltney.jpg";
import harvey from "@/assets/ktppictures/members/harvey.jpg";
import hoyne from "@/assets/ktppictures/members/hoyne.jpg";
import hui from "@/assets/ktppictures/members/hui.jpg";
import khattak from "@/assets/ktppictures/members/khattak.jpg";
import kretzing from "@/assets/ktppictures/members/kretzing.jpg";
import li from "@/assets/ktppictures/members/li.jpg";
import lockefeer from "@/assets/ktppictures/members/lockefeer.jpg";
import macphail from "@/assets/ktppictures/members/macphail.jpg";
import mamilla from "@/assets/ktppictures/members/mamilla.jpg";
import mcdonald from "@/assets/ktppictures/members/mcdonald.jpg";
import mckinney from "@/assets/ktppictures/members/mckinney.jpg";
import moothedan from "@/assets/ktppictures/members/moothedan.jpg";
import nahavandi from "@/assets/ktppictures/members/nahavandi.jpg";
import pactwa from "@/assets/ktppictures/members/pactwa.jpg";
import ponnraj from "@/assets/ktppictures/members/ponnraj.jpg";
import radhakrishnan from "@/assets/ktppictures/members/radhakrishnan.jpg";
import rafat from "@/assets/ktppictures/members/rafat.jpg";
import rajgopal from "@/assets/ktppictures/members/rajgopal.jpg";
import ranjith from "@/assets/ktppictures/members/ranjith.jpg";
import robbins from "@/assets/ktppictures/members/robbins.jpg";
import sharma from "@/assets/ktppictures/members/sharma.jpg";
import somaiya from "@/assets/ktppictures/members/somaiya.jpg";
import suchkova from "@/assets/ktppictures/members/suchkova.jpg";
import sullivan from "@/assets/ktppictures/members/sullivan.jpg";
import talreja from "@/assets/ktppictures/members/talreja.jpg";
import thatavarthi from "@/assets/ktppictures/members/thatavarthi.jpg";
import tanavade from "@/assets/ktppictures/members/tanavade.jpg";
import teal from "@/assets/ktppictures/members/teal.jpg";
import tripathy from "@/assets/ktppictures/members/tripathy.jpg";
import varma from "@/assets/ktppictures/members/varma.jpg";
import vankayala from "@/assets/ktppictures/members/vankayala.jpg";
import vijay from "@/assets/ktppictures/members/vijay.jpg";
import vikhman from "@/assets/ktppictures/members/vikhman.jpg";

// Member image mapping, keyed by lowercase last name.
// One map for everyone so a member keeps their photo when they move
// between the e-board, the chairs, and their class list.
const memberImages: Record<string, string> = {
  abreu,
  abuhaija,
  abyaneh,
  ager,
  ahsan,
  andujar,
  asma,
  berhanu,
  bradley,
  brugger,
  burns,
  dave,
  duarte,
  dugar,
  ehler,
  elias,
  ghimire,
  gupta,
  gurav,
  guttikonda,
  gwaltney,
  harvey,
  hoyne,
  hui,
  khattak,
  kretzing,
  li,
  lockefeer,
  macphail,
  mamilla,
  mcdonald,
  mckinney,
  moothedan,
  nahavandi,
  pactwa,
  ponnraj,
  radhakrishnan,
  rafat,
  rajgopal,
  ranjith,
  robbins,
  sharma,
  somaiya,
  suchkova,
  sullivan,
  talreja,
  thatavarthi,
  tanavade,
  teal,
  tripathy,
  varma,
  vankayala,
  vijay,
  vikhman,
  // Members without a headshot yet fall back to a placeholder.
};

// Function to get member image
export const getMemberImage = (name: string, gender: string): string => {
  const lastName = name.split(' ').pop()?.toLowerCase();
  if (!lastName) return gender === "female" ? placeholderFemale : placeholderMale;

  return memberImages[lastName] || (gender === "female" ? placeholderFemale : placeholderMale);
};

export { placeholderMale, placeholderFemale };
