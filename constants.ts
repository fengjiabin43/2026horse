
import { Question, HorseResult } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "踏进办公室大门的一瞬间？",
    options: [
      { label: 'A', text: '战斗模式', weights: { energy: 2, pressure: 1 } },
      { label: 'B', text: '瞬间想隐身', weights: { energy: -2, pressure: -1 } },
      { label: 'C', text: '盘算离下班多久', weights: { energy: -1, mindset: -1 } },
      { label: 'D', text: '搜寻零食八卦', weights: { energy: 1, mindset: 1 } },
    ]
  },
  {
    id: 2,
    title: "办公软件突然“叮咚”一声？",
    options: [
      { label: 'A', text: '别bee了，很忙', weights: { energy: 1, mindset: -2 } },
      { label: 'B', text: '吓得一激灵回“收到”', weights: { pressure: 2, energy: -1 } },
      { label: 'C', text: '假装没看见', weights: { energy: -2, mindset: 1 } },
      { label: 'D', text: '泰然自若，看眼再说', weights: { mindset: 2, energy: 1 } },
    ]
  },
  {
    id: 3,
    title: "领导开会画大饼？",
    options: [
      { label: 'A', text: '内心吐槽吃不下', weights: { mindset: -1, pressure: 1 } },
      { label: 'B', text: '灵魂早已飞出地球', weights: { energy: -2, mindset: 2 } },
      { label: 'C', text: '认真做笔记装样子', weights: { pressure: 1, energy: -1 } },
      { label: 'D', text: '勇敢开麦专业反击', weights: { energy: 2, mindset: -1 } },
    ]
  },
  {
    id: 4,
    title: "下午三点续命秘籍？",
    options: [
      { label: 'A', text: '靠正气和过劳肥硬扛', weights: { pressure: 2, energy: -1 } },
      { label: 'B', text: '冰美式浇灭心火', weights: { mindset: -1, energy: 1 } },
      { label: 'C', text: '疯狂刷手机点外卖', weights: { energy: -1, mindset: 1 } },
      { label: 'D', text: '带薪蹲坑寻找自由', weights: { energy: -2, mindset: 2 } },
    ]
  },
  {
    id: 5,
    title: "不懂行的同事指手画脚？",
    options: [
      { label: 'A', text: '脸上切尔斯心里骂', weights: { mindset: -2, pressure: 1 } },
      { label: 'B', text: '懒得争辩你对对对', weights: { energy: -2, mindset: 1 } },
      { label: 'C', text: '强硬怼回去', weights: { energy: 2, mindset: -1 } },
      { label: 'D', text: '陷入自我怀疑', weights: { pressure: 2, mindset: -1 } },
    ]
  },
  {
    id: 6,
    title: "下班活没干完？",
    options: [
      { label: 'A', text: '认命加班', weights: { pressure: 2, energy: -1 } },
      { label: 'B', text: '立马关机跑路', weights: { energy: 2, pressure: -2 } },
      { label: 'C', text: '边骂边做', weights: { mindset: -2, pressure: 1 } },
      { label: 'D', text: '发朋友圈暗示辛苦', weights: { energy: 1, pressure: 1 } },
    ]
  }
];

