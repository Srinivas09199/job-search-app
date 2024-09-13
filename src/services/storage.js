const BOOKMARKS_KEY = 'bookmarkedJobs';

export const getBookmarkedJobs = () => {
  const bookmarks = localStorage.getItem(BOOKMARKS_KEY);
  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const saveBookmarkedJobs = (jobs) => {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(jobs));
};