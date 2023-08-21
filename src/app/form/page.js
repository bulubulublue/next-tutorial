import Form from '@/components/form'

export default async function TodosPage() {
  const data = await fetch('http://localhost:3002/posts')
  const posts = await data.json()

  return (
    <>
      <h1>Todos</h1>
      {/* 在server component中不能使用onSubmit或者onClick等事件，否则会遇到错误：
      Error: Event handlers cannot be passed to Client Component props. */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add todo" />
        <button>Add</button>
      </form> */}

      <Form />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
