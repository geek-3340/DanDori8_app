/**
 * 認証画面（ログイン / 新規登録）
 * - PC は左ブランド + 右フォームの横並び、スマホは縦積み。
 * - タブは「ログイン」選択中の見た目で固定。切替＆ユーザー名欄の出し分けは状態管理側で。
 */
export default function Auth() {
  return (
    <div className="flex min-h-screen flex-col font-['IBM_Plex_Sans_JP'] md:flex-row">
      {/* ===== 左：ブランドパネル ===== */}
      <div className="relative flex flex-col justify-between overflow-hidden bg-[#1A5A9C] px-[30px] py-9 text-white md:w-[42%]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(-45deg,#23A9C6_0_12px,#124272_12px_24px)]" />
        <div className="mt-2.5 flex items-center gap-px font-['Zen_Kaku_Gothic_New'] text-xl font-black">
          DanDori<span className="text-[#8FE3F1]">8</span>
        </div>
        <div>
          <h2 className="m-0 mb-2.5 font-['Zen_Kaku_Gothic_New'] text-2xl font-black leading-[1.35]">
            現場も、工程も、
            <br />
            手のひらで段取り。
          </h2>
          <p className="m-0 text-[13px] leading-[1.8] text-[#C9DBEC]">
            個人の施工管理者のための、シンプルな工程管理。
          </p>
        </div>
        <a className="cursor-pointer font-['IBM_Plex_Mono'] text-[12.5px] text-[#8FE3F1]">← トップへ戻る</a>
      </div>

      {/* ===== 右：フォーム ===== */}
      <div className="flex flex-1 flex-col justify-center bg-white px-[30px] py-[34px]">
        <div className="mx-auto w-full max-w-[340px]">
          {/* タブ */}
          <div className="mb-6 flex rounded-[10px] bg-[#EFF3F7] p-1">
            {/* active: 白背景 + shadow */}
            <button
              type="button"
              className="flex-1 rounded-[7px] border-0 bg-white p-[9px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#124272] shadow-[0_1px_3px_rgba(18,66,114,.12)]"
            >
              ログイン
            </button>
            {/* inactive: 透明背景 */}
            <button
              type="button"
              className="flex-1 rounded-[7px] border-0 bg-transparent p-[9px] font-['Zen_Kaku_Gothic_New'] text-[13px] font-bold text-[#5B6B7E] shadow-none"
            >
              新規登録
            </button>
          </div>

          <div className="grid gap-3.5">
            {/* ユーザー名（新規登録タブのときのみ表示） */}
            <label className="grid gap-[5px]">
              <span className="text-xs font-medium text-[#5B6B7E]">ユーザー名</span>
              <input
                placeholder="現場太郎"
                className="rounded-[9px] border border-[#D8E0E8] bg-[#FBFDFE] px-[13px] py-[11px] font-['IBM_Plex_Sans_JP'] text-sm focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
              />
            </label>

            <label className="grid gap-[5px]">
              <span className="text-xs font-medium text-[#5B6B7E]">メールアドレス</span>
              <input
                placeholder="you@example.com"
                className="rounded-[9px] border border-[#D8E0E8] bg-[#FBFDFE] px-[13px] py-[11px] font-['IBM_Plex_Sans_JP'] text-sm focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
              />
            </label>

            <label className="grid gap-[5px]">
              <span className="text-xs font-medium text-[#5B6B7E]">パスワード</span>
              <input
                type="password"
                placeholder="••••••••"
                className="rounded-[9px] border border-[#D8E0E8] bg-[#FBFDFE] px-[13px] py-[11px] font-['IBM_Plex_Sans_JP'] text-sm focus:border-transparent focus:outline focus:outline-2 focus:outline-[#23A9C6]"
              />
            </label>

            <button
              type="button"
              className="mt-1 rounded-[10px] border-0 bg-[#23A9C6] p-[13px] font-['Zen_Kaku_Gothic_New'] text-sm font-bold text-white shadow-[0_6px_16px_rgba(35,169,198,.28)]"
            >
              {/* ログイン / 新規登録 でラベル切替 */}
              ログイン
            </button>

            <a className="cursor-pointer text-center font-['IBM_Plex_Sans_JP'] text-xs text-[#5B6B7E]">
              パスワードをお忘れですか？
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
