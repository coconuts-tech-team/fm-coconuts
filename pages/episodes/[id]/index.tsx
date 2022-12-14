import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAtom, useAtomValue } from 'jotai'

import { idAtom, feedAtom } from '../../../store'

const Episode: NextPage = () => {

  const router = useRouter()

  const [id, setId] = useAtom(idAtom)
  const feed = useAtomValue(feedAtom)

  useEffect(() => {
    const idParam = router.query.id as string
    setId(Number(idParam))
    console.log(`useEffect set ${idParam}`, feed)
  }, [router])

  return (
    <div>
      <Link href="/episodes">
        <a>
          ←戻る
        </a>
      </Link>
      <h1>episode : {id}</h1>
      <h2>{feed?.title}</h2>
      {String(feed?.content).split(/(\n)/).map((content, index) => (
        <React.Fragment key={index}>
          {content}<br />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Episode