export function percentOf(old: number, current: number) {
    const difference =  old - current
    return (( difference / old  ) * 100).toFixed(0)
}