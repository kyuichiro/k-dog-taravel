export type DogType = 'uchibenkei' | 'hakoiri' | 'wanpaku' | 'hime_ouji';
export type DogSize = 'large' | 'small';

export interface PlanDetails {
  transport: string;
  accommodation: string;
  meals: string;
  activities: string[];
  description: string;
  image: string;
}

export interface DogTypeInfo {
  id: DogType;
  name: string;
  title: string;
  description: string;
  plans: Record<DogSize, PlanDetails>;
}

export const DOG_TYPES: Record<DogType, DogTypeInfo> = {
  uchibenkei: {
    id: 'uchibenkei',
    name: '内弁慶ちゃん',
    title: '内向的で運動ずき',
    description: '飼い主様以外の人やほかのワンちゃんを警戒してしまう「内弁慶ちゃん」。このタイプのワンちゃんの旅行は、飼い主さんと二人だけで体を動かせるプランを考えてはいかがでしょう。',
    plans: {
      large: {
        transport: '自家用車',
        accommodation: 'ロッジ型（大型可）',
        meals: '部屋食、バーベキュー、屋外席',
        activities: ['マリンスポーツ', 'プライベートドッグラン'],
        description: '大型犬がロッジの中でゆったり、窓からはプライベートドッグランとマリンスポーツをしている様子が見える',
        image: 'https://picsum.photos/seed/uchibenkei-large-lodge/800/600'
      },
      small: {
        transport: '自家用車',
        accommodation: 'ロッジ型、ホテル型（専用）',
        meals: '部屋食、バーベキュー、屋外席',
        activities: ['マリンスポーツ', 'プライベートドッグラン'],
        description: '中型犬がペット専用ホテルの1室でゆったり、窓からはプライベートドッグランとマリンスポーツをしている様子が見える',
        image: 'https://picsum.photos/seed/uchibenkei-small-hotel/800/600'
      }
    }
  },
  hakoiri: {
    id: 'hakoiri',
    name: '箱入りちゃん',
    title: '内向的で運動ぎらい',
    description: '飼い主様の事が大好きで、少し慎重な「箱入りちゃん」。安心した旅行にするために、宿泊は、ほかのワンちゃんと接する機会の少ない、ロッジタイプがおすすめ。',
    plans: {
      large: {
        transport: '自家用車',
        accommodation: 'ロッジ型',
        meals: '部屋食、個室型レストラン',
        activities: ['写真撮影', '散歩（風景重視）', 'マッサージ・トリミング'],
        description: '大型犬がロッジの中でゆったり、窓からは散歩道が見えている',
        image: 'https://picsum.photos/seed/hakoiri-large-lodge/800/600'
      },
      small: {
        transport: '自家用車',
        accommodation: 'ロッジ型',
        meals: '部屋食、個室型レストラン',
        activities: ['写真撮影', '散歩（風景重視）', 'マッサージ・トリミング'],
        description: '大型犬がペット同伴可ホテルの中でゆったり、窓からは散歩道が見えている',
        image: 'https://picsum.photos/seed/hakoiri-small-hotel/800/600'
      }
    }
  },
  wanpaku: {
    id: 'wanpaku',
    name: 'ワンパクちゃん',
    title: '外向的で運動ずき',
    description: '体を動かすことが大好きな、「ワンパクちゃん」。他のワンちゃん友達になるのも得意なので、大きなドッグランに大喜び。水遊びが好きならマリンスポーツにも挑戦。',
    plans: {
      large: {
        transport: '自家用車',
        accommodation: 'ロッジ型（大型可）',
        meals: '同伴用レストラン、バーベキュー、屋外席',
        activities: ['マリンスポーツ', 'ドッグラン'],
        description: '大型犬がロッジの1階テラス席で飼い主たちとバーベキューを愉しんでいる様子。後ろには砂浜が広がっている。',
        image: 'https://picsum.photos/seed/wanpaku-large-bbq/800/600'
      },
      small: {
        transport: '自家用車、電車',
        accommodation: 'ロッジ型、ホテル型（混在も可）',
        meals: '同伴可のレストラン、バーベキュー、屋外席',
        activities: ['マリンスポーツ', 'ドッグラン'],
        description: '小型犬がペット同伴可のレストランで、飼い主たちと食事を楽しんでいる。',
        image: 'https://picsum.photos/seed/wanpaku-small-restaurant/800/600'
      }
    }
  },
  hime_ouji: {
    id: 'hime_ouji',
    name: '姫ちゃん王子ちゃん',
    title: '外向的で運動ぎらい',
    description: '飼い主様をはじめ、人にかまってもらうのが大好きな「姫ちゃん王子ちゃん」。ワンちゃんが輝くような写真撮影や、ショッピングをご提案します。',
    plans: {
      large: {
        transport: '自家用車',
        accommodation: 'ロッジ型（大型可）',
        meals: '同伴用レストラン（屋外専用席含む）',
        activities: ['写真撮影', '散歩（風景重視）', '体験もの（記念製作）', 'マッサージ・トリミング', '買い物'],
        description: '大型犬がロッジの1階テラス席で飼い主たちとバーベキューを愉しんでいる様子。後ろには大型の自家用車が止まっている',
        image: 'https://picsum.photos/seed/himeouji-large-car/800/600'
      },
      small: {
        transport: '自家用車、電車',
        accommodation: 'ロッジ型、ホテル型（混在も可）',
        meals: '同伴可のレストラン（屋外専用席含む）',
        activities: ['写真撮影', '散歩（風景重視）', '体験もの（記念製作）', 'マッサージ・トリミング', '買い物'],
        description: '小型犬がペット同伴可のレストランで、飼い主たちと食事を楽しんでいる。',
        image: 'https://picsum.photos/seed/himeouji-small-restaurant/800/600'
      }
    }
  }
};