export const HORSES: HorseResult[] = [
  {
    name: "斑马",
    coordinates: { energy: 0, mindset: 2, pressure: 3 },
    portrait: "一只普通在上班的马",
    motto: "我在工位很想你",
    luckWord: "祝你今年告别“斑点”，只剩“马”到成功。",
    image: "/2026horse/斑马.jpg",
    caption: "(不在动物园，不爱穿条纹)"
  },
  {
    name: "刀马",
    coordinates: { energy: 2, mindset: -5, pressure: 0 },
    portrait: "每天上班唯一想做的事",
    motto: "狠狠地刀！这个世界",
    luckWord: "祝你手起刀落，斩断所有无理需求，直奔财务自由。",
    image: "/2026horse/刀马.jpg",
    caption: "(江湖人称：杀马特)"
  },
  {
    name: "副马",
    coordinates: { energy: -4, mindset: 2, pressure: -2 },
    portrait: "不是皇亲国戚",
    motto: "是副总裁、副经理、副主管……",
    luckWord: "祝你今年“副”气东来，即便躺平，奖金也自动到账。",
    image: "/2026horse/副马.jpg",
    caption: "真没招了"
  },
  {
    name: "海马",
    coordinates: { energy: 5, mindset: 4, pressure: 0 },
    portrait: "办公室气氛活跃负责人",
    motto: "最 E 的马励志上出最热闹的班",
    luckWord: "祝你今年在职场如鱼得水，人脉翻倍，贵人位列仙班。",
    image: "/2026horse/海马.jpg",
    caption: "(爱好：聊天约饭小众社交爱好)"
  },
  {
    name: "皇阿马",
    coordinates: { energy: 6, mindset: 2, pressure: -4 },
    portrait: "不听指挥办公室皇帝",
    motto: "有事启奏无事退朝",
    luckWord: "祝你今年翻牌的都是好运，所到之处，需求皆成坦途。",
    image: "/2026horse/皇阿马.jpg",
    caption: "退朝"
  },
  {
    name: "卡急马",
    coordinates: { energy: 2, mindset: 0, pressure: 6 },
    portrait: "一只卡点着急下班的马",
    motto: "但经常被临时加任务而加班",
    luckWord: "祝你今年余额不“卡”，好运不“急”，下班准时如钟。",
    image: "/2026horse/卡急马.jpg",
    caption: "又开会?"
  },
  {
    name: "骡马",
    coordinates: { energy: -2, mindset: 0, pressure: 6 },
    portrait: "条条大路通罗马",
    motto: "但我天生就在罗马",
    luckWord: "祝你早日走出“骡马”圈，迈入真正的罗马城。",
    image: "/2026horse/骡马.jpg",
    caption: "(中译中：无论怎么跳槽，最终都通向了工位)"
  },
  {
    name: "马bee",
    coordinates: { energy: 4, mindset: -4, pressure: 2 },
    portrait: "你马 bee 的我现在很忙",
    motto: "别给马 bee 的我找事情",
    luckWord: "祝你今年耳根清净，小人退散，远离所有无谓的bee事。",
    image: "/2026horse/马bee.jpg",
    caption: "(高速行驶中，小心被创)"
  },
  {
    name: "马卡巴卡",
    coordinates: { energy: -5, mindset: 4, pressure: 0 },
    portrait: "听得懂装没懂，知道的装不知道，",
    motto: "精通胡言乱语。",
    luckWord: "祝你该糊涂时糊涂，该清醒时升职，装傻也是一种福气。",
    image: "/2026horse/马卡巴卡.jpg",
    caption: "(不知道，我的身材很曼妙)"
  },
  {
    name: "马卖啤",
    coordinates: { energy: 0, mindset: -6, pressure: 6 },
    portrait: "马卖啤工作根本做不完，",
    motto: "一点就炸，生人勿近。",
    luckWord: "祝你今年只有“切尔斯”的喜悦，没有“卖啤”的愤怒。",
    image: "/2026horse/马卖啤.jpg",
    caption: "(你再说一遍?)"
  },
  {
    name: "全脂牛马",
    coordinates: { energy: -2, mindset: 2, pressure: 6 },
    portrait: "上班上出过劳肥",
    motto: "马卡笼",
    luckWord: "祝你今年只涨薪水不涨肉，吞下的苦都变成生活的甜。",
    image: "/2026horse/全脂牛马.jpg",
    caption: "(上班吃了太多苦和委屈导致的)"
  },
  {
    name: "神马",
    coordinates: { energy: -6, mindset: 6, pressure: -2 },
    portrait: "喜欢背梗但背的是十年前的梗",
    motto: "张口一句神马兄弟真是蓝瘦香菇惹",
    luckWord: "祝你今年烦恼皆浮云，心中有神马，眼里全是路。",
    image: "/2026horse/神马.jpg",
    caption: "(不知道，我的身材很曼妙)"
  },
  {
    name: "私密马赛",
    coordinates: { energy: 0, mindset: 4, pressure: 6 },
    portrait: "被工作磨平棱角，不管说什么，",
    motto: "先认错总是没错的。",
    luckWord: "祝你今年不必道歉，也有人为你开路；不必低头，也有繁花盛开。",
    image: "/2026horse/私密马赛.jpg",
    caption: "(锅我可不背)"
  },
  {
    name: "战马",
    coordinates: { energy: 6, mindset: 0, pressure: 2 },
    portrait: "两眼一睁就是战斗",
    motto: "没有不端飞的义务",
    luckWord: "祝你今年鲜衣怒马，纵横职场，所向靡靡。",
    image: "/2026horse/战马.jpg",
    caption: "(危险等级略高，实则人不犯我我不犯人)"
  }
];
