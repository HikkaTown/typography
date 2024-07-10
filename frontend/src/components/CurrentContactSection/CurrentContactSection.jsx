import React from 'react';
import styles from './styles.module.scss';
import { PATH_IMAGE } from '@/lib/const';
import PathBlock from '@/components/PathBlock/PathBlock';
import cn from 'classnames';
import Link from 'next/link';

export const CurrentContactSection = ({ data, contacts }) => {
  return (
    <>
      <section>

        <div className={styles.container}>
          <h1 className={styles.header}>
            {data.name}
          </h1>
          <iframe src={data.mapUrl} className={styles.iframe}/>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <h2 className={styles.header_path}>Информация</h2>
          <div className={styles.info}>
            <div className={styles.info_block}>
              <div className={styles.info_item}>
                <img src={`${PATH_IMAGE}${data.addressIcon}`} alt="#" className={styles.icon}/>
                <p className={styles.info_header}>Адрес</p>
              </div>
              <p className={styles.info_text}>{data.address}</p>
            </div>
            <div className={styles.info_block}>
              <div className={styles.info_item}>
                <img src={`${PATH_IMAGE}${data.workIcon}`} alt="#" className={styles.icon}/>
                <p className={styles.info_header}>Время работы</p>
              </div>
              <p className={styles.info_text}>{data.workTime}</p>
            </div>
            <div className={styles.info_block}>
              <div className={styles.info_item}>
                <img src={`${PATH_IMAGE}${data.phoneIcon}`} alt="#" className={styles.icon}/>
                <span className={styles.info_header}>Телефон офиса</span>
              </div>
              <a href={`tel:${data.phone}`} className={cn(styles.info_text, styles.info_link)}>{data.phone}</a>
            </div>
            <div className={styles.info_block}>
              <div className={styles.info_item}>
                <img src={`${PATH_IMAGE}${data.mailIcon}`} alt="#" className={styles.icon}/>
                <span className={styles.info_header}>Почта офиса</span>
              </div>
              <a href={`mailto:${data.email}`} className={cn(styles.info_text, styles.info_link)}>{data.email}</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={cn(styles.container, styles.path_container)}>
          <h2 className={styles.header_path}>Как добраться до офиса</h2>
          <PathBlock data={data} offBorder hideHeader/>
        </div>
      </section>
      {data.columns.length ? (
        <section>
          <div className={styles.container}>
            <div className={styles.columns}>
              {data.columns?.map((column) => {
                return (
                  <div className={styles.column}>
                    <h3 className={styles.column_header}>{column.header}</h3>
                    <ul className={styles.list}>
                      {column.lines?.map((line, index) => (
                        <li key={index} className={styles.line}>
                          {line?.linkUrl ? (
                            <Link href={line.linkUrl}>
                              <a className={styles.line_url}>{line.text}</a>
                            </Link>
                          ) : <span className={styles.line_notUrl}>{line.text}</span>}
                        </li>))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}
      <section>
        <div className={styles.container}>
          <h2 className={styles.header_path}>Наши офисы</h2>
          <div className={styles.offices}>
            {contacts.filter((contact) => contact.url !== data.url).map((contact, index) => {
              return (<div key={index} className={styles.office}>
                <Icon/>
                <Link href={`/contacts/${contact.url}`}>
                  <a className={styles.office_link}>{contact.name}</a>
                </Link>
              </div>)
            })}
          </div>
        </div>
      </section>
    </>
  );
};


const Icon = () => {
  return (
    <svg className={styles.svg} width="24" height="24" fill="#C511A1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M18 7.85366C18 12.2439 12 17.5 12 17.5C12 17.5 6 12.2439 6 7.85366C6 4.62077 8.68629 2 12 2C15.3137 2 18 4.62077 18 7.85366ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
      />
      <path d="M19 22V20H5V22H19Z"/>
    </svg>

  )
}