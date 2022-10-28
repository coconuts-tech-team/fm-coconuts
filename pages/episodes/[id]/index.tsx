import type { NextPage } from 'next'
import { useEffect } from 'react'
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
      {JSON.stringify(feed)}
    </div>
  )
}

export default Episode