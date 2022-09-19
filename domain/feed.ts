export type FeedItem = {
  creator: string,
  title: string,
  link: string,
  pubDate: string,
  enclosure: {
    url: string,
    length: number,
    type: string
  },
  "dc:creator": string,
  content: string,
  contentSnippet: string,
  guid: string,
  isoDate: string,
  itunes: {
    summary: string,
    explicit: string,
    duration: string,
    image: string,
    episode: number,
    season: number
  }
}

export type FeedEpisode = {
  items: FeedItem[]
}

export type Feed = {
  episode: FeedEpisode,
  feedUrl: string,
  image: {
    link: string,
    url: string,
    title: string,
  }
  paginationLinks: {
    self: string,
  }
  creator: string,
  title: string,
  description: string,
  author: string,
  generator: string,
  link: string,
  language: string,
  copyright: string,
  lastBuildDate: string,
  itunes: {
    owner: {
      name: string,
      email: string,
    }
    image: string,
    categories: string[]
    categoriesWithSubs: [
      {
        name: string,
        subs?: string
      }
    ]
    author: string,
    summary: string,
    explicit: string,
  }
}