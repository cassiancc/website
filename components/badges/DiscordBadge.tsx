import styles from "./style.module.css";
import React, {useState} from "react";
import cn from "clsx";
import DiscordMark from "../icons/DiscordMark";
import config from '../../theme.config';

export default function DiscordBadge() {
  const [extraClass, setExtraClass] = useState('');

  return <>
    <div className="badge">
      <a href={config.chat.link} target="_blank">
        <button onMouseEnter={() => setExtraClass('active')}
                onMouseLeave={() => setExtraClass('inactive')}
                className={cn(styles.discodBadgeOuter, extraClass == 'active' ? styles.active : extraClass == 'inactive' ? styles.inactive : {}) + " w-48 h-16 flex flex-row justify-evenly items-center px-5 py-3 rounded-2xl"}>
          <div className="text-white mr-auto">
            <DiscordMark/>
          </div>
          <span className="text-2xl mx-auto">
            Discord
          </span>
        </button>
      </a>
    </div>
  </>
}
