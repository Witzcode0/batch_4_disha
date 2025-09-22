import React, { useEffect, useState } from 'react'

function UEffect() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    // useEffect(function, dependancy);

    // useEffect(() => {
    //     callOnce();
    // }) // call every time

    useEffect(() => {
        callOnce();
    }, []) // call only once

    function callOnce() {
        console.log("Callonce function called");
    }

    function counterFunction() {
        console.log("ConterFunction: ", counter)
    }
    // useEffect(() => {
    //     counterFunction();
    // },[data]) // call on changing single state

    useEffect(() => {
        counterFunction();
    },[data, counter]) // call on changing both state
    



    return (
        <>
            <div>useEffect counter : {counter}</div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setData(data + 1)}>Data ({data})</button>

        </>

    )
}


function Post({ postId }) {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Fetch user data when postId prop changes
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPostData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [postId]); // Dependency array includes userId

  if (!postId) {
    return <div>Loading post ...</div>;
  }

  return (
    <div>
        {/* <p>{postData}</p> */}
      <h2><strong>Post Id</strong>: {postData.id}</h2>
      <p><strong>Title</strong>: {postData.title}</p>
      <p><strong>Body</strong>: {postData.body}</p>
    </div>
  );
}
 ;

export { UEffect, Post};