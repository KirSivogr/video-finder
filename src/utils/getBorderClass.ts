export const getBorderClass = (date: string) => {
   const publishedDate = new Date(date);
   const now = new Date();
   const diffTime = Math.abs(now.getTime() - publishedDate.getTime());
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

   if (diffDays > 180) {
      return 'border-red';
   }
   if (diffDays > 30) {
      return 'border-yellow';
   }
   if (diffDays > 7) {
      return 'border-green';
   }

   return 'border-blue';
};
