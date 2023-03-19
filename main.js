/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    中央処理

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.main(function ()
{
  var app = GameApp
    ({
      //画面サイズ設定
      // width: SCREEN_W,
      // height: SCREEN_H,

      //アセット読み込み
      // assets: ASSETS,

      //fps設定
      fps: 60,

      startLabel: "タイトル",
      scenes:
        [
          {
            label: "タイトル",
            className: "Title_scene",
          },
          {
            label: "ホーム",
            className: "Home_scene",
          },
          {
            label: "クエスト選択",
            className: "Quest_scene",
          },
          {
            label: "イベント",
            className: "Event_scene",
          },
          {
            label: "アストラルアーカイブ",
            className: "Astral_archive_scene",
          },
          {
            label: "戦闘",
            className: "Battle_scene",
          },
          {
            label: "リザルト",
            className: "Result_scene",
          },
          {
            label: "採集隊メニュー",
            className: "Exprole_scene",
          },
          {
            label: "装備管理",
            className: "Equip_scene",
          },
          {
            label: "装備変更",
            className: "Equip_change_scene",
          },
          {
            label: "ギア変更",
            className: "Gear_change_scene",
          },
          {
            label: "マイセット",
            className: "Myset_scene",
          },
          {
            label: "アイテム管理",
            className: "Storage_scene",
          },
          {
            label: "アイテム購入",
            className: "Store_scene",
          },
          {
            label: "アイテム調合",
            className: "Mix_item_scene",
          },
          {
            label: "鍛冶屋",
            className: "Forge_scene",
          },
          {
            label: "武器生産",
            className: "Make_weapon_scene",
          },
          {
            label: "防具生産",
            className: "Make_armor_scene",
          },
          {
            label: "ギア生産",
            className: "Make_gear_scene",
          },
          {
            label: "設定",
            className: "Option_scene",
          },
          {
            label: "リフレッシュ",
            className: "Refresh_scene"
          }
        ]
    });
  app.run();
});
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

