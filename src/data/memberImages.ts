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
import duarte from "@/assets/ktppictures/members/duarte.jpg";
import dugar from "@/assets/ktppictures/members/dugar.jpg";
import ehler from "@/assets/ktppictures/members/ehler.jpg";
import elias from "@/assets/ktppictures/members/elias.jpg";
import gupta from "@/assets/ktppictures/members/gupta.jpg";
import gwaltney from "@/assets/ktppictures/members/gwaltney.jpg";
import hoyne from "@/assets/ktppictures/members/hoyne.jpg";
import hui from "@/assets/ktppictures/members/hui.jpg";
import khattak from "@/assets/ktppictures/members/khattak.jpg";
import kretzing from "@/assets/ktppictures/members/kretzing.jpg";
import li from "@/assets/ktppictures/members/li.jpg";
import macphail from "@/assets/ktppictures/members/macphail.jpg";
import mcdonald from "@/assets/ktppictures/members/mcdonald.jpg";
import mckinney from "@/assets/ktppictures/members/mckinney.jpg";
import pactwa from "@/assets/ktppictures/members/pactwa.jpg";
import ponnraj from "@/assets/ktppictures/members/ponnraj.jpg";
import radhakrishnan from "@/assets/ktppictures/members/radhakrishnan.jpg";
import rafat from "@/assets/ktppictures/members/rafat.jpg";
import rajgopal from "@/assets/ktppictures/members/rajgopal.jpg";
import robbins from "@/assets/ktppictures/members/robbins.jpg";
import sharma from "@/assets/ktppictures/members/sharma.jpg";
import suchkova from "@/assets/ktppictures/members/suchkova.jpg";
import sullivan from "@/assets/ktppictures/members/sullivan.jpg";
import talreja from "@/assets/ktppictures/members/talreja.jpg";
import tanavade from "@/assets/ktppictures/members/tanavade.jpg";
import teal from "@/assets/ktppictures/members/teal.jpg";
import tripathy from "@/assets/ktppictures/members/tripathy.jpg";
import vikhman from "@/assets/ktppictures/members/vikhman.jpg";

// E-board member image mapping
const eboardImages: Record<string, string> = {
  abyaneh,
  abreu,
  bradley,
  gupta,
  kretzing,
  mcdonald,
  mckinney,
  radhakrishnan,
  tanavade,
  vikhman,
  // Note: mamilla and varma photos will fall back to placeholder if not found
};

// Chapter member image mapping
const chapterImages: Record<string, string> = {
  abreu,
  abuhaija,
  ager,
  ahsan,
  andujar,
  asma,
  berhanu,
  brugger,
  burns,
  duarte,
  dugar,
  ehler,
  elias,
  gupta,
  gwaltney,
  hoyne,
  hui,
  khattak,
  kretzing,
  li,
  macphail,
  mcdonald,
  pactwa,
  ponnraj,
  radhakrishnan,
  rafat,
  rajgopal,
  robbins,
  sharma,
  suchkova,
  sullivan,
  talreja,
  teal,
  tripathy,
  vikhman,
  // Note: cole and hausler photos will fall back to placeholder if not found
};

// Function to get member image
export const getMemberImage = (name: string, gender: string, isEboard: boolean = false): string => {
  const lastName = name.split(' ').pop()?.toLowerCase();
  if (!lastName) return gender === "female" ? placeholderFemale : placeholderMale;
  
  const imageMap = isEboard ? eboardImages : chapterImages;
  const image = imageMap[lastName];
  
  return image || (gender === "female" ? placeholderFemale : placeholderMale);
};

export { placeholderMale, placeholderFemale };
