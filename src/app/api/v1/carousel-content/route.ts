export const dynamic = 'force-static';

export async function GET() {
  const data = [
    {
      id: 'cm41evorz0000ytshdc0c212v',
      name: 'Abhishek Gupta',
      avatar:
        'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZ2yZr7gCNtjgzxrVHzuzcYPF7gVCIeBUI7Lk7l2hqv7FA6k82r~lr8Ut2qF6UG7dX~x-xqMcVRZ9xhRqFjWhpAD-zg8KXUDoIPxoQkCyd4PV5NsN24i2ltI~I0dHNZp66-x9Ht6WUrXNsR8G33BamZQtAssfB7TakJrA978nUsy5hpuR1vi7FPpHfbR~5iMiZbgVkY0iCrfv9X1627lu91V0HevHfF4bw6tlvqL2YPp~PEHZtcRpZJWZTcMgbBJKwuh2tgoFtagIz2JeSWvS607OCBRc1BEI2JsvHGcYTyGVcPTIJKs~gzem1bIo4Ixq6eUQ887Ua0Si3k3Nj~tGQ__',
      nationality:
        'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laqW0qBP5vX4gPuvFDsQhY4dbVvjB2mLmjt3tV5f5bqXkCxls3rb8VsgoC1luIsuD9jjPd~gGHlyZoeLidNFTg~JA6JiJ1L3DzTXo5LZtQryKavh~L6~hbVH4j~IlY-3zdy9tTU6Ijj0cqO4CQb7OorGZINjC6h~USD4vbZ-~MuLk-cyhfbKgfXbEeZ3yFPXPTGM6bRcVTMr5cTF17-pNhBJCf8WTKxUPuId0MYP9srGP4pC2~7Fg5hcC65~q9EUhpcSda93sZ8qC~gMhI8kmRnv-00jf4ME-Co4KajnP-5jzStALL9pGfoRugf03TQzTRMaHS9SDsz2ODo8L8~NHw__',
      experience: ['마케팅', '1y+'],
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      rate: '월 100만원',
    },
    {
      id: 'cm41evyfz0002ytsh5yl13rm5',
      name: 'Abhishek Gupta 2',
      experience: ['마케팅', '2y+'],
      avatar:
        'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZ2yZr7gCNtjgzxrVHzuzcYPF7gVCIeBUI7Lk7l2hqv7FA6k82r~lr8Ut2qF6UG7dX~x-xqMcVRZ9xhRqFjWhpAD-zg8KXUDoIPxoQkCyd4PV5NsN24i2ltI~I0dHNZp66-x9Ht6WUrXNsR8G33BamZQtAssfB7TakJrA978nUsy5hpuR1vi7FPpHfbR~5iMiZbgVkY0iCrfv9X1627lu91V0HevHfF4bw6tlvqL2YPp~PEHZtcRpZJWZTcMgbBJKwuh2tgoFtagIz2JeSWvS607OCBRc1BEI2JsvHGcYTyGVcPTIJKs~gzem1bIo4Ixq6eUQ887Ua0Si3k3Nj~tGQ__',
      nationality:
        'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laqW0qBP5vX4gPuvFDsQhY4dbVvjB2mLmjt3tV5f5bqXkCxls3rb8VsgoC1luIsuD9jjPd~gGHlyZoeLidNFTg~JA6JiJ1L3DzTXo5LZtQryKavh~L6~hbVH4j~IlY-3zdy9tTU6Ijj0cqO4CQb7OorGZINjC6h~USD4vbZ-~MuLk-cyhfbKgfXbEeZ3yFPXPTGM6bRcVTMr5cTF17-pNhBJCf8WTKxUPuId0MYP9srGP4pC2~7Fg5hcC65~q9EUhpcSda93sZ8qC~gMhI8kmRnv-00jf4ME-Co4KajnP-5jzStALL9pGfoRugf03TQzTRMaHS9SDsz2ODo8L8~NHw__',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      rate: '월 200만원',
    },
    {
      id: 'cm41evyfz0003ytsh8gd7crze',
      name: 'Abhishek Gupta',
      experience: ['마케팅', '3y+'],
      avatar:
        'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZ2yZr7gCNtjgzxrVHzuzcYPF7gVCIeBUI7Lk7l2hqv7FA6k82r~lr8Ut2qF6UG7dX~x-xqMcVRZ9xhRqFjWhpAD-zg8KXUDoIPxoQkCyd4PV5NsN24i2ltI~I0dHNZp66-x9Ht6WUrXNsR8G33BamZQtAssfB7TakJrA978nUsy5hpuR1vi7FPpHfbR~5iMiZbgVkY0iCrfv9X1627lu91V0HevHfF4bw6tlvqL2YPp~PEHZtcRpZJWZTcMgbBJKwuh2tgoFtagIz2JeSWvS607OCBRc1BEI2JsvHGcYTyGVcPTIJKs~gzem1bIo4Ixq6eUQ887Ua0Si3k3Nj~tGQ__',
      nationality:
        'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laqW0qBP5vX4gPuvFDsQhY4dbVvjB2mLmjt3tV5f5bqXkCxls3rb8VsgoC1luIsuD9jjPd~gGHlyZoeLidNFTg~JA6JiJ1L3DzTXo5LZtQryKavh~L6~hbVH4j~IlY-3zdy9tTU6Ijj0cqO4CQb7OorGZINjC6h~USD4vbZ-~MuLk-cyhfbKgfXbEeZ3yFPXPTGM6bRcVTMr5cTF17-pNhBJCf8WTKxUPuId0MYP9srGP4pC2~7Fg5hcC65~q9EUhpcSda93sZ8qC~gMhI8kmRnv-00jf4ME-Co4KajnP-5jzStALL9pGfoRugf03TQzTRMaHS9SDsz2ODo8L8~NHw__',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      rate: '월 200만원',
    },
  ];

  return Response.json({ data });
}
