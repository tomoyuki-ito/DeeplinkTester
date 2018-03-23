const domain = 'mangajam'

const createURL = (path) => {
  return `${domain}://${path}`
}

export const listdata = [
  {
    title: 'ホーム',
    url: createURL('home'),
  },
  {
    title: '連載',
    url: createURL('serial'),
  },
  {
    title: '人気',
    url: createURL('popular'),
  },
  {
    title: '雑誌',
    url: createURL('magazine'),
  },
  {
    title: '設定',
    url: createURL('setting'),
  },
  {
    title: '課金',
    url: createURL('coincharge'),
  },
  {
    title: 'ホームタブ → 作品詳細',
    url: createURL('home/comicid=1831'),
  },
  {
    title: '人気タブ → ランキング',
    url: createURL('popular/ranking'),
  },
  {
    title: 'ホームタブ → 読書中',
    url: createURL('home/reading'),
  },
  {
    title: 'ホームタブ → 特集',
    url: createURL('home/featureid=1'),
  },
]
