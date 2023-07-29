/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    データ読み込み関数
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const loading = function (path, converting_function)
{
  load_JSON(path, converting_function);
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    JSONファイル読み込み関数
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const load_JSON = function (path, callback)
{
  let requestURL = path;
  let request = new XMLHttpRequest();

  request.onreadystatechange = function ()
  {
    if (request.readyState == 4 && request.status == 200)
    {
      console.log("json file was loaded successfully");
    }
  };

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function ()
  {
    let data = request.response;
    data = JSON.parse(JSON.stringify(data));
    console.log("end loading json file");
    callback(data);
  }
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

