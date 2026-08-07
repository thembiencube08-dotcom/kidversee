// -----------------------------------------------------------------------------
// Popees Delivery Driver Dashboard — sample / mock data
// Swap these with real API/Supabase calls when a backend is connected.
// -----------------------------------------------------------------------------

export type OrderStatus = 'pending' | 'picked-up' | 'in-transit' | 'delivered' | 'delayed';

export interface Driver {
  name: string;
  vehicle: string;
  phone: string;
  id: string;
  initials: string;
  rating: number;
  totalDeliveries: number;
  onTimeRate: number;
  distanceToday: number;
  distanceWeek: number;
  distanceMonth: number;
}

export interface PickupOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  area: string;
  timeWindow: string;
  status: OrderStatus;
  packageType: string;
  weight: string;
  cod: number;
  instructions: string;
  priority: boolean;
}

export interface EarningsDay {
  label: string;
  base: number;
  tips: number;
  bonuses: number;
}

export interface HistoryRow {
  id: string;
  date: string;
  time: string;
  customer: string;
  area: string;
  status: 'delivered' | 'delayed' | 'failed';
  earnings: number;
  codCollected: number;
}

export interface DashboardNotification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  tone: 'info' | 'success' | 'warning';
}

export const DRIVER: Driver = {
  name: 'Tendai Moyo',
  vehicle: 'Toyota Hiace · AGP 3312 ZW',
  phone: '+263 77 123 4567',
  id: 'D-1042',
  initials: 'TM',
  rating: 4.8,
  totalDeliveries: 1247,
  onTimeRate: 94,
  distanceToday: 42,
  distanceWeek: 268,
  distanceMonth: 1140,
};

export const TODAY_STATS = {
  delivered: 12,
  remaining: 6,
  earnings: 1850,
  onTimeRate: 94,
  target: 18,
};

export const ORDERS: PickupOrder[] = [
  {
    id: 'ORD-8821',
    customer: 'Chipo Mutasa',
    phone: '+263 77 200 1147',
    address: 'Flat 12, Pomona West, Borrowdale Road',
    area: 'Harare',
    timeWindow: '10:00 – 11:00',
    status: 'in-transit',
    packageType: 'Baby clothing (3 items)',
    weight: '1.2 kg',
    cod: 0,
    instructions: 'Leave with the security guard if not at home. Gate code #2218.',
    priority: true,
  },
  {
    id: 'ORD-8820',
    customer: 'Blessing Ndlovu',
    phone: '+263 71 800 2234',
    address: 'Shop 5, City Centre, Jason Moyo Avenue',
    area: 'Bulawayo',
    timeWindow: '11:00 – 12:00',
    status: 'picked-up',
    packageType: 'Maternity wear (2 items)',
    weight: '0.9 kg',
    cod: 745,
    instructions: 'Ring the bell twice. Collect COD of Z$745 in cash.',
    priority: false,
  },
  {
    id: 'ORD-8819',
    customer: 'Rutendo Chikore',
    phone: '+263 78 210 7788',
    address: 'B-704, Rujeko Suburb, Mucheke Road',
    area: 'Masvingo',
    timeWindow: '13:00 – 14:00',
    status: 'pending',
    packageType: 'Bamboo collection (4 items)',
    weight: '2.1 kg',
    cod: 0,
    instructions: 'Prepaid order. Hand over to Ms. Chikore only — verify ID.',
    priority: false,
  },
  {
    id: 'ORD-8818',
    customer: 'Takudzwa Moyo',
    phone: '+263 77 930 5567',
    address: 'House 12, Amby 2, Kwekwe CBD',
    area: 'Kwekwe',
    timeWindow: '14:00 – 15:00',
    status: 'pending',
    packageType: 'Baby toys (1 item)',
    weight: '3.4 kg',
    cod: 1299,
    instructions: 'Collect cash Z$1,299. Call on arrival — customer has no doorbell.',
    priority: false,
  },
  {
    id: 'ORD-8817',
    customer: 'Nyasha Dube',
    phone: '+263 71 974 3391',
    address: '601, Sunninghill, Famona Road',
    area: 'Bulawayo',
    timeWindow: '15:00 – 16:00',
    status: 'delayed',
    packageType: 'Baby diapers (2 packs)',
    weight: '4.0 kg',
    cod: 0,
    instructions: 'Heavy box — please bring trolley. Deliver to side entrance.',
    priority: true,
  },
  {
    id: 'ORD-8816',
    customer: 'Farai Gumbo',
    phone: '+263 78 765 8123',
    address: 'B-12, Senga, Gweru CBD',
    area: 'Gweru',
    timeWindow: '16:00 – 17:00',
    status: 'pending',
    packageType: 'Feeding bottles & wipes',
    weight: '1.8 kg',
    cod: 320,
    instructions: 'COD Z$320. Coupon code not applicable on delivery.',
    priority: false,
  },
  {
    id: 'ORD-8815',
    customer: 'Linda Mhlanga',
    phone: '+263 77 588 4400',
    address: 'Flat 44, Chinhoyi Town, Magamba Way',
    area: 'Chinhoyi',
    timeWindow: '17:00 – 18:00',
    status: 'pending',
    packageType: 'Baby sleepsuit (5 items)',
    weight: '1.1 kg',
    cod: 0,
    instructions: 'Customer prefers a call before arrival. Building is behind the mall.',
    priority: false,
  },
];

