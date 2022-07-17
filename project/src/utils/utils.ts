export const getCountStars = (rating: number): string => {
  const roundNumber = Math.round(rating) * 20;
  const countStars = `${roundNumber}%`;

  return countStars;
};
