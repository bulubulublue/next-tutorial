'use client'
import React from 'react'
import { addTodo } from '@/actions/actions'

export default function Form() {
  return (
    <form action={addTodo}>
      <input type="text" placeholder="add todo" name="content" />
      <button>Add</button>
    </form>
  )
}
