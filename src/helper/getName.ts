export const getName = (fullName: string) => {
 const nameParts = fullName.split(' ');
 return {
  first_name: nameParts[0],
  last_name: nameParts[nameParts.length - 1],
 };
}
