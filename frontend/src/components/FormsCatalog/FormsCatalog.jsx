import React from 'react'
import s from './FormsCatalog.module.scss';
import CatalogFormsBlock from './components/CatalogFormsBlock/CatalogFormsBlock';

export default function FormsCatalog({
    tabs,
    header,
}) {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>{header}</h1>
        <CatalogFormsBlock tabs={tabs}/>
      </div>
    </div>
  )
}
