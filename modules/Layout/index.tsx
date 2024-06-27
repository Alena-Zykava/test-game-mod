import type {ReactNode} from 'react'

import DocumentHead from '@/modules/Layout/DocumentHead'

import styles from './style.module.scss'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <DocumentHead title={'Post-battle screen'} faviconUrl={''} description={'Post-battle screen'} />
      <div className={styles['main-wrapper']}>{children}</div>
    </>
  )
}

export default Layout
