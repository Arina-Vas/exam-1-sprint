import {Button} from "./Button.tsx";
import {Screen} from "./Screen.tsx";

type CounterType = {
    count: number
    setCountOnClick: (num: number) => void
    maxValue: number
    setMaxValueOnClick: (num: number) => void
    startCount: number
}

export const Counter = ({count, setCountOnClick, maxValue, setMaxValueOnClick, startCount}: CounterType) => {

    const onClickIncHandler = () => {
        setCountOnClick(++count)
    }
    const onClickResetHandler = () => {
        setCountOnClick(0)
        setMaxValueOnClick(Math.ceil(Math.random() * 10))
    }

    // const onClickHandler = (n: number) => {
    //     if (n === 0) {
    //         setCount(0)
    //         setMaxValue(Math.ceil(Math.random() * 10))
    //     } else if (count < maxValue) setCount(++count)
    // }
    return (
        <div className={'counter'}>
            <Screen count={count} maxValue={maxValue}/>
            <progress className={'progress'} max={maxValue} value={count}></progress>
            <div className={'buttons'}>
                <Button name={'inc'} disabled={count === maxValue} onclick={onClickIncHandler}/>
                <Button name={'reset'} disabled={count === startCount} onclick={onClickResetHandler}/>
            </div>
        </div>
    );
};