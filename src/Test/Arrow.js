import { useState } from 'react';

const TestComponent = (props) => {
    function handleClickIndexPlus (event) {
        console.log('event');
        setIndex(index + 1);
    }
    function handleClickIndexMinus (event) {
        console.log('event');
        setIndex(index - 1);
    }
    const [index, setIndex] = useState(0);
    return (
        <div>
            <h1>{props.message}</h1>
            <h2>{index}</h2>
            <div>
                <button onClick={handleClickIndexPlus}>
                <h2>Add Index</h2>
                </button>
                <button onClick={handleClickIndexMinus}>
                <h2>Minus Index</h2>
                </button>
            </div>
        </div>
    );    
};
TestComponent.defaultProps = {
    message: "Default message",
}
const ArrowComponent = (props) => {

    const [count, setCount] = useState(0);

    function handleClickCountPlus () {
        setCount(count + 1)
    }

    function handleClickCountMinus () {
        setCount(count - 1)
    }
    return (
        <div>
            <div>{props.message} <h2>{count}</h2></div>
            <div>
                <button onClick={handleClickCountPlus}>
                    <h2>Add Count</h2>
                </button>
                <button onClick={handleClickCountMinus}>
                    <h2>Minus Count</h2>
                </button>
            </div>
            <TestComponent count={count}/>
        </div>
    );
};
export default ArrowComponent;