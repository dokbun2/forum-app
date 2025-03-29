export const initialPosts = [
  {
    id: 1,
    title: '첫 번째 게시글입니다',
    content: '환영합니다! 이 사이트에 대한 소개글입니다.',
    author: 'admin',
    date: '2025-03-30',
    category: '공지사항',
    comments: [
      { id: 1, author: 'user1', content: '환영합니다!', date: '2025-03-30' },
      { id: 2, author: 'user2', content: '잘 부탁드립니다!', date: '2025-03-30' },
    ],
  },
  {
    id: 2,
    title: '사이트 이용 안내',
    content: '게시글 작성과 댓글 규칙에 대해 알려드립니다.',
    author: 'admin',
    date: '2025-03-30',
    category: '공지사항',
    comments: [],
  },
  {
    id: 3,
    title: '오늘의 주제: 프로그래밍',
    content: '프로그래밍에 관한 이야기를 나눠봐요.',
    author: 'user3',
    date: '2025-03-30',
    category: '기술',
    comments: [
      { id: 3, author: 'user4', content: '저는 파이썬을 좋아합니다.', date: '2025-03-30' },
    ],
  },
];