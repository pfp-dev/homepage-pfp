// 会社情報の定数
export const COMPANY_INFO = {
  // 設立年（YYYY年形式）
  ESTABLISHED_YEAR: 2006,
  // 現在の年を取得
  getCurrentYear: () => new Date().getFullYear(),
  // 設立からの経過年数を自動算出
  getYearsSinceEstablishment: () => {
    const currentYear = new Date().getFullYear();
    return currentYear - COMPANY_INFO.ESTABLISHED_YEAR;
  },
  // 設立年を日本語表記で取得
  getEstablishmentYearText: () => `${COMPANY_INFO.ESTABLISHED_YEAR}年`,
  // 経過年数を日本語表記で取得
  getYearsSinceEstablishmentText: () => `${COMPANY_INFO.getYearsSinceEstablishment()}年`,
  // 経過年数に「以上」を付けた表記
  getYearsSinceEstablishmentTextWithOver: () => `${COMPANY_INFO.getYearsSinceEstablishment()}年以上`,
};
