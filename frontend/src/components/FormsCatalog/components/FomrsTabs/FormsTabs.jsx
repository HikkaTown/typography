import { ColoredScrollbars } from '@/components/CatalogPage/components/CatalogTabs/CatalogTabs'
import Tab from '@/components/uikit/Tab/Tab'
import React from 'react'
import cs from 'classnames'
import s from './FormsTabs.module.scss'

export default function FomrsTabs({
    className,
    data,
    isActive,
    setIsActive
}) {
    
  return (
    <ColoredScrollbars
        className={cs(s.container, className)}
        key={isActive + 8383}
        universal={true}
    >
        {data?.length > 0 ? 
            data.sort((a, b) => a - b).map(item => {
                return (
                    <Tab
                        className={s.tab}
                        key={item.id}
                        isActive={isActive === item.id}
                        onClick={() => {
                            setIsActive(item.id)
                        }}
                    >
                        {item.variantName}
                    </Tab>
                )
            })
         : null}
    </ColoredScrollbars>
  )
}
