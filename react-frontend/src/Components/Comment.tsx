import React from "react";
import date from './date';

export default function Comment({ comment }: any) {

    return (
        <>
            <div className="p-6 border border-gray-200 rounded-xl bg-gray-100">

                <article className="flex space space-x-5">
                    <div className="flex-shrink-0">
                        <img src="https://i.pravatar.cc/102?u" alt="" width="60" height="60" className="rounded" />
                    </div>
                    <div>
                        <header className="mb-5">
                            <h3 className="font-bold"></h3>
                            <p className="text-xs">Posted <time> {date(comment.created_at)} </time> </p>
                        </header>
                        <p>
                            {comment.body}
                        </p>
                    </div>
                </article>
            </div>

        </>
    )
}
