import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Parser from 'rss-parser'
import { CardComponent } from '../../components/cardComponent'
import { Card } from '../../domain/card'
import Link from 'next/link'

import { FeedEpisodes } from '../../domain/feed'

const Episodes: NextPage = () => {

  const [episodes, setEpisodes] = useState<FeedEpisodes | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const parser = new Parser()
    parser.parseURL('https://anchor.fm/s/4881bfd0/podcast/rss')
      .then((feeds) => {
        const feedEpisodes = feeds as FeedEpisodes
        setEpisodes(feedEpisodes)
        setLoading(false)
      })
      .catch((err: any) => console.error(err))
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!episodes) return <p>No data found.</p>

  return (
    <div className="container">
      <div className="columns is-multiline">
        {episodes.items.map((item, index) => (
          <div className="column is-3">
            <Link href={`/episodes/${item.itunes.episode}`}>
              <a>
                <CardComponent {...{ key: index, title: item.title, pubDate: item.pubDate, image: item.itunes.image } as Card} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes