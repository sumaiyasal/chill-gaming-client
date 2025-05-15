const countRatings = (reviews) => {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviews.forEach((r) => {
    const rating = Number(r.rating);
    if (rating >= 1 && rating <= 5) {
      counts[rating]++;
    }
  });
  return Object.entries(counts).map(([star, count]) => ({
    name: `${star}⭐`,
    value: count,
  }));
};
export default countRatings;

