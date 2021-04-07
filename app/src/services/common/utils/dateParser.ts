function parseDate(date: string) {
  const dateObject = new Date(date);

  const parsedDate = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`

  return parsedDate;
}

export default parseDate;