export const getVisiblePages = (
   currentPage: number,
   totalPages: number,
): (number | -1)[] => {
   if (totalPages < 1) {
      return [];
   }

   if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
   }

   const pages: (number | -1)[] = [];

   pages.push(1);

   if (currentPage > 3) {
      pages.push(-1);
   }

   for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
   ) {
      pages.push(i);
   }

   if (currentPage < totalPages - 2) {
      pages.push(-1);
   }

   pages.push(totalPages);

   return pages;
};
