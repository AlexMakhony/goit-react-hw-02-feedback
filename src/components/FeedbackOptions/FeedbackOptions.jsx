
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
const { good, neutral, bad } = options;
return (
<>
    <button onClick={() => onLeaveFeedback("good")}>{good}</button>
    <button onClick={() => onLeaveFeedback("neutral")}>{neutral}</button>
    <button onClick={() => onLeaveFeedback("bad")}>{bad}</button>
</>
);
};