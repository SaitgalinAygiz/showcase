export const range = (start, stop) => {
    return Array.from({
            length: (stop - start)
        },
        (_, i) => start + (i)
    );

}