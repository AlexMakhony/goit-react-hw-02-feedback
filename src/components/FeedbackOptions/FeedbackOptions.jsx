import {OptionButtonsLike} from "./FeedbackOption.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
const { good, neutral, bad } = options;
return (
<>
    <OptionButtonsLike onClick={() => onLeaveFeedback("good")}>{good}</OptionButtonsLike>
    <OptionButtonsLike onClick={() => onLeaveFeedback("neutral")}>{neutral}</OptionButtonsLike>
    <OptionButtonsLike onClick={() => onLeaveFeedback("bad")}>{bad}</OptionButtonsLike>
</>
);
};