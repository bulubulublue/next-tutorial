'use server'
import { revalidatePath } from 'next/cache'

const addTodo = async (formData) => {
  const content = formData.get('content')
  const post = {
    title: content,
    author: '',
  }

  await fetch('http://localhost:3002/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  //默认数据存储成功后，页面没有进行更新，调用revalidatePath可以使页面进行更新，并重新发送get请求
  // 参数是当前页面的路由
  revalidatePath('/form')
}

export { addTodo }
