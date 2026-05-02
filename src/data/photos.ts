// Photos for the Interests tab. Drop images into src/assets/photos/ and add them here.
// Example:
//   import photo1 from "@/assets/photos/photo1.jpg";
//   { src: photo1, alt: "Sunset over Taipei" }
import picnic_sea from "@/assets/photos/DSC07476.jpg";
import oldtown_dc from "@/assets/photos/DSC07290.jpg";
import seafood_dc from "@/assets/photos/DSC07269.jpg";
import bestie_miaoli from "@/assets/photos/DSC06643.jpg";
import street_tainan from "@/assets/photos/DSC06540.jpg";
import sign_vegas from "@/assets/photos/DSC00185.jpg";

export interface Photo {
  src?: string;
  alt: string;
  caption?: string;
}

export const PHOTOS: Photo[] = [
  // Empty for now — placeholders will render until you add real photos.
  { src: picnic_sea, alt: "Japanese Garden, Seattle, WA" },
  { src: oldtown_dc, alt: "Old Town Alexandria, VA" },
  { src: seafood_dc, alt: "The Wharf Seafood D.C." },
  { src: bestie_miaoli, alt: "Grandma 🩵 Miaoli, Taiwan" },
  { src: street_tainan, alt: "Tainan, Taiwan" },
  { src: sign_vegas, alt: "Las Vegas, NV" },
];
