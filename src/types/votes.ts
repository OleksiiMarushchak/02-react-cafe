export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}

export type VoteType = "good" | "neutral" | "bad";


export interface VoteStatsProps {
    votes: {
        good: number;
        neutral: number;
        bad: number;
    };
    totalVotes: number;
    positiveRate: number;
}

export interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}