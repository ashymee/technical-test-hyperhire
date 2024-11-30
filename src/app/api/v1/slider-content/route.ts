export const dynamic = 'force-static';

export async function GET() {
  const data: SliderContent[] = [
    {
      id: 'cm4177pyv00008csh23qk19u7',
      title: '해외 마케팅',
      icon: 'icon-marketing',
    },
    {
      id: 'cm4177u2800028cshfh6m7svp',
      title: '퍼블리셔',
      icon: 'icon-image',
    },
    {
      id: 'cm4177zty00048cshhlzlfsqc',
      title: '캐드원(제도사)',
      icon: 'icon-box',
    },
    {
      id: 'cm41783sk00068cshadvv4ejv',
      title: '해외 세일즈',
      icon: 'icon-target',
    },
    {
      id: 'cm41789b200088cshfuna0wv8',
      title: '해외 CS',
      icon: 'icon-call',
    },
  ];

  return Response.json({ data });
}
