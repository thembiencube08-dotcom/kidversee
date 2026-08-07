'use client';
import React, { useState, useEffect } from 'react';
import {
  DRIVER,
  ORDERS,
  TODAY_STATS,
  EARNINGS_DAILY,
  EARNINGS_WEEKLY,
  EARNINGS_MONTHLY,
  EARNINGS_BREAKDOWN,
  PERFORMANCE,
  HISTORY,
  NOTIFICATIONS,
  DELIVERY_ALLOWED_COUNTRIES,
  DELIVERY_COUNTRY_LABEL,
  type PickupOrder,
  type OrderStatus,
} from '@/lib/deliveryData';

/* ----------------------------- tiny icon set ----------------------------- */
const ICONS: Record<string, React.ReactNode> = {
  home: <path d="M3 11.2 12 3l9 8.2M5 10v10h5v-6h4v6h5V10" />,
  wallet: <><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M16 12h4" /></>,
  gauge: <><path d="M12 14 15.5 9" /><circle cx="12" cy="14" r="7.5" /><path d="M4.5 8 2.5 6M19.5 8l2-2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4V13" /><circle cx="12" cy="16.5" r="0.5" fill="currentColor" stroke="none" /></>,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 19a2 2 0 0 0 4 0" /></>,
  pin: <><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h4l1.5 4L8 9.5a11 11 0 0 0 6.5 6.5L17 13.5l4 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  check: <path d="m5 12 5 5 9-11" />,
  alert: <><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 10v4" /><circle cx="12" cy="16.8" r="0.4" fill="currentColor" stroke="none" /></>,
  nav: <><circle cx="5" cy="5" r="2.4" /><path d="m20 13-7.5-2.5L10 3M14.5 8.6 20 3l-6 .5" /></>,
  camera: <><path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13" r="3.5" /></>,
  pen: <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z" />,
  chev: <path d="m9 6 6 6-6 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  star: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9Z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  filter: <path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" />,
  truck: <><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
  trend: <path d="m3 17 6-6 4 4 7-8M14 7h6v6" />,
  shield: <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />,
  logout: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />,
  flag: <path d="M5 21V4M5 4c3-1.5 6 1.5 9 0s6 1.5 6 1.5V15c-3 1.5-6-1.5-9 0s-6-1.5-6-1.5" />,
};

const Icon = ({ name, className = 'w-[18px] h-[18px]' }: { name: string; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {ICONS[name]}
  </svg>
);

/* --------------------------------- helpers -------------------------------- */
const zwd = (n: number) => 'Z$' + n.toLocaleString('en-US');

const STATUS_META: Record<OrderStatus, { label: string; cls: string; dot: string }> = {
  pending: { label: 'Pending', cls: 'bg-slate-100 text-slate-700', dot: 'bg-slate-400' },
  'picked-up': { label: 'Picked up', cls: 'bg-sky-50 text-sky-700', dot: 'bg-sky-500' },
  'in-transit': { label: 'In transit', cls: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
  delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  delayed: { label: 'Delayed', cls: 'bg-rose-50 text-rose-600', dot: 'bg-rose-500' },
};

type TabKey = 'home' | 'earnings' | 'perform' | 'history' | 'support';

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'earnings', label: 'Earnings', icon: 'wallet' },
  { key: 'perform', label: 'Performance', icon: 'gauge' },
  { key: 'history', label: 'History', icon: 'clock' },
  { key: 'support', label: 'Support', icon: 'help' },
];

