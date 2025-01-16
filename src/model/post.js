import React from 'react'

export class Post {
  constructor(title, content) {
    this.title = title
    this.content = content
    this.createdAt = new Date()
  }

  getPostData() {
    return {title: this.title, content: this.content, createdAt: this.createdAt};
  }
}
