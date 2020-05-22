import { h, Fragment } from "preact";
import { useState, useEffect } from 'preact/hooks'

export default connect(
  "selectAllComments",
  "doAddComment",
  ({ allComments, doAddComment }) => {
    const [comment, setComment] = useState("")
    useEffect(() => console.log('use effect hook'), [comment])
    return (
      <Fragment>
        <textarea onChange={e => setComment(e.target.value)} value={comment}></textarea>
        <button onClick={e => doAddComment(comment, -1)}>Add Comment</button>
        {allComments.length ? allComments.map(({text, parentId}) => <div>{text}</div>) :
        ""}
      </Fragment>
    );
  }
);
