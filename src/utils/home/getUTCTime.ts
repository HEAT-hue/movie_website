export const getUTCTime = (date: string) => {
    const currentDate = new Date(date);

    const now_utc = Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(),
        currentDate.getUTCDate(), currentDate.getUTCHours(),
        currentDate.getUTCMinutes(), currentDate.getUTCSeconds());

    const currentUTCDate = new Date(now_utc);

    const year = currentUTCDate.getFullYear();

    const month = currentUTCDate.toLocaleString('default', { month: "long" });

    const day = currentUTCDate.toLocaleString('default', { day: "2-digit" });

    return { year, month, day }
}