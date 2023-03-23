/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    シーンボタンオブジェクト

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Scene_button",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "RectangleShape",
    init: function (button_h, text, nextscene)
    {
      let ボタン幅 = SCREEN_W * 0.8;
      let ボタン色 = White;
      let タップ中の色 = lightCyan;
      let ふち色 = Cyan;
      let フォントサイズ = 24;
      let テキスト色 = Black;
      this.押下中 = false;


      this.superInit(
        {
          width: ボタン幅,
          height: button_h,
          fill: ボタン色,
          stroke: ふち色, strokeWidth: 15,
          cornerRadius: button_h / 2
        }
      );
      this.setInteractive(true);


      this.テキスト = Label(text).addChildTo(this);
      this.テキスト.fontSize = フォントサイズ;
      this.テキスト.fill = テキスト色;
      this.テキスト.setPosition(0, 0);

      this.次のシーン = nextscene;


      //ボタンを押し始めたら色を変える
      this.on("pointstart", function ()
      {
        this.fill = タップ中の色;
        this.押下中 = true;
      });

      //ボタンから離れたら色を戻す
      this.on("pointout", function ()
      {
        this.fill = ボタン色;
        this.押下中 = false;
      });

      //押したらシーン遷移
      this.on("pointend", function ()
      {
        if (this.押下中)
        {
          this.parent.parent.exit(this.次のシーン);
        }
      });

      this.set_position = function (y)
      {
        this.setPosition(0, y);
      };
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    ボタンスクロールオブジェクト

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Scene_buttons_window",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "RectangleShape",
    init: function (texts, y, window_height)
    {
      this.superInit(
        {
          width: SCREEN_W,
          height: window_height,
          fill: "transparent",
          stroke: White,
          strokeWidth: 10, cornerRadius: 0
        }
      );
      this.setPosition(CENTER_X, y);
      this.setInteractive(true);


      this.押下中 = false;
      this.慣性 = 0;
      this.スクロール開始時間 = 0;
      this.スクロール開始位置 = 0;
      this.スクロール距離 = 0;
      this.上下余白 = 30;
      this.前フレームの座標 = 0;

      this.ボタン高さ = 50;
      this.ボタン間隔 = 50;

      this.上限 = - window_height / 2 + this.ボタン高さ / 2 + this.上下余白;
      this.下限 = window_height / 2 - this.ボタン高さ / 2 - this.上下余白;
      this.始端位置 = this.上限;
      this.終端位置 = this.上限;


      this.ボタン = new Array();
      for (let i = 0; i < texts.length; i++)
      {
        this.ボタン.push(Scene_button(this.ボタン高さ, texts[i][0], texts[i][1]));
        this.ボタン[i].addChildTo(this);
      }

      this.set_positions = function ()
      {
        let pos = this.始端位置 + this.スクロール距離;
        for (let i = 0; i < this.ボタン.length; i++)
        {
          this.ボタン[i].set_position(pos);
          pos += this.ボタン高さ + this.ボタン間隔;
        }
        pos -= this.ボタン高さ + this.ボタン間隔;
        this.終端位置 = pos;
      }
      this.set_positions;


      this.on("pointstart", function (e)
      {
        this.押下中 = true;
        this.スクロール開始時間 = time;
        this.スクロール開始位置 = e.pointer.y;
        this.前フレームの座標 = e.pointer.y;
        this.スクロール距離 = 0;
      });

      this.on("pointmove", function (e)
      {
        this.スクロール距離 = e.pointer.y - this.スクロール開始位置;

        let ポインター差分 = e.pointer.y - this.前フレームの座標;
        if (ポインター差分 * ポインター差分 < 1)
        {
          this.スクロール開始時間 = time;
          this.スクロール開始位置 = e.pointer.y;
          this.始端位置 += this.スクロール距離;
          this.スクロール距離 = 0;
        }
        this.前フレームの座標 = e.pointer.y;
      });

      this.on("pointend", function (e)
      {
        this.押下中 = false;
        let スクロール時間 = time - this.スクロール開始時間;
        this.慣性 = this.スクロール距離 / (スクロール時間 / 10);
        this.始端位置 += this.スクロール距離;
        this.スクロール距離 = 0;
      });
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/



    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        常時実行
    
      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    update: function (app)
    {
      if (!this.押下中)
      {
        if (this.終端位置 - this.始端位置 > this.下限 - this.上限)
        {
          if (this.始端位置 > this.上限)
          {
            this.慣性 = 0;
            this.始端位置 -= (this.始端位置 - this.上限) / (app.fps / 5) + 1;
            if (this.始端位置 < this.上限)
            {
              this.始端位置 = this.上限;
            }
          }
          else if (this.終端位置 < this.下限)
          {
            this.慣性 = 0;
            this.始端位置 += (this.下限 - this.終端位置) / (app.fps / 5) + 1;
            if (this.終端位置 > this.下限)
            {
              this.始端位置 = this.上限;
            }
          }
          else
          {
            this.始端位置 += this.慣性;
            if (this.慣性 > 0)
            {
              this.慣性 -= this.慣性 / (app.fps / 5);
              if (this.慣性 < 0)
              {
                this.慣性 = 0;
              }
            }
            if (this.慣性 < 0)
            {
              this.慣性 += -this.慣性 / (app.fps / 5);
              if (this.慣性 > 0)
              {
                this.慣性 = 0;
              }
            }
          }
        }
        else
        {
          if (this.始端位置 > this.上限)
          {
            this.慣性 = 0;
            this.始端位置 -= (this.始端位置 - this.上限) / (app.fps / 5) + 1;
            if (this.始端位置 < this.上限)
            {
              this.始端位置 = this.上限;
            }
          }
          else
          {
            this.慣性 = 0;
            this.始端位置 += (this.上限 - this.始端位置) / (app.fps / 5) + 1;
            if (this.始端位置 > this.上限)
            {
              this.始端位置 = this.上限;
            }
          }
        }
      }
      this.set_positions();
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

