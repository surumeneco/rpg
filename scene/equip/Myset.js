/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    マイセットシーン

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Myset_scene",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "DisplayScene",
    init: function (option)
    {
      this.superInit(option);

      //thisが別のものを指す時に使えるように
      var self = this;

      //背景色
      this.backgroundColor = Black;

      let シーン移行ウィンドウ_余白 = 300;
      let シーン移行ウィンドウ_h = SCREEN_H - シーン移行ウィンドウ_余白;
      let シーン移行ウィンドウ_y = シーン移行ウィンドウ_余白 + シーン移行ウィンドウ_h / 2;
      let 移行シーン先 =
        [
          ["装備管理へ戻る", "装備管理"],
        ];
      this.シーン移行ボタン = Scene_buttons_window(移行シーン先, シーン移行ウィンドウ_y, シーン移行ウィンドウ_h);
      this.シーン移行ボタン.addChildTo(this);
      this.シーン移行ボタン.set_positions();
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/



    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        毎フレーム処理

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    update: function (app)
    {
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

