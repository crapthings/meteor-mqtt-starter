import { useSubscribe, useTracker } from 'meteor/react-meteor-data'

export default function Component () {
  const isLoading = useSubscribe('test')

  const data = useTracker(() => Test.fetchData().fetch(), [])

  if (isLoading()) return null

  return (
    <div>{data.map((item) => (
      <div key={item._id}>{JSON.stringify(item)}</div>
    ))}</div>
  )
}
