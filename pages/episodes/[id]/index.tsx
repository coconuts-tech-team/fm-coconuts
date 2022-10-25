import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Parser from 'rss-parser'

import { FeedEpisodes, FeedItem } from '../../../domain/feed'

const Episode: NextPage = () => {

  const [episode, setEpisode] = useState<FeedItem | undefined>(undefined)
  const [isLoading, setLoading] = useState(false)

  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    setLoading(true)

    //TODO fetch parse作業は別コンポーネントで切り出す
    const parser = new Parser()
    parser.parseURL('https://anchor.fm/s/4881bfd0/podcast/rss')
      .then((feeds) => {
        const feedEpisodes = feeds as FeedEpisodes
        const feedEpisode = feedEpisodes.items.find((item: FeedItem) => String(item.itunes.episode) === id)
        setEpisode(feedEpisode)
        setLoading(false)
      })
      .catch((err: any) => console.error(err))
  }, [id])


  if (isLoading) return <p>Loading...</p>
  if (!episode) return <p>No data found.</p>

  return (
    <div>
      {JSON.stringify(episode)}
    </div>
  )
}

export default Episode