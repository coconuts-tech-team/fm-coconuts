import { atom } from 'jotai'
import Parser from 'rss-parser'
import { FeedEpisodes } from './domain/feed'

const feedsAtomCache: FeedEpisodes[] = []

export const idAtom = atom(0)

export const feedsAtom = atom(async () => {
  if (!feedsAtomCache.length) {
    const parser = new Parser()
    const feeds = await parser.parseURL('https://anchor.fm/s/4881bfd0/podcast/rss') as FeedEpisodes
    feedsAtomCache.push(feeds)
  }
  return feedsAtomCache[0]
})

export const feedAtom = atom((get) => {
  const id = get(idAtom)
  const feeds = get(feedsAtom)
  const tempItem = feeds.items.find(item => item.itunes.episode == id)
  return tempItem
})
