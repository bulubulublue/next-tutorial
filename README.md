## branch

server-action: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions

## json-server

启动

```
json-server --watch db.json --port 3002
```

发送一个 get 请求

```
async function getPosts(){
    const response = await fetch('http://localhost:3002/posts')
    return await response.json()
}
```
