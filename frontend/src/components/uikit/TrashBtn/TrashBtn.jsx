import React from "react";
import cs from "classnames";
import s from "./TrashBtn.module.scss";
export default function TrashBtn({ className, onClick }) {
  return (
    <button className={cs(s.btn, className)} onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.icon}
      >
        <path
          d="M16.0001 2C17.0979 1.99985 18.1561 2.41009 18.967 3.15018C19.7778 3.89026 20.2827 4.90673 20.3825 6H27.2001C27.5041 6.00009 27.7968 6.11559 28.019 6.32316C28.2411 6.53072 28.3762 6.81488 28.3969 7.11821C28.4177 7.42154 28.3225 7.72143 28.1306 7.95728C27.9387 8.19313 27.6645 8.34736 27.3633 8.3888L27.2001 8.4H26.2673L24.2401 25.968C24.1498 26.7478 23.776 27.4673 23.1898 27.9895C22.6036 28.5116 21.8459 28.8001 21.0609 28.8H10.9393C10.1543 28.8001 9.39656 28.5116 8.81037 27.9895C8.22417 27.4673 7.85038 26.7478 7.7601 25.968L5.7313 8.4H4.8001C4.51012 8.39999 4.22995 8.29497 4.01141 8.10437C3.79287 7.91377 3.65073 7.65049 3.6113 7.3632L3.6001 7.2C3.60011 6.91002 3.70513 6.62985 3.89572 6.41131C4.08632 6.19277 4.34961 6.05064 4.6369 6.0112L4.8001 6H11.6177C11.7175 4.90673 12.2224 3.89026 13.0332 3.15018C13.8441 2.41009 14.9023 1.99985 16.0001 2ZM13.6001 12C13.2081 12 12.8801 12.248 12.8129 12.5744L12.8001 12.7008V22.5008L12.8129 22.6256C12.8801 22.952 13.2081 23.2 13.6001 23.2C13.9921 23.2 14.3201 22.952 14.3873 22.6256L14.4001 22.4992V12.7024L14.3873 12.5744C14.3201 12.2496 13.9921 12 13.6001 12ZM18.4001 12C18.0081 12 17.6801 12.248 17.6129 12.5744L17.6001 12.7008V22.5008L17.6129 22.6256C17.6801 22.952 18.0081 23.2 18.4001 23.2C18.7921 23.2 19.1201 22.952 19.1873 22.6256L19.2001 22.4992V12.7024L19.1873 12.5744C19.1201 12.2496 18.7921 12.0016 18.4001 12.0016V12ZM16.0001 4.4C15.0321 4.4 14.2241 5.088 14.0401 6H17.9601C17.7745 5.088 16.9681 4.4 16.0001 4.4Z"
          fill="#181C27"
        />
      </svg>
    </button>
  );
}
