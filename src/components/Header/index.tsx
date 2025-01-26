// rafceと入力後にタブキーを押します🤗
import React from "react";

// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗

import style from "./style.module.scss";
import Link from "next/link";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";

const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li>
          <Link href={"/login"}>ログイン</Link>
          <AccessibilityNewRoundedIcon />
        </li>
        <li>
          <Link href={"/signup"}>登録</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
