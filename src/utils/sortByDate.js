

export const sortByDate = (arrayOfObjects) => {
    arrayOfObjects.sort((a, b) => a.date - b.date)
}