import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";
interface VoteStatsProps {
    totalVotes: number;
    positiveRate: number;
}
export default function VoteStats({
    Votes,
    totalVotes,
    positiveRate,
}: VoteStatsProps) {
    return (
        <div className={css.container}>
            <p className={css.stat}>
                Good: <strong>{Votes.good}</strong>
            </p>
            <p className={css.stat}>
                Neutral: <strong>{Votes.neutral}</strong>
            </p>
            <p className={css.stat}>
                Bad: <strong>{Votes.bad}</strong>
            </p>
            <p className={css.stat}>
                Total: <strong>{totalVotes}</strong>
            </p>
            <p className={css.stat}>
                Positive: <strong>{positiveRate}%</strong>
            </p>
        </div>
    );
}
