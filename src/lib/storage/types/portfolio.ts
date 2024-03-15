export type PortfolioStats = {
  videoViewsCount?: number,
  audioListensCount?: number,
  projectStarsCount?: number,
  textViewsCount?: number,
  commentsCount?: number,
}

export type Portfolio = {
  noteId: number,
  title: string,
  link: string,
  date: string,
  summary: string,
  cover: string,
} & PortfolioStats
