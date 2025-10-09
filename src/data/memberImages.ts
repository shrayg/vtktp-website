// Member image imports and mapping
import placeholderMale from "@/assets/placeholder-male.png";
import placeholderFemale from "@/assets/placeholder-female.png";

// E-board member images
import abyaneh from "@/assets/ktppictures/members/eboard/abyaneh.jpg";
import ahsan from "@/assets/ktppictures/members/eboard/ahsan.jpg";
import bradley from "@/assets/ktppictures/members/eboard/bradley.jpg";
import mckinney from "@/assets/ktppictures/members/eboard/mckinney.jpg";
import robbins from "@/assets/ktppictures/members/eboard/robbins.jpg";
import suchkova from "@/assets/ktppictures/members/eboard/suchkova.jpg";
import tanavade from "@/assets/ktppictures/members/eboard/tanavade.jpg";

// Chapter member images
import abreu from "@/assets/ktppictures/members/chapter/abreu.jpg";
import ager from "@/assets/ktppictures/members/chapter/ager.jpg";
import asma from "@/assets/ktppictures/members/chapter/asma.jpg";
import berhanu from "@/assets/ktppictures/members/chapter/berhanu.jpg";
import burns from "@/assets/ktppictures/members/chapter/burns.jpg";
import duarte from "@/assets/ktppictures/members/chapter/duarte.jpg";
import dugar from "@/assets/ktppictures/members/chapter/dugar.jpg";
import ehler from "@/assets/ktppictures/members/chapter/ehler.jpg";
import elias from "@/assets/ktppictures/members/chapter/elias.jpg";
import gwaltney from "@/assets/ktppictures/members/chapter/gwaltney.jpg";
import kretzing from "@/assets/ktppictures/members/chapter/kretzing.jpg";
import li from "@/assets/ktppictures/members/chapter/li.jpg";
import macphail from "@/assets/ktppictures/members/chapter/macphail.jpg";
import mcdonald from "@/assets/ktppictures/members/chapter/mcdonald.jpg";
import radhakrishnan from "@/assets/ktppictures/members/chapter/radhakrishnan.jpg";
import rajgopal from "@/assets/ktppictures/members/chapter/rajgopal.jpg";
import sharma from "@/assets/ktppictures/members/chapter/sharma.jpg";
import sullivan from "@/assets/ktppictures/members/chapter/sullivan.jpg";
import talreja from "@/assets/ktppictures/members/chapter/talreja.jpg";
import tripathy from "@/assets/ktppictures/members/chapter/tripathy.jpg";
import vikhman from "@/assets/ktppictures/members/chapter/vikhman.jpg";

// E-board member image mapping
const eboardImages: Record<string, string> = {
  abyaneh,
  ahsan,
  bradley,
  mckinney,
  robbins,
  suchkova,
  tanavade,
};

// Chapter member image mapping
const chapterImages: Record<string, string> = {
  abreu,
  ager,
  asma,
  berhanu,
  burns,
  duarte,
  dugar,
  ehler,
  elias,
  gwaltney,
  kretzing,
  li,
  macphail,
  mcdonald,
  radhakrishnan,
  rajgopal,
  sharma,
  sullivan,
  talreja,
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
