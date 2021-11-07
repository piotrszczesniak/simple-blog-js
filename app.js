const articles = [
    {
        id: 1,
        author: {
            imgUrl: 'https://64.media.tumblr.com/avatar_8305fe1b40f1_128.png',
            name: 'Piotr',
        },
        title: 'First blog post',
        excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 1636046438076,
        thumbnailUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAYSoc4vl0KEyHpkEHDndkxbDLxAiqAZmGQ&usqp=CAU',
    },
    {
        id: 2,
        author: {
            imgUrl: 'https://64.media.tumblr.com/avatar_8305fe1b40f1_128.png',
            name: 'Malwinka',
        },
        title: 'First blog post',
        excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 1636046438076,
        thumbnailUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAYSoc4vl0KEyHpkEHDndkxbDLxAiqAZmGQ&usqp=CAU',
    },
]

const mainElement = document.querySelector('.main')

function render() {
    articles.forEach((article) => {
        const articleElement = document.createElement('article')
        articleElement.classList.add('article')

        const articleContentElement = document.createElement('div')
        articleContentElement.classList.add('article__content')
        articleElement.appendChild(articleContentElement)

        const articleAuthorElement = document.createElement('div')
        articleAuthorElement.classList.add('article__author')
        articleContentElement.appendChild(articleAuthorElement)

        const authorImgElement = document.createElement('img')
        authorImgElement.classList.add('author__img')
        authorImgElement.src = article.author.imgUrl
        authorImgElement.alt = article.author.name
        articleAuthorElement.appendChild(authorImgElement)

        const authorNameElement = document.createElement('span')
        authorNameElement.classList.add('author__name')
        authorNameElement.innerText = article.author.name
        articleAuthorElement.appendChild(authorNameElement)

        const articleTextElement = document.createElement('div')
        articleTextElement.classList.add('article__text')
        articleContentElement.appendChild(articleTextElement)

        const postHeaderElement = document.createElement('h1')
        postHeaderElement.innerText = article.title
        articleTextElement.appendChild(postHeaderElement)

        const postParagraphElement = document.createElement('p')
        postParagraphElement.innerText = article.excerpt
        articleTextElement.appendChild(postParagraphElement)

        const postDateElement = document.createElement('span')
        postDateElement.innerText = article.date
        articleTextElement.appendChild(postDateElement)

        const articleImgElement = document.createElement('div')
        articleImgElement.classList.add('article__image')
        articleElement.appendChild(articleImgElement)

        const articleThumbnailElement = document.createElement('img')
        articleThumbnailElement.src = article.thumbnailUrl
        articleImgElement.appendChild(articleThumbnailElement)

        mainElement.appendChild(articleElement)
    })
}

render()
