export const products = [
  {
    id: 1,
    categoryId: 1,
    title: 'Product 1',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 13,
    categoryId: 1,
    title: 'Product 2',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 123,
    categoryId: 1,
    title: 'Product 3',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 21,
    categoryId: 3,
    title: 'Product 1',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 221,
    categoryId: 3,
    title: 'Product 2',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 61,
    categoryId: 3,
    title: 'Product 3',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 31,
    categoryId: 2,
    title: 'Product 1',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 771,
    categoryId: 2,
    title: 'Product 2',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 4531,
    categoryId: 2,
    title: 'Product 3',
    imgSrc: 'https://picsum.photos/600/300/?image=25',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]

export const getProducts = categoryId => {
  return products.filter(product => product.categoryId === categoryId)
}
