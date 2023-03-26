/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    キャラクターオブジェクト

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Character",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    init: function ()
    {
      this.現在体力 = 0;
      this.武器;
      this.防具 = new Array();
      this.技 = new Array();
      this.バフ = new Array();
      this.デバフ = new Array();

      this.最大体力 = function ()
      {
        let 体力 = キャラクター基本体力;
        return 体力;
      }

      this.機動力 = function ()
      {
        let 機動力 = 0;
        return 機動力;
      }

      this.攻撃力 = function ()
      {
        let 攻撃力 = 0;
        return 攻撃力;
      }

      this.属性値 = function ()
      {
        let 属性値 =
        {
          "火炎": 0,
          "水氷": 0,
          "風雷": 0,
          "土石": 0
        };
        return 属性値;
      }

      this.状態異常値 = function ()
      {
        let 状態異常値 =
        {
          "毒": 0,
          "麻痺": 0,
          "睡眠": 0
        };
        return 状態異常値;
      }

      this.防御力 = function ()
      {
        let 防御力 = 0;
        return 防御力;
      }

      this.属性耐性 = function ()
      {
        let 属性耐性 =
        {
          "火炎": 0,
          "水氷": 0,
          "風雷": 0,
          "土石": 0
        };
        return 属性耐性;
      }

      this.発動スキル = function ()
      {
        let 発動スキル = new Array();
        return 発動スキル;
      }

      this.スキルレベル取得 = function (スキル)
      {
        let レベル一覧 = new Array;
        for (let i = 0; i < スキル.length; i++)
        {
        }
        return レベル一覧;
      }

      this.威力 = function (技名)
      {
        let 威力 =
        {
          "物理": 0,
          "属性":
          {
            "火炎": 0,
            "水氷": 0,
            "風雷": 0,
            "土石": 0
          }
        };
        return 威力;
      }
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
