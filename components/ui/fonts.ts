import {
  Roboto,
  Dancing_Script,
  Cormorant,
  Acme,
  Permanent_Marker,
  Lugrasimo,
} from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const dancing_script = Dancing_Script({
  weight: ["500", "700"],
  subsets: ["latin-ext"],
});

export const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const acme = Acme({
  weight: ["400"],
  subsets: ["latin"],
});

export const permanent_marker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
});

export const lugrasimo = Lugrasimo({
  weight: ["400"],
  subsets: ["latin-ext"],
});
