// Photos for the Interests tab. Drop images into src/assets/photos/ and add them here.
// Example:
//   import photo1 from "@/assets/photos/photo1.jpg";
//   { src: photo1, alt: "Sunset over Taipei" }

export interface Photo {
  src?: string;
  alt: string;
  caption?: string;
}

export const PHOTOS: Photo[] = [
  // Empty for now — placeholders will render until you add real photos.
];
