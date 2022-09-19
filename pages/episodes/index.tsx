import type { GetServerSideProps, NextPage } from 'next'
import Parser from 'rss-parser'
import { CardComponent } from '../../components/cardComponent'
import { Card } from '../../domain/card'
import Link from 'next/link'

import { FeedEpisode } from '../../domain/feed'

const Episodes: NextPage = ({ data }) => {
  const episode = data as FeedEpisode
  return (
    <div className="container">
      <div className="columns is-multiline">
        {episode.items.map((item, index) => (
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


export const getServerSideProps = async (): Promise<GetServerSideProps> => {
  const parser = new Parser()
  const feed = await parser.parseURL('https://anchor.fm/s/4881bfd0/podcast/rss')
    .catch((err: any) => console.error(err));

  return { props: { data: feed } }
}

export default Episodes