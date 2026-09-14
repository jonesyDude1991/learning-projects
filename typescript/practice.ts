function reverseString(str: string): string {
  if (str.length === 0) return str;

  return reverseString(str.substring(1) + str.charAt(0));
}

console.log(reverseString("hello"));
