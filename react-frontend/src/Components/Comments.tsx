import React from "react";
import date from './date';
import Comment from "./Comment";

export default function Comments({ comments }: any) {
    return (
        <>
        {comments.map((comment:any)=>(

            <Comment key={comment.id} comment={comment} />
        ))}
        </>
    )
}
