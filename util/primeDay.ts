const isPrimeDay = (checkPrimeDay: boolean) => {
    // input: n: int
    // output: boolean


    if(!checkPrimeDay) return false

    const n: number = new Date().getDate()

    if (n == 1) return false
    if (n == 0) return false
    if (n == 2) return true
    if (n % 2 == 0) return false

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

export { isPrimeDay }