import { useState } from "react"

export const BlogFrame = () => {
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [posts, setPosts] = useState(["Welcome All, Drop Your First Post!"])

    const updatePosts = (e) => {
        e.preventDefault()
        if (message.length < 1) {
            setError("Post must contain a message")
            return error;
        }
        setPosts([message, ...posts]);
        setMessage("")
        setError("")
        return posts;

    }
    return (
        <div>

            <div className="flex-col l-nav">

                <button>Click me!</button>
                <button>Click me!</button>
                <button>Click me!</button>
                <button>Click me!</button>
                <button>Click me!</button>

            </div>

            <h2>Welcome users</h2>

            <div className="flex">

                <div className="blog-box border">

                    {
                        posts.map(post => {
                            return (
                                <div className="post">
                                    {post}
                                </div>
                            )
                        })
                    }

                </div>

                <div id="p-form">

                    <form onSubmit={updatePosts} className="flex-col">
                        {error}
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button >Post</button>

                    </form>

                </div>

            </div>

        </div>
    )
}