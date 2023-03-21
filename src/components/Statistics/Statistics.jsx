import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import {OpinionItem} from "./Statistics.styled";



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
    <OpinionItem> <FcLike /> Супер: {good}</OpinionItem>
    <OpinionItem> <FcLikePlaceholder /> Добре: {neutral}</OpinionItem>
    <OpinionItem> <FcDislike /> Погано: {bad}</OpinionItem>
    <OpinionItem> <FcBullish /> Загалом: {total}</OpinionItem>
    <OpinionItem> <FcAcceptDatabase/> Подяки {positivePercentage}%</OpinionItem>
    </>
    );