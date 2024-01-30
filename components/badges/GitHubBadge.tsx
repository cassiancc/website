import GitHubMark from "../icons/GitHubMark";
import styles from "./style.module.css";
import React, {useState} from "react";
import cn from "clsx";

export default function GitHubBadge() {
  const [extraClass, setExtraClass] = useState('');

  return <>
    <div className="badge">
      <a href="https://github.com/Sinytra" target="_blank">
        <button onMouseEnter={() => setExtraClass('active')}
                onMouseLeave={() => setExtraClass('inactive')}
                className={cn(styles.badgeOuter, extraClass == 'active' ? styles.active : extraClass == 'inactive' ? styles.inactive : {}) + " badgeOuter w-48 h-16 flex flex-row justify-evenly items-center px-5 py-3 rounded-2xl"}>
          <div className="text-white mr-auto">
            <GitHubMark/>
          </div>
          <span className="text-2xl mx-auto">
            GitHub
          </span>
        </button>
      </a>
    </div>
  </>
}
