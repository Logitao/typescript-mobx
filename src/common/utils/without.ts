export const without = (array: Array<any>, value: any) => {
    const index = array.indexOf(value)
    return array.splice(index, 1)
}
