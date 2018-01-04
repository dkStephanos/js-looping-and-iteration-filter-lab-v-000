// Code your solution in this file
function findMatching(drivers, string) {
  const collection = [];

  for(const driver of drivers) {
    if (driver == string) {
      collection.push(driver)
    }
  }
  return collection
}
