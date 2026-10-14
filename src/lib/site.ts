export const site = {
  email: "devhorses2026@gmail.com",
  phone: "+51 981 916 198",
  instagram: "https://www.instagram.com/devhorses/",
  instagramHandle: "@devhorses",
  github: "https://github.com/Mathifa59",
  linkedin: "https://www.linkedin.com/company/devhorses",
};

export function whatsappUrl(
  message = "Hola DevHorses, me gustaría conversar sobre mi proyecto.",
) {
  return `https://wa.me/51981916198?text=${encodeURIComponent(message)}`;
}

export type Locale = "es" | "en";
