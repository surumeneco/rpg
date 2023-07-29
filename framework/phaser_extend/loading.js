/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
    シーン読み込みを書き込む関数
    scene_file_names  (配列)
  ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
const LoadScene = function (scene_file_names)
{
  for (let scene_file_name of scene_file_names)
  {
    document.write('<script src="./scene/' + scene_file_name + '.js"></script>');
  }
};
/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/



/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
    クラス読み込みを書き込む関数
    class_file_names  (配列)
  ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
const LoadClass = function (class_file_names)
{
  for (let class_file_name of class_file_names)
  {
    document.write('<script src="./class/' + class_file_name + '.js"></script>');
  }
};
/*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/

