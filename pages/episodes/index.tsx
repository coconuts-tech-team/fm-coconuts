import type { NextPage } from 'next'
import { CardComponent } from '../../components/cardComponent'
import { Card } from '../../domain/card'
import Link from 'next/link'
import { useAtomValue } from 'jotai'

import { feedsAtom } from '../../store'

const Episodes: NextPage = () => {

  const feeds = useAtomValue(feedsAtom)

  return (
    <div className="container">
      <div className="columns is-multiline">
        {feeds.items.map((item, index) => (
          <div className="column is-3" key={`div-${index}`}>
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