export const EARNINGS_DAILY: EarningsDay[] = [
  { label: 'Mon', base: 420, tips: 90, bonuses: 100 },
  { label: 'Tue', base: 460, tips: 70, bonuses: 100 },
  { label: 'Wed', base: 390, tips: 120, bonuses: 0 },
  { label: 'Thu', base: 510, tips: 95, bonuses: 150 },
  { label: 'Fri', base: 470, tips: 60, bonuses: 100 },
  { label: 'Sat', base: 620, tips: 140, bonuses: 200 },
  { label: 'Sun', base: 580, tips: 110, bonuses: 150 },
];

export const EARNINGS_WEEKLY: EarningsDay[] = [
  { label: 'Wk1', base: 3200, tips: 620, bonuses: 600 },
  { label: 'Wk2', base: 3500, tips: 540, bonuses: 900 },
  { label: 'Wk3', base: 2900, tips: 700, bonuses: 400 },
  { label: 'Wk4', base: 4100, tips: 660, bonuses: 1100 },
  { label: 'Wk5', base: 3800, tips: 580, bonuses: 800 },
];

export const EARNINGS_MONTHLY: EarningsDay[] = [
  { label: 'Mar', base: 14200, tips: 2440, bonuses: 4200 },
  { label: 'Apr', base: 15800, tips: 2810, bonuses: 5100 },
  { label: 'May', base: 13500, tips: 2300, bonuses: 3900 },
  { label: 'Jun', base: 14900, tips: 2650, bonuses: 4600 },
  { label: 'Jul', base: 16200, tips: 2990, bonuses: 5400 },
  { label: 'Aug', base: 15400, tips: 2760, bonuses: 4900 },
];

export const EARNINGS_BREAKDOWN = {
  base: 2480,
  tips: 415,
  bonuses: 650,
};

export const PERFORMANCE = {
  onTimeRate: 94,
  customerRating: 4.8,
  deliveriesWeek: 86,
  deliveriesMonth: 342,
  distanceWeek: 268,
  distanceMonth: 1140,
  lateDeliveries: 3,
};

export const HISTORY: HistoryRow[] = [
  { id: 'ORD-8814', date: 'Aug 7', time: '09:10', customer: 'Tariro Moyo', area: 'Harare', status: 'delivered', earnings: 145, codCollected: 0 },
  { id: 'ORD-8776', date: 'Aug 6', time: '18:40', customer: 'Simba Dube', area: 'Bulawayo', status: 'delivered', earnings: 130, codCollected: 520 },
  { id: 'ORD-8755', date: 'Aug 6', time: '15:22', customer: 'Chipo Chikore', area: 'Masvingo', status: 'delivered', earnings: 155, codCollected: 0 },
  { id: 'ORD-8721', date: 'Aug 5', time: '11:05', customer: 'Kudzaishe Gumbo', area: 'Kwekwe', status: 'delayed', earnings: 120, codCollected: 1099 },
  { id: 'ORD-8699', date: 'Aug 5', time: '13:48', customer: 'Rudo Mhlanga', area: 'Chinhoyi', status: 'delivered', earnings: 140, codCollected: 0 },
  { id: 'ORD-8640', date: 'Aug 4', time: '16:31', customer: 'Tinashe Dube', area: 'Gweru', status: 'delivered', earnings: 128, codCollected: 745 },
  { id: 'ORD-8592', date: 'Aug 4', time: '10:12', customer: 'Tsitsi Ncube', area: 'Harare', status: 'failed', earnings: 0, codCollected: 0 },
  { id: 'ORD-8555', date: 'Aug 3', time: '12:27', customer: 'Zvikomborero Manyika', area: 'Mutare', status: 'delivered', earnings: 135, codCollected: 0 },
  { id: 'ORD-8501', date: 'Aug 3', time: '17:03', customer: 'Nyaradzo Chigumba', area: 'Kwekwe', status: 'delivered', earnings: 150, codCollected: 920 },
  { id: 'ORD-8467', date: 'Aug 2', time: '09:55', customer: 'Panashe Dube', area: 'Bulawayo', status: 'delivered', earnings: 122, codCollected: 0 },
  { id: 'ORD-8419', date: 'Aug 2', time: '14:20', customer: 'Mufaro Gumbo', area: 'Gweru', status: 'delivered', earnings: 138, codCollected: 410 },
  { id: 'ORD-8377', date: 'Aug 1', time: '11:44', customer: 'Tafadzwa Moyo', area: 'Mutare', status: 'delivered', earnings: 142, codCollected: 0 },
];

export const NOTIFICATIONS: DashboardNotification[] = [
  { id: 1, title: 'New order assigned', message: 'ORD-8818 added to your queue (Kwekwe).', time: '2 min ago', read: false, tone: 'info' },
  { id: 2, title: 'Bonus unlocked', message: 'On-time streak bonus of Z$150 added for today.', time: '1 hr ago', read: false, tone: 'success' },
  { id: 3, title: 'Order delayed', message: 'ORD-8817 flagged as delayed — please prioritise.', time: '2 hrs ago', read: false, tone: 'warning' },
  { id: 4, title: 'Support update', message: 'Dispatch shifted your morning slot. Check queue.', time: '4 hrs ago', read: true, tone: 'info' },
];



// Countries where the delivery dashboard is allowed (ISO 3166-1 alpha-2).
export const DELIVERY_ALLOWED_COUNTRIES = ['ZW']; // Zimbabwe
export const DELIVERY_COUNTRY_LABEL = 'Zimbabwe';

