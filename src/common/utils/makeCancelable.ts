export function makeCancelable<T extends Promise<any>>(
    promise: T
): [T, () => void] {
    let hasCanceled: boolean = false

    const wrappedPromise: any = new Promise((resolve, reject) => {
        promise.then(
            val => (hasCanceled ? reject({ isCanceled: true }) : resolve(val)),
            error =>
                hasCanceled ? reject({ isCanceled: true }) : reject(error)
        )
    })

    return [
        wrappedPromise,
        function cancel() {
            hasCanceled = true
        }
    ]
}
