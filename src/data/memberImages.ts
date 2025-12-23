// Member image imports and mapping
import placeholderMale from "@/assets/placeholder-male.png";
import placeholderFemale from "@/assets/placeholder-female.png";

// E-board member images
import abyaneh from "@/assets/ktppictures/members/eboard/abyaneh.jpg";
import bradley from "@/assets/ktppictures/members/eboard/bradley.jpg";
import mckinney from "@/assets/ktppictures/members/eboard/mckinney.jpg";
import tanavade from "@/assets/ktppictures/members/eboard/tanavade.jpg";
// E-board members using chapter photos
import abreu from "@/assets/ktppictures/members/chapter/abreu.jpg";
import kretzing from "@/assets/ktppictures/members/chapter/kretzing.jpg";
import mcdonald from "@/assets/ktppictures/members/chapter/mcdonald.jpg";
import radhakrishnan from "@/assets/ktppictures/members/chapter/radhakrishnan.jpg";
import vikhman from "@/assets/ktppictures/members/chapter/vikhman.jpg";
import gupta from "@/assets/ktppictures/members/chapter/gupta.jpg";

// Chapter member images
import abuhaija from "@/assets/ktppictures/members/chapter/abuhaija.jpg";
import ager from "@/assets/ktppictures/members/chapter/ager.jpg";
import andujar from "@/assets/ktppictures/members/chapter/andujar.jpg";
import asma from "@/assets/ktppictures/members/chapter/asma.jpg";
import berhanu from "@/assets/ktppictures/members/chapter/berhanu.jpg";
import brugger from "@/assets/ktppictures/members/chapter/brugger.jpg";
import burns from "@/assets/ktppictures/members/chapter/burns.jpg";
import duarte from "@/assets/ktppictures/members/chapter/duarte.jpg";
import dugar from "@/assets/ktppictures/members/chapter/dugar.jpg";
import ehler from "@/assets/ktppictures/members/chapter/ehler.jpg";
import elias from "@/assets/ktppictures/members/chapter/elias.jpg";
import gwaltney from "@/assets/ktppictures/members/chapter/gwaltney.jpg";
import hoyne from "@/assets/ktppictures/members/chapter/hoyne.jpg";
import hui from "@/assets/ktppictures/members/chapter/hui.jpg";
import khattak from "@/assets/ktppictures/members/chapter/khattak.jpg";
import li from "@/assets/ktppictures/members/chapter/li.jpg";
import macphail from "@/assets/ktppictures/members/chapter/macphail.jpg";
import pactwa from "@/assets/ktppictures/members/chapter/pactwa.jpg";
import ponnraj from "@/assets/ktppictures/members/chapter/ponnraj.jpg";
import rafat from "@/assets/ktppictures/members/chapter/rafat.jpg";
import rajgopal from "@/assets/ktppictures/members/chapter/rajgopal.jpg";
import sharma from "@/assets/ktppictures/members/chapter/sharma.jpg";
import sullivan from "@/assets/ktppictures/members/chapter/sullivan.jpg";
import talreja from "@/assets/ktppictures/members/chapter/talreja.jpg";
import teal from "@/assets/ktppictures/members/chapter/teal.jpg";
import tripathy from "@/assets/ktppictures/members/chapter/tripathy.jpg";

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
  sharma,
  sullivan,
  talreja,
  teal,
  tripathy,
  vikhman,
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
