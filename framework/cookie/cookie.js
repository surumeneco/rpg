/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    グローバル変数

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

//cookie <- 違くね？
var load_type = window.performance.navigation.type;

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    関数定義

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
    リロード時にcookieを読み込む関数
    引数：data (仮想配列)
          {
            key: value,
            ...
          }
  ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
function reload_check(app)
{
  if (window.performance)
  {
    if (load_type == 1)
    {
      reloading_cookies();
      load_type = -1;
      return true;
    }
  }
  return false;
}

/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
    cookieをセットする関数
    引数：data (仮想配列)
          {
            key: value,
            ...
          }
  ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
const set_cookies = function (data)
{
  let データ = "";

  let 保存日数 = 30;
  let 保存期間 = new Date();
  保存期間.setTime(保存期間.getTime() + 1000 * 60 * 60 * 24 * 保存日数);
  保存期間.toUTCString();

  for (let key in data)
  {
    データ = key + "=" + data[key] + ";";
    データ += "expires=" + 保存期間 + ";";
    document.cookie = データ;
  }
};

/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
    cookieを削除する関数
    引数：data (配列)
          [ key... ]
  ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
const delete_cookies = function (keys)
{
  let データ = "";

  let 保存日数 = 30;
  let 保存期間 = new Date();
  保存期間.setTime(保存期間.getTime() + 1000 * 60 * 60 * 24 * 保存日数);
  保存期間.toUTCString();

  for (let key of keys)
  {
    データ = key + "=;max-age=0";
    cookie = データ;
  }
};

/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
    cookieを取得する関数
    引数：data (配列)
          [ key... ]
    戻り値：cookieが無ければnull
            cookieが有ればresult (仮想配列)
            {
              key: value
              ...
            }
  ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
const get_cookies = function (keys)
{
  if (document.cookie != "")
  {
    let data = document.cookie.split(";");
    let splited_data;
    let result = {};

    data.forEach(
      function (key_and_value)
      {
        splited_data = key_and_value.split("=");
        splited_data[0] = splited_data[0].trim();
        if (splited_data[0] == keys)
        {
          result[splited_data[0]] = splited_data[1];
        }
      }
    );
    return result;
  }
  return null;
}

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

