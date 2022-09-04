import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Episode: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  return (
    <div>
      episode {id}
    </div>
  )
}

export default Episode