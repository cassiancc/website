import styles from "./style.module.css";
import React, {useState} from "react";
import cn from "clsx";
import RocketLaunch from "../icons/RocketLaunch";

export default function GetStartedBadge() {
  const [extraClass, setExtraClass] = useState('');

  return <>
    <div className="badge">
      <a href="/docs">
        <button onMouseEnter={() => setExtraClass('active')}
                onMouseLeave={() => setExtraClass('inactive')}
                className={cn(styles.badgeOuter, extraClass == 'active' ? styles.active : extraClass == 'inactive' ? styles.inactive : {}) + " badgeOuter w-56 h-16 flex flex-row justify-evenly items-center px-5 py-3 rounded-2xl"}>
          <div className="text-white mr-auto">
            <RocketLaunch />
          </div>
          <span className="text-2xl mx-auto">
            Get started
          </span>
        </button>
      </a>
    </div>
  </>
}
