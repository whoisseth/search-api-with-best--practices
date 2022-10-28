import { Suspense } from 'react'
import Data from './components/Data'
export default function page() {
  return (
    <div>
      <p className="text-2xl font-bold"> This Second Page</p>
      <Suspense fallback={<div>Loading data...</div>}>
        <Data />
      </Suspense>
    </div>
  )
}
