import { mqttPublish } from '/imports/mqtt'

import Button from '../components/button'
import List from '../components/list'

export default function Home () {
  return (
    <div className='p-4 space-y-8'>
      <h1>Hello Kitty</h1>

      <div>
        <Button onClick={() => mqttPublish('/topic', 'test1')}>mqtt publish</Button>
      </div>

      <List />
    </div>
  )
}
