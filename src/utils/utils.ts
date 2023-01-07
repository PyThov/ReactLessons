
export const capitalizeFirstLetter = (str: string) => {
    return (str[0] as string).toUpperCase() + str.slice(1)
}

export interface IMsg {
    msg: string;
    startTime: string;
    endTime: string;
}
export const getElapsedTime = (msg: IMsg) => {
    const start = Date.parse(msg.startTime)
    const end = Date.parse(msg.endTime)
    return Math.floor((end - start) / 1000)
}
