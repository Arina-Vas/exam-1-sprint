type ScreenType = {
    count: number
    maxValue: number
}

export const Screen = ({count, maxValue}: ScreenType) => {
    return (
        <div className={count === maxValue ? 'screen error' : 'screen'}>
            <div className={'max'}>Max value: {maxValue} </div>
            <div>{count}</div>
        </div>
    );
};