/* ------------------------------- small atoms ------------------------------ */
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm ${className}`}>{children}</div>
);

const SectionTitle = ({ icon, title, right }: { icon?: string; title: string; right?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-3">
    <h2 className="font-heading text-[15px] font-bold text-slate-800 flex items-center gap-2">
      {icon && <Icon name={icon} className="w-[18px] h-[18px] text-popees-pink" />}
      {title}
    </h2>
    {right}
  </div>
);

/* ================================ MAIN APP ================================ */
export default function DeliveryDashboard() {
  const [tab, setTab] = useState<TabKey>('home');
  const [online, setOnline] = useState(true);
  const [bellOpen, setBellOpen] = useState(false);
  const [selected, setSelected] = useState<PickupOrder>(ORDERS[0]);
  const [podOpen, setPodOpen] = useState(false);
  const [authed, setAuthed] = useState(false);
  const unread = NOTIFICATIONS.filter((n) => !n.read).length;
  const totalToday = TODAY_STATS.delivered + TODAY_STATS.remaining;

  // Country availability (Zimbabwe only). For local testing you can set
  // NEXT_PUBLIC_DELIVERY_COUNTRY=ZW (or any other code) to override detection.
  const override = (process.env.NEXT_PUBLIC_DELIVERY_COUNTRY || '').trim().toUpperCase();
  const { country, loading } = useCountry();
  const detectedCountry = override || country || '';
  const allowed = DELIVERY_ALLOWED_COUNTRIES.includes(detectedCountry);

  if (loading && !override) {
    return <LoadingScreen />;
  }
  if (!allowed) {
    return <RegionGate />;
  }
  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#f6f3fa] font-body text-slate-800">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-popees-pink flex items-center justify-center text-white font-heading font-extrabold text-lg shrink-0 shadow-sm">
              P
            </div>
            <div className="leading-tight min-w-0">
              <p className="font-heading font-extrabold text-slate-900 text-[15px]">Poopees</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Driver Console</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnline(!online)}
              className={`hidden sm:flex items-center gap-1.5 pl-3 pr-3 py-2 rounded-full text-xs font-bold transition-colors ${
                online ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${online ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
              {online ? 'Online' : 'Offline'}
            </button>

            <button
              onClick={() => setBellOpen(!bellOpen)}
              className="relative p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
              aria-label="Notifications"
            >
              <Icon name="bell" />
              {unread > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-popees-pink text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>

            <button
              onClick={() => setAuthed(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
              aria-label="Log out"
            >
              <Icon name="logout" />
            </button>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff5870] to-popees-pink text-white text-xs font-bold flex items-center justify-center">
                {DRIVER.initials}
              </div>
              <div className="hidden md:block leading-tight">
                <p className="text-xs font-bold text-slate-800">{DRIVER.name}</p>
                <p className="text-[10px] text-slate-400">
                  {DRIVER.id} · ★ {DRIVER.rating}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile online strip */}
        <div
          className={`sm:hidden flex items-center justify-center gap-2 py-2 text-[11px] font-bold ${
            online ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${online ? 'bg-emerald-500' : 'bg-slate-400'}`} />
          {online ? 'You are Online — accepting deliveries' : 'You are Offline'}
          <button onClick={() => setOnline(!online)} className="underline text-popees-pink">
            {online ? 'Go offline' : 'Go online'}
          </button>
        </div>
      </header>

      {/* ── Notifications panel ── */}
      {bellOpen && (
        <div className="absolute top-16 right-4 z-[50] w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
            <p className="font-heading font-bold text-sm">Notifications</p>
            <button onClick={() => setBellOpen(false)} className="text-slate-400 hover:text-slate-600">
              <Icon name="x" className="w-4 h-4" />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
            {NOTIFICATIONS.map((n) => (
              <div key={n.id} className={`px-4 py-3 flex gap-3 ${n.read ? 'opacity-60' : ''}`}>
                <span
                  className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                    n.tone === 'success' ? 'bg-emerald-500' : n.tone === 'warning' ? 'bg-amber-500' : 'bg-sky-500'
                  }`}
                />
                <div>
                  <p className="text-[13px] font-bold text-slate-800">{n.title}</p>
                  <p className="text-xs text-slate-500">{n.message}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Left sidebar (desktop) ── */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-slate-100 p-3 gap-1 z-30 overflow-y-auto">
        <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Menu</p>
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              tab === t.key ? 'bg-popees-pink text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Icon name={t.icon} className="w-5 h-5" />
            {t.label}
          </button>
        ))}
        <div className="mt-auto pt-3 border-t border-slate-100">
          <button
            onClick={() => setAuthed(false)}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50"
          >
            <Icon name="logout" className="w-5 h-5" />
            Log out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="relative z-10 px-4 pt-5 pb-28 lg:ml-64 max-w-[1200px] mx-auto">
        {tab === 'home' && (
          <HomeSection orders={ORDERS} selected={selected} onSelect={setSelected} onPod={() => setPodOpen(true)} />
        )}
        {tab === 'earnings' && <EarningsSection />}
        {tab === 'perform' && <PerformanceSection />}
        {tab === 'history' && <HistorySection />}
        {tab === 'support' && <SupportSection />}
        {podOpen && <PodModal order={selected} onClose={() => setPodOpen(false)} />}
      </main>

      {/* ── Bottom nav (mobile/tablet) ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="grid grid-cols-5 max-w-[520px] mx-auto">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex flex-col items-center gap-1 py-2.5 ${tab === t.key ? 'text-popees-pink' : 'text-slate-400'}`}
            >
              <Icon name={t.icon} className="w-5 h-5" />
              <span className="text-[10px] font-semibold">{t.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
/* ============================ HOME VIEW ============================ */
function HomeSection({
  orders,
  selected,
  onSelect,
  onPod,
}: {
  orders: PickupOrder[];
  selected: PickupOrder;
  onSelect: (o: PickupOrder) => void;
  onPod: () => void;
}) {
  const active = orders.filter((o) => o.status !== 'delivered');

  const statCards = [
    { label: 'Delivered today', value: TODAY_STATS.delivered.toString(), sub: `of ${TODAY_STATS.target} target`, icon: 'check', tint: 'bg-emerald-50 text-emerald-600' },
    { label: 'Remaining', value: TODAY_STATS.remaining.toString(), sub: `${ORDERS.length} in queue`, icon: 'clock', tint: 'bg-amber-50 text-amber-600' },
    { label: "Today's earnings", value: zwd(TODAY_STATS.earnings), sub: '+Z$130 tips today', icon: 'wallet', tint: 'bg-popees-pink/10 text-popees-pink' },
    { label: 'On-time rate', value: `${TODAY_STATS.onTimeRate}%`, sub: 'last 7 days', icon: 'gauge', tint: 'bg-sky-50 text-sky-600' },
  ];

  return (
    <>
      {/* ── Today's Overview ── */}
      <section className="mb-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {statCards.map((s) => (
            <Card key={s.label} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">{s.label}</p>
                  <p className="text-2xl font-heading font-extrabold text-slate-900 mt-1">{s.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.sub}</p>
                </div>
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.tint}`}>
                  <Icon name={s.icon} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Route Map ── */}
      <section className="mb-6">
        <SectionTitle
          icon="pin"
          title="Route Map"
          right={<button className="text-xs font-bold text-popees-pink hover:underline">Optimise route</button>}
        />
        <RouteMapPlaceholder />
      </section>

      {/* ── Active Delivery Queue ── */}
      <section className="mb-6">
        <SectionTitle icon="truck" title={`Active Queue (${active.length})`} />
        <div className="space-y-3">
          {orders.map((o) => (
            <OrderCard key={o.id} order={o} onSelect={onSelect} onPod={onPod} />
          ))}
        </div>
      </section>

      {/* ── Next Delivery Detail ── */}
      <section className="mb-6">
        <SectionTitle icon="flag" title="Next Delivery Detail" />
        <NextDeliveryCard order={selected} onPod={onPod} />
      </section>
    </>
  );
}
function RouteMapPlaceholder() {
  const stops = ORDERS.slice(0, 4);
  return (
    <Card className="relative overflow-hidden">
      {/* Brand header strip */}
      <div className="bg-popees-pink text-white px-4 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Icon name="pin" className="w-4 h-4" />
          <span className="text-sm font-bold">Zimbabwe · Route Map</span>
        </div>
        <span className="text-[11px] bg-white/20 px-2.5 py-1 rounded-full font-bold">
          {stops.length} stops · ETA 14 min
        </span>
      </div>

      {/* Embedded Zimbabwe map */}
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <iframe
          title="Zimbabwe map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=24.5%2C-22.8%2C33.5%2C-15.2&layer=mapnik&marker=-19.0%2C29.5"
          className="w-full h-64 sm:h-72 border-0 bg-slate-100"
          loading="lazy"
        />

        {/* Brand-colored optimised route legend */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-white/95 rounded-xl px-3 py-2.5 shadow border-l-4 border-popees-pink">
          <p className="text-[11px] font-bold text-popees-pink mb-1.5">Optimised route · {stops.length} stops</p>
          <div className="space-y-1">
            {stops.map((o, i) => (
              <p key={o.id} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-popees-pink text-white text-[8px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-[10px] text-slate-600 truncate">{o.customer}</span>
              </p>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">
            ~6.4 km · <span className="text-emerald-600 font-bold">ETA 14 min</span>
          </p>
        </div>
      </div>
    </Card>
  );
}

function OrderCard({
  order,
  onSelect,
  onPod,
}: {
  order: PickupOrder;
  onSelect: (o: PickupOrder) => void;
  onPod: () => void;
}) {
  const meta = STATUS_META[order.status];
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-slate-800 text-sm">{order.customer}</p>
            {order.priority && (
              <span className="text-[9px] font-bold text-white bg-rose-500 px-1.5 py-0.5 rounded-full">PRIORITY</span>
            )}
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {order.id} · {order.area}
          </p>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${meta.cls}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
          {meta.label}
        </span>
      </div>

      <div className="flex items-start gap-2 mb-3 text-slate-600">
        <Icon name="pin" className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
        <div>
          <p className="text-xs text-slate-600">{order.address}</p>
          <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
            <Icon name="clock" className="w-3 h-3" />
            {order.timeWindow}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-500 mb-3">
        <span className="bg-slate-50 rounded-full px-2 py-0.5">{order.packageType}</span>
        <span className="bg-slate-50 rounded-full px-2 py-0.5">{order.weight}</span>
        {order.cod > 0 && (
          <span className="bg-amber-50 text-amber-700 rounded-full px-2 py-0.5 font-bold">COD {zwd(order.cod)}</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => onSelect(order)}
          className="flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-popees-pink rounded-xl py-2 hover:bg-popees-pink-hover transition-colors"
        >
          <Icon name="nav" className="w-4 h-4" /> Navigate
        </button>
        <a
          href={`tel:${order.phone}`}
          className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl py-2 hover:bg-slate-200 transition-colors"
        >
          <Icon name="phone" className="w-4 h-4" /> Call
        </a>
        <button
          onClick={() => {
            onSelect(order);
            onPod();
          }}
          className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl py-2 hover:bg-emerald-100 transition-colors"
        >
          <Icon name="check" className="w-4 h-4" /> Mark Delivered
        </button>
        <button className="flex items-center justify-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 rounded-xl py-2 hover:bg-rose-100 transition-colors">
          <Icon name="alert" className="w-4 h-4" /> Report Issue
        </button>
      </div>
    </Card>
  );
}
function NextDeliveryCard({ order, onPod }: { order: PickupOrder; onPod: () => void }) {
  const [open, setOpen] = useState(true);
  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-popees-pink text-white"
      >
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Icon name="flag" />
          </span>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Next Delivery</p>
            <p className="font-heading font-bold text-sm">
              {order.customer} · {order.id}
            </p>
          </div>
        </div>
        <Icon name="chev" className={`w-5 h-5 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>

      {open && (
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Info label="Phone" value={order.phone} />
            <Info label="Time window" value={order.timeWindow} />
            <Info label="Package" value={`${order.packageType} · ${order.weight}`} />
            <Info
              label={order.cod > 0 ? 'COD amount' : 'Payment'}
              value={order.cod > 0 ? `${zwd(order.cod)} (cash)` : 'Prepaid'}
              highlight={order.cod > 0}
            />
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-800 flex gap-2">
            <Icon name="alert" className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              <span className="font-bold">Delivery instructions:</span> {order.instructions}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${order.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-slate-800 rounded-xl py-2.5"
            >
              <Icon name="phone" className="w-4 h-4" /> Call customer
            </a>
            <button
              onClick={onPod}
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-emerald-600 rounded-xl py-2.5 hover:bg-emerald-700"
            >
              <Icon name="check" className="w-4 h-4" /> Mark Delivered
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}

function Info({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-slate-50 rounded-xl p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className={`text-xs font-bold mt-1 ${highlight ? 'text-amber-600' : 'text-slate-700'}`}>{value}</p>
    </div>
  );
}
function EarningsSection() {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const data = period === 'daily' ? EARNINGS_DAILY : period === 'weekly' ? EARNINGS_WEEKLY : EARNINGS_MONTHLY;
  const total = data.reduce((s, d) => s + d.base + d.tips + d.bonuses, 0);
  const maxVal = Math.max(...data.map((d) => d.base + d.tips + d.bonuses));
  const periodLabel = period === 'daily' ? 'This week' : period === 'weekly' ? 'This month' : 'This year';

  const breakdown = [
    { label: 'Base pay', value: EARNINGS_BREAKDOWN.base, tint: 'bg-popees-pink' },
    { label: 'Tips', value: EARNINGS_BREAKDOWN.tips, tint: 'bg-emerald-500' },
    { label: 'Bonuses', value: EARNINGS_BREAKDOWN.bonuses, tint: 'bg-amber-500' },
  ];

  return (
    <>
      <SectionTitle icon="wallet" title="Earnings" />
      <Card className="p-5 mb-5 bg-gradient-to-br from-popees-pink to-[#ff5870] text-white">
        <p className="text-[11px] uppercase tracking-widest opacity-80 font-bold">Total ({periodLabel})</p>
        <p className="text-3xl font-heading font-extrabold mt-1">{zwd(total)}</p>
        <p className="text-[11px] opacity-90 mt-1">
          +{zwd(EARNINGS_BREAKDOWN.tips)} tips · +{zwd(EARNINGS_BREAKDOWN.bonuses)} bonuses
        </p>
      </Card>

      <div className="flex bg-white rounded-xl border border-slate-100 p-1 mb-4">
        {(['daily', 'weekly', 'monthly'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold capitalize transition-colors ${
              period === p ? 'text-white bg-popees-pink' : 'text-slate-500'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <Card className="p-4 mb-5">
        <div className="flex items-end gap-1.5 h-40">
          {data.map((d) => {
            const sum = d.base + d.tips + d.bonuses;
            const h = Math.max(8, (sum / maxVal) * 100);
            return (
              <div key={d.label} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
                <div className="w-full flex flex-col justify-end rounded-t-md overflow-hidden" style={{ height: `${h}%` }}>
                  <div className="bg-amber-400" style={{ height: `${(d.bonuses / sum) * 100}%` }} />
                  <div className="bg-emerald-400" style={{ height: `${(d.tips / sum) * 100}%` }} />
                  <div className="bg-popees-pink" style={{ height: `${(d.base / sum) * 100}%` }} />
                </div>
                <span className="text-[9px] text-slate-400 font-semibold">{d.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4 mt-3 text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-popees-pink" /> Base
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-emerald-400" /> Tips
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-amber-400" /> Bonuses
          </span>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        {breakdown.map((b) => (
          <Card key={b.label} className="p-4">
            <span className={`w-7 h-1.5 rounded-full mb-2 block ${b.tint}`} />
            <p className="text-[11px] font-semibold text-slate-400">{b.label}</p>
            <p className="text-lg font-heading font-extrabold text-slate-900 mt-0.5">{zwd(b.value)}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
function PerformanceSection() {
  const bars = [
    { label: 'On-time delivery', display: `${PERFORMANCE.onTimeRate}%`, value: PERFORMANCE.onTimeRate, color: 'bg-emerald-500' },
    { label: 'Customer rating', display: `★ ${DRIVER.rating}`, value: (DRIVER.rating / 5) * 100, color: 'bg-popees-pink' },
  ];
  const stats = [
    { label: 'Deliveries / week', value: PERFORMANCE.deliveriesWeek },
    { label: 'Deliveries / month', value: PERFORMANCE.deliveriesMonth },
    { label: 'Distance / week', value: `${PERFORMANCE.distanceWeek} km` },
    { label: 'Distance / month', value: `${PERFORMANCE.distanceMonth} km` },
    { label: 'Late deliveries', value: PERFORMANCE.lateDeliveries },
    { label: 'Lifetime deliveries', value: DRIVER.totalDeliveries },
  ];
  return (
    <>
      <SectionTitle icon="gauge" title="Performance" />
      <Card className="p-5 mb-4">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-2xl bg-popees-pink text-white flex flex-col items-center justify-center">
            <span className="text-2xl font-heading font-extrabold leading-none">{DRIVER.rating}</span>
            <Icon name="star" className="w-3 h-3 mt-0.5" />
          </div>
          <div>
            <p className="font-heading font-bold text-slate-800 text-sm">Great job, {DRIVER.name.split(' ')[0]}!</p>
            <p className="text-xs text-slate-500">You're in the top 8% of drivers this week.</p>
          </div>
        </div>
        <div className="space-y-4">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-slate-600">{b.label}</span>
                <span className="font-bold text-slate-800">{b.display}</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <p className="text-2xl font-heading font-extrabold text-slate-900">{s.value}</p>
            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">{s.label}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
function HistorySection() {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | 'delivered' | 'delayed' | 'failed'>('all');
  const rows = HISTORY.filter((r) => {
    const matchQ = (r.customer + r.id + r.area).toLowerCase().includes(q.toLowerCase());
    const matchS = status === 'all' || r.status === status;
    return matchQ && matchS;
  });
  const total = rows.reduce((s, r) => s + r.earnings, 0);
  const statuses: ('all' | 'delivered' | 'delayed' | 'failed')[] = ['all', 'delivered', 'delayed', 'failed'];
  return (
    <>
      <SectionTitle
        icon="clock"
        title="Delivery History"
        right={<span className="text-xs font-bold text-slate-500">{rows.length} · {zwd(total)}</span>}
      />
      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <div className="flex items-center gap-2 flex-1 bg-white rounded-xl border border-slate-100 px-3 py-2">
          <Icon name="search" className="w-4 h-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by customer, order or area…"
            className="flex-1 text-sm bg-transparent outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-2 rounded-xl text-xs font-bold capitalize whitespace-nowrap ${
                status === s ? 'text-white bg-popees-pink' : 'text-slate-500 bg-white border border-slate-100'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <Card className="overflow-hidden">
        <div className="hidden sm:grid grid-cols-[1fr_1fr_90px_90px] gap-2 px-4 py-2.5 bg-slate-50 text-[10px] font-bold uppercase tracking-wide text-slate-400">
          <span>Customer</span>
          <span>Date</span>
          <span>Status</span>
          <span className="text-right">Earnings</span>
        </div>
        <div className="divide-y divide-slate-50">
          {rows.map((r) => (
            <div key={r.id} className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_90px_90px] gap-2 px-4 py-3 items-center">
              <div>
                <p className="text-xs font-bold text-slate-800">{r.customer}</p>
                <p className="text-[10px] text-slate-400">
                  {r.id} · {r.area}
                </p>
              </div>
              <p className="text-xs text-slate-500">
                <span className="sm:hidden font-semibold text-slate-400">Date: </span>
                {r.date} · {r.time}
              </p>
              <span
                className={`justify-self-start text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                  r.status === 'delivered'
                    ? 'bg-emerald-50 text-emerald-700'
                    : r.status === 'delayed'
                    ? 'bg-amber-50 text-amber-700'
                    : 'bg-rose-50 text-rose-600'
                }`}
              >
                {r.status}
              </span>
              <p className="text-right text-xs font-bold text-slate-800">{r.earnings > 0 ? zwd(r.earnings) : '—'}</p>
            </div>
          ))}
          {rows.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-slate-400">No deliveries match your search.</p>
          )}
        </div>
      </Card>
    </>
  );
}

function SupportSection() {
  const items = [
    { icon: 'phone', title: 'Call Dispatch', sub: 'Available 24/7', href: 'tel:+9118004190400' },
    { icon: 'help', title: 'Support Chat', sub: 'Avg. reply under 2 min', href: '#' },
    { icon: 'alert', title: 'Report an Issue', sub: 'Flag a delivery problem', href: '#' },
    { icon: 'shield', title: 'Safety Helpline', sub: 'Report an emergency', href: '#' },
  ];
  return (
    <>
      <SectionTitle icon="help" title="Support & Help" />
      <Card className="p-5 mb-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <p className="font-heading font-bold text-lg">Need a hand on the road?</p>
        <p className="text-sm text-slate-300 mt-1">Our dispatch and support teams are here around the clock.</p>
        <a
          href="tel:+9118004190400"
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white bg-popees-pink px-4 py-2.5 rounded-xl hover:bg-popees-pink-hover transition-colors"
        >
          <Icon name="phone" className="w-4 h-4" /> Call Dispatch now
        </a>
      </Card>
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <a key={it.title} href={it.href} className="block">
            <Card className="p-4 flex items-center gap-3 hover:border-popees-pink/40 transition-colors">
              <span className="w-10 h-10 rounded-xl bg-popees-pink/10 text-popees-pink flex items-center justify-center shrink-0">
                <Icon name={it.icon} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800">{it.title}</p>
                <p className="text-[11px] text-slate-400">{it.sub}</p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
function PodModal({ order, onClose }: { order: PickupOrder; onClose: () => void }) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [signature, setSignature] = useState(false);
  const [codConfirmed, setCodConfirmed] = useState(order.cod > 0);
  const [done, setDone] = useState(false);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <p className="font-heading font-bold text-sm">Proof of Delivery · {order.id}</p>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-popees-pink text-white flex items-center justify-center text-xs font-bold">
              {order.customer
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{order.customer}</p>
              <p className="text-[11px] text-slate-400">{order.address}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <Icon name="camera" className="w-4 h-4 text-popees-pink" /> Package photo
            </p>
            {photo ? (
              <div className="relative rounded-xl overflow-hidden border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt="Package" className="w-full h-40 object-cover" />
                <button
                  onClick={() => setPhoto(null)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 text-slate-600 shadow"
                >
                  <Icon name="x" className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 h-40 cursor-pointer hover:border-popees-pink/50 transition-colors">
                <Icon name="camera" className="w-8 h-8 text-slate-300" />
                <span className="text-xs text-slate-500">Tap to take a photo</span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setPhoto(URL.createObjectURL(f));
                  }}
                />
              </label>
            )}
          </div>

          <div>
            <p className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <Icon name="pen" className="w-4 h-4 text-popees-pink" /> Recipient signature
            </p>
            <button
              onClick={() => setSignature(!signature)}
              className={`w-full rounded-xl border-2 h-24 flex items-center justify-center gap-2 text-xs font-semibold transition-colors ${
                signature
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                  : 'border-dashed border-slate-200 text-slate-400 hover:border-popees-pink/50'
              }`}
            >
              {signature ? (
                <>
                  <Icon name="check" className="w-4 h-4" /> Signature captured — signed by {order.customer}
                </>
              ) : (
                <>
                  <Icon name="pen" /> Tap to capture signature
                </>
              )}
            </button>
          </div>

          {order.cod > 0 && (
            <label className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-800">
              <input
                type="checkbox"
                checked={codConfirmed}
                onChange={(e) => setCodConfirmed(e.target.checked)}
                className="w-4 h-4 accent-popees-pink"
              />
              <span>
                COD of <b>{zwd(order.cod)}</b> collected from customer.
              </span>
            </label>
          )}

          <button
            onClick={() => setDone(true)}
            disabled={!photo || !signature || (order.cod > 0 && !codConfirmed)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="check" className="w-4 h-4" /> Confirm delivery
          </button>
          {done && (
            <p className="text-center text-xs font-bold text-emerald-600">
              ✓ {order.id} marked as delivered. Earnings credited.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}








/* ============================ LOGIN SCREEN ============================ */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('driver@poopees.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#f6f3fa] font-body flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-popees-pink to-[#ff5870] p-6 text-white text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-heading font-extrabold mb-3">
              P
            </div>
            <h1 className="font-heading font-extrabold text-xl">Poopees Driver</h1>
            <p className="text-xs opacity-90 mt-0.5">Sign in to start your shift</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2">
                {error}
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@poopees.com"
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-popees-pink transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-popees-pink transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-popees-pink hover:bg-popees-pink-hover transition-colors"
            >
              Sign in
            </button>

            <p className="text-center text-[10px] text-slate-400">
              Demo login — any email &amp; password will work (mock auth)
            </p>
          </form>
        </div>
        <p className="text-center text-[11px] text-slate-400 mt-4">© 2026 Poopees Delivery · Driver Console</p>
      </div>
    </div>
  );
}


/* ============================ COUNTRY GATE ============================ */
function useCountry() {
  const [state, setState] = useState<{ country: string | null; loading: boolean }>({
    country: null,
    loading: true,
  });
  useEffect(() => {
    let cancelled = false;
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        setState({ country: d?.country_code || null, loading: false });
      })
      .catch(() => {
        if (!cancelled) setState({ country: null, loading: false });
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return state;
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#f6f3fa] font-body flex flex-col items-center justify-center p-4 text-slate-400">
      <div className="w-14 h-14 rounded-2xl bg-popees-pink text-white flex items-center justify-center text-2xl font-heading font-extrabold mb-4 animate-pulse">
        P
      </div>
      <p className="text-sm font-semibold">Checking your region…</p>
    </div>
  );
}

function RegionGate() {
  return (
    <div className="min-h-screen bg-[#f6f3fa] font-body flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden text-center">
        <div className="bg-gradient-to-br from-popees-pink to-[#ff5870] px-6 py-10 text-white">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-3">
            🌍
          </div>
          <h1 className="font-heading font-extrabold text-lg">Poopees Delivery</h1>
        </div>
        <div className="p-6">
          <h2 className="font-heading font-bold text-slate-800 text-base mb-2">
            Only available in {DELIVERY_COUNTRY_LABEL}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            The driver console is currently available only for {DELIVERY_COUNTRY_LABEL}.
            Please check back soon if you are in another region.
          </p>
          <a
            href="/"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white bg-popees-pink hover:bg-popees-pink-hover px-5 py-2.5 rounded-xl transition-colors"
          >
            Back to store
          </a>
        </div>
      </div>
    </div>
  );
}

