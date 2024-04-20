import {
  Roboto,
  Jacquard_24,
  Dancing_Script,
  Cormorant,
} from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const jacquard = Jacquard_24({
  weight: "400",
  subsets: ["latin-ext"],
});

export const dancing_script = Dancing_Script({
  weight: ["500", "700"],
  subsets: ["latin-ext"],
});

export const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});
