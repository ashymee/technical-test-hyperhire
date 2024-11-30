export const dynamic = 'force-static';

export async function GET() {
  const data = {
    desc: '우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.',
    phone: '010-0000-0000',
    email: 'aaaaa@naver.com',
    details: [
      {
        title: '상호명',
        name: '하이퍼하이어',
        desc: 'Hyperhire India Private Limited',
        space: 'col-span-3',
      },
      {
        title: '대표 CEO',
        name: '김주현',
        desc: 'Juhyun Kim',
        space: 'col-span-2',
      },
      {
        title: '사업자등록번호 CIN',
        name: '427-86-01187',
        desc: 'U74110DL2016PTC290812',
        space: 'col-span-2',
      },
      {
        title: '주소 ADDRESS',
        name: '서울특별시 강남대로 479, 지하 1층 238호',
        desc: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
        space: 'col-span-4',
      },
    ],
    services: [
      {
        name: '해외 개발자 원격 채용',
        icon: 'icon-code',
      },
      {
        name: '외국인 원격 채용 (비개발)',
        icon: 'icon-avatar',
      },
      {
        name: '한국어 가능 외국인 채용',
        icon: 'icon-kor',
      },
      {
        name: '해외 개발자 활용 서비스',
        icon: 'icon-gear',
      },
    ],
  };

  return Response.json({ data });
}
