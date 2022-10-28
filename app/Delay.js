import { useEffect, useState } from 'react'

export default function Delay({
  children,
  loading = 'loading ...',
  waitBeforeShow = 500,
}) {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    console.log(waitBeforeShow)
    setTimeout(() => {
      setIsShown(true)
    }, waitBeforeShow)
  }, [waitBeforeShow])

  return isShown ? children : loading
}
