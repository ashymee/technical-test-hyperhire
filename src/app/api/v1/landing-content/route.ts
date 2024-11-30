export const dynamic = 'force-static';

export async function GET() {
  const data = {
    title: '최고의 실력을 가진 외국인 인재를 찾고 계신가요?',
    subtitle: ['법률 및 인사관리 부담없이', '1주일 이내에 원격으로 채용해보세요.'],
    question: '개발자가 필요하신가요?',
    desc: '법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.',
    offers: [
      {
        name: '평균 월 120만원',
        desc: '임금을 해당 국가를 기준으로 계산합니다.',
      },
      {
        name: '최대 3회 인력교체',
        desc: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
      },
      {
        name: '평균 3일, 최대 10일',
        desc: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
      },
    ],
    skills: ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'],
  };

  return Response.json({ data });
}
