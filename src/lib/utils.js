export const getPostsByPage = ({ posts, page, limit }) => {
  const size = posts.length;

  const startIndex = (page - 1) * limit;

  if (startIndex >= size) return [];

  const paginatedPosts = posts.slice(startIndex, startIndex + limit);

  return paginatedPosts;
};
