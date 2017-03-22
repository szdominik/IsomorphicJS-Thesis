export const NAME = 'NAME'
export const NUMBER = 'NUMBER'

export const logName = (name) => {
    return {
        type: NAME,
        name
    }
}

export const incNum = () => {
    return {
        type: NUMBER
    }
}