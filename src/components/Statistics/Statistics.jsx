import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
    <div> <FcLike /> Like: {good}</div>
    <div> <FcLikePlaceholder /> Normal: {neutral}</div>
    <div> <FcDislike /> Bad: {bad}</div>
    <div> <FcBullish /> Total: {total}</div>
    <div> <FcAcceptDatabase/> Хорошие отзвывы {positivePercentage}%</div>
    </>
    );