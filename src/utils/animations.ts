export const generateFloatingDots = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    id: `dot-${i}`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));
};

export const FLOATING_DOTS = generateFloatingDots();