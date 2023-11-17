import Image from 'next/image'
import styles from './page.module.css'

interface MyComponentProps {
  p1: string;
}

export default function Index(props: MyComponentProps) {
  return (
    <>
      <h1>Hello World!</h1>
      <p>{props.p1}</p>
    </>
  )
}
