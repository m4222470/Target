import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
  TrendingUp, Users, ShoppingBag, Clock, Download,
  Share2, FileText, Package, BarChart2, Settings,
  LogOut, Home, ShoppingCart, Star, Bell, Search,
  ArrowUpRight, ArrowDownRight, ChevronDown, Menu, X,
  Zap, Globe, Activity, DollarSign
} from 'lucide-react';
import useAuthStore from '../store/authStore';
import { useLocation } from 'wouter';

/* ─────────────────────── DATA ─────────────────────── */
const trafficData = [
  { date: 'Oct 1', value: 22000 }, { date: 'Oct 3', value: 45000 },
  { date: 'Oct 6', value: 38000 }, { date: 'Oct 12', value: 60000 },
  { date: 'Oct 15', value: 52000 }, { date: 'Oct 20', value: 75000 },
  { date: 'Oct 25', value: 88000 }, { date: 'Oct 28', value: 95000 },
  { date: 'Oct 31', value: 100000 },
];
const salesByRegion = [
  { month: 'Jan', europe: 420, asia: 380, us: 210, me: 140 },
  { month: 'Feb', europe: 680, asia: 520, us: 340, me: 190 },
  { month: 'Mar', europe: 590, asia: 670, us: 280, me: 220 },
  { month: 'Apr', europe: 1200, asia: 880, us: 520, me: 310 },
  { month: 'May', europe: 760, asia: 720, us: 440, me: 260 },
  { month: 'Jun', europe: 890, asia: 810, us: 560, me: 340 },
  { month: 'Jul', europe: 980, asia: 920, us: 630, me: 410 },
  { month: 'Aug', europe: 1100, asia: 990, us: 720, me: 480 },
];
const demographicsData = [
  { name: 'Europe', value: 38, color: '#00f5ff' },
  { name: 'Asia', value: 31, color: '#7b61ff' },
  { name: 'Americas', value: 21, color: '#00ff9f' },
  { name: 'Middle East', value: 10, color: '#ff9f00' },
];
const serverLoadData = [
  { t: '0', v: 2 }, { t: '6', v: 3.5 }, { t: '12', v: 5.8 },
  { t: '18', v: 7.2 }, { t: '24', v: 4.1 }, { t: '30', v: 6.9 },
  { t: '34', v: 5.2 },
];
const revenueSparkline = [{ v: 40 }, { v: 70 }, { v: 50 }, { v: 90 }, { v: 75 }, { v: 110 }, { v: 95 }];
const userSparkline   = [{ v: 60 }, { v: 45 }, { v: 80 }, { v: 65 }, { v: 90 }, { v: 72 }, { v: 85 }];
const signupSparkline = [{ v: 90 }, { v: 70 }, { v: 55 }, { v: 80 }, { v: 60 }, { v: 45 }, { v: 50 }];
const sessionSparkline= [{ v: 55 }, { v: 60 }, { v: 58 }, { v: 62 }, { v: 59 }, { v: 64 }, { v: 61 }];
const transactions = [
  { id: '1005299', date: 'Oct 31 · 3:09', customer: 'Adam Hamm',       amount: '$4,850',  status: 'Closed' },
  { id: '1007365', date: 'Oct 31 · 3:04', customer: 'Sarah Al-Rashid', amount: '$12,400', status: 'Closed' },
  { id: '1005389', date: 'Oct 31 · 3:00', customer: 'Davin Smith',     amount: '$2,199',  status: 'Failed' },
  { id: '1000358', date: 'Oct 31 · 3:03', customer: 'Adam Jonier',     amount: '$7,600',  status: 'Closed' },
  { id: '1000438', date: 'Oct 31 · 3:00', customer: 'Julena Smith',    amount: '$3,290',  status: 'Closed' },
];
const navItems = [
  { icon: Home,        label: 'Overview',   href: '/admin',          active: true  },
  { icon: ShoppingCart,label: 'Orders',     href: '/admin/orders',   active: false },
  { icon: Package,     label: 'Products',   href: '/admin/products', active: false },
  { icon: Users,       label: 'Customers',  href: '/admin',          active: false },
  { icon: BarChart2,   label: 'Analytics',  href: '/admin/analytics',active: false },
  { icon: Star,        label: 'Reviews',    href: '/admin',          active: false },
  { icon: Settings,    label: 'Settings',   href: '/admin',          active: false },
];

/* ─────────────────────── STYLE TOKENS ─────────────────────── */
const S = {
  bg:      '#0b0f1a',
  bgCard:  'rgba(255,255,255,0.04)',
  border:  '1px solid rgba(255,255,255,0.08)',
  blur:    'blur(16px)',
  cyan:    '#00f5ff',
  purple:  '#7b61ff',
  green:   '#00ff9f',
  pink:    '#ff4d6d',
  amber:   '#ff9f00',
  textPri: '#ffffff',
  textSec: 'rgba(255,255,255,0.55)',
  textMut: 'rgba(255,255,255,0.3)',
};

/* ─────────────────────── TINY COMPONENTS ─────────────────────── */
const MiniSparkline = ({ data, color }: { data: { v: number }[]; color: string }) => (
  <div style={{ width: 72, height: 32, flexShrink: 0 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(11,15,26,0.97)', border: '1px solid rgba(0,245,255,0.25)',
      borderRadius: 10, padding: '8px 14px',
      boxShadow: '0 0 20px rgba(0,245,255,0.1)',
    }}>
      <p style={{ color: S.textSec, fontSize: 11, marginBottom: 4 }}>{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color, fontSize: 12, fontWeight: 700 }}>
          {p.name}: {typeof p.value === 'number' && p.value > 999 ? p.value.toLocaleString() : p.value}
        </p>
      ))}
    </div>
  );
};

/* glass card wrapper */
const GCard = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: S.bgCard,
    backdropFilter: S.blur,
    WebkitBackdropFilter: S.blur,
    borderRadius: 18,
    border: S.border,
    boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
    padding: 22,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    ...style,
  }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.45), 0 0 30px rgba(0,245,255,0.06)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.35)';
    }}
  >
    {children}
  </div>
);

/* ─────────────────────── INJECT CSS ─────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  .adm-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .adm-root { font-family: 'Inter', sans-serif; background: #0b0f1a; color: #fff; min-height: 100vh; }

  /* layout */
  .adm-layout { display: flex; min-height: 100vh; position: relative; }

  /* sidebar */
  .adm-sidebar {
    width: 240px; flex-shrink: 0;
    background: rgba(255,255,255,0.025);
    border-right: 1px solid rgba(255,255,255,0.06);
    display: flex; flex-direction: column;
    position: fixed; top: 0; left: 0; bottom: 0; z-index: 200;
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  .adm-sidebar.collapsed { transform: translateX(-100%); }

  /* overlay for mobile */
  .adm-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.6); z-index: 190;
    backdrop-filter: blur(4px);
  }
  .adm-overlay.show { display: block; }

  /* main content */
  .adm-main { flex: 1; margin-left: 240px; min-height: 100vh; display: flex; flex-direction: column; }

  /* nav item hover */
  .adm-nav-item { transition: all 0.2s ease !important; }
  .adm-nav-item:hover { background: rgba(0,245,255,0.07) !important; color: #00f5ff !important; border-left: 2px solid #00f5ff !important; padding-left: 14px !important; }

  /* stat card number */
  .adm-stat-val { font-size: clamp(22px, 4vw, 32px); font-weight: 900; line-height: 1.1; }

  /* grid helpers */
  .adm-kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px; margin-bottom: 20px;
  }
  .adm-charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-bottom: 20px;
  }
  .adm-bottom-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.85fr 0.85fr;
    gap: 16px;
  }

  /* scrollbar */
  .adm-main::-webkit-scrollbar { width: 4px; }
  .adm-main::-webkit-scrollbar-track { background: transparent; }
  .adm-main::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.2); border-radius: 99px; }

  /* table row hover */
  .adm-tr:hover td { background: rgba(0,245,255,0.03); }

  /* mobile toggle btn */
  .adm-menu-btn {
    display: none;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; padding: 7px 10px;
    cursor: pointer; color: #fff; align-items: center; justify-content: center;
  }

  /* ── TABLET (≤ 1024px) ── */
  @media (max-width: 1024px) {
    .adm-sidebar { transform: translateX(-100%); }
    .adm-sidebar.open { transform: translateX(0); }
    .adm-main { margin-left: 0; }
    .adm-menu-btn { display: flex; }
    .adm-bottom-grid { grid-template-columns: 1fr 1fr; }
    .adm-bottom-grid > *:last-child { grid-column: 1 / -1; }
  }

  /* ── SMALL TABLET (≤ 768px) ── */
  @media (max-width: 768px) {
    .adm-kpi-grid { grid-template-columns: repeat(2, 1fr); }
    .adm-charts-grid { grid-template-columns: 1fr; }
    .adm-bottom-grid { grid-template-columns: 1fr; }
    .adm-bottom-grid > *:last-child { grid-column: auto; }
    .adm-tx-date, .adm-tx-id { display: none; }
    .adm-header-exports { display: none; }
    .adm-header-date { display: none; }
  }

  /* ── MOBILE (≤ 480px) ── */
  @media (max-width: 480px) {
    .adm-kpi-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .adm-pad { padding: 14px 14px; }
  }

  /* glow pulse on active metric */
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 8px rgba(0,245,255,0.2), 0 8px 32px rgba(0,0,0,0.35); }
    50%       { box-shadow: 0 0 20px rgba(0,245,255,0.4), 0 8px 32px rgba(0,0,0,0.35); }
  }
  .adm-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }

  /* neon badge blink */
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
  .adm-live-dot { animation: blink 1.8s ease-in-out infinite; }
`;

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
export default function AdminAnalyticsPage() {
  const { user, logout } = useAuthStore();
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange] = useState('Oct 1, 2023 – Oct 31, 2023');

  /* close sidebar on resize to desktop */
  useEffect(() => {
    const handle = () => { if (window.innerWidth > 1024) setSidebarOpen(false); };
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <div className="adm-root">

        {/* Mobile overlay */}
        <div className={`adm-overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)} />

        <div className="adm-layout">

          {/* ═══════════════ SIDEBAR ═══════════════ */}
          <aside className={`adm-sidebar ${sidebarOpen ? 'open' : ''}`}>

            {/* Logo */}
            <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" onClick={() => setSidebarOpen(false)}>
                  <span style={{ fontWeight: 900, fontSize: 17, letterSpacing: '0.08em', cursor: 'pointer', display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                    <span style={{ color: S.cyan, textShadow: '0 0 12px rgba(0,245,255,0.5)' }}>AURUM</span>
                    <span style={{ color: S.purple, fontSize: 11, letterSpacing: '0.25em', fontWeight: 700 }}>& CO. ADMIN</span>
                  </span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  style={{ display: 'none', background: 'none', border: 'none', color: S.textSec, cursor: 'pointer', padding: 4 }}
                  className="adm-menu-close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Online indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
                <span className="adm-live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: S.green, display: 'inline-block', boxShadow: `0 0 8px ${S.green}` }} />
                <span style={{ fontSize: 10, color: S.textSec, letterSpacing: '0.15em' }}>SYSTEM ONLINE</span>
              </div>
            </div>

            {/* Nav */}
            <nav style={{ flex: 1, padding: '14px 10px', overflowY: 'auto' }}>
              <p style={{ fontSize: 9, letterSpacing: '0.2em', color: S.textMut, padding: '0 10px', marginBottom: 8, fontWeight: 700 }}>NAVIGATION</p>
              {navItems.map(item => (
                <Link key={item.label} href={item.href} onClick={() => setSidebarOpen(false)}>
                  <div className="adm-nav-item" style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 12px', borderRadius: 11, marginBottom: 3, cursor: 'pointer',
                    background: item.active
                      ? 'linear-gradient(135deg, rgba(0,245,255,0.12), rgba(123,97,255,0.12))'
                      : 'transparent',
                    borderLeft: item.active ? `2px solid ${S.cyan}` : '2px solid transparent',
                    color: item.active ? S.cyan : S.textSec,
                    boxShadow: item.active ? `0 0 16px rgba(0,245,255,0.08)` : 'none',
                  }}>
                    <item.icon size={15} />
                    <span style={{ fontSize: 13, fontWeight: item.active ? 700 : 400 }}>{item.label}</span>
                    {item.active && (
                      <span style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: S.cyan, boxShadow: `0 0 8px ${S.cyan}` }} />
                    )}
                  </div>
                </Link>
              ))}

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '12px 10px' }} />
              <p style={{ fontSize: 9, letterSpacing: '0.2em', color: S.textMut, padding: '0 10px', marginBottom: 8, fontWeight: 700 }}>QUICK STATS</p>

              {/* Mini stats in sidebar */}
              {[
                { label: 'Revenue Today', val: '$18,450', col: S.cyan },
                { label: 'Pending Orders', val: '23', col: S.amber },
                { label: 'Active Sessions', val: '1,204', col: S.green },
              ].map(s => (
                <div key={s.label} style={{
                  margin: '4px 4px', padding: '10px 12px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <p style={{ fontSize: 10, color: S.textSec, marginBottom: 3 }}>{s.label}</p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: s.col, textShadow: `0 0 10px ${s.col}50` }}>{s.val}</p>
                </div>
              ))}
            </nav>

            {/* User footer */}
            <div style={{ padding: '14px 14px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #00f5ff, #7b61ff)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 800,
                  boxShadow: '0 0 14px rgba(0,245,255,0.4)',
                }}>A</div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700 }}>{user?.name ?? 'Admin'}</p>
                  <p style={{ fontSize: 10, color: S.cyan }}>● Administrator</p>
                </div>
              </div>
              <button
                onClick={() => { logout(); setLocation('/login'); }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                  padding: '9px', borderRadius: 10,
                  background: 'rgba(255,77,109,0.08)', border: '1px solid rgba(255,77,109,0.2)',
                  color: S.pink, cursor: 'pointer', fontSize: 12, fontWeight: 700,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,77,109,0.18)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 16px rgba(255,77,109,0.2)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,77,109,0.08)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
              >
                <LogOut size={13} /> Sign Out
              </button>
            </div>
          </aside>

          {/* ═══════════════ MAIN ═══════════════ */}
          <main className="adm-main" style={{ overflowY: 'auto' }}>

            {/* ── TOP NAVBAR ── */}
            <header style={{
              padding: '14px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(11,15,26,0.85)', backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              position: 'sticky', top: 0, zIndex: 100,
              gap: 12,
            }}>
              {/* Left: hamburger + date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button
                  className="adm-menu-btn"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu size={18} />
                </button>

                <div className="adm-header-date" style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 9, padding: '7px 12px', fontSize: 12, color: S.textSec, cursor: 'pointer',
                }}>
                  <Clock size={12} />
                  <span>{dateRange}</span>
                  <ChevronDown size={12} />
                </div>
              </div>

              {/* Center: search */}
              <div style={{
                flex: 1, maxWidth: 340,
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 10, padding: '8px 14px',
              }}>
                <Search size={13} color={S.textMut} />
                <input
                  placeholder="Search orders, customers…"
                  style={{
                    background: 'none', border: 'none', outline: 'none',
                    color: '#fff', fontSize: 12, width: '100%',
                    '::placeholder': { color: S.textMut },
                  } as any}
                />
              </div>

              {/* Right: export + bell */}
              <div className="adm-header-exports" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 11, color: S.textMut }}>Export:</span>
                {[
                  { label: 'PDF', icon: <FileText size={11} /> },
                  { label: 'CSV', icon: <Download size={11} /> },
                  { label: 'Share', icon: <Share2 size={11} /> },
                ].map(b => (
                  <button key={b.label} style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '6px 12px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                    color: S.textSec, cursor: 'pointer', fontSize: 11, fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,245,255,0.3)'; (e.currentTarget as HTMLButtonElement).style.color = S.cyan; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLButtonElement).style.color = S.textSec; }}
                  >
                    {b.icon} {b.label}
                  </button>
                ))}
                <div style={{ position: 'relative', marginLeft: 4 }}>
                  <Bell size={17} color={S.textSec} style={{ cursor: 'pointer' }} />
                  <span style={{
                    position: 'absolute', top: -3, right: -3, width: 8, height: 8,
                    background: S.pink, borderRadius: '50%',
                    boxShadow: `0 0 8px ${S.pink}`,
                  }} />
                </div>
              </div>

              {/* Mobile: bell only */}
              <div style={{ display: 'none' }} className="adm-bell-mobile">
                <div style={{ position: 'relative' }}>
                  <Bell size={17} color={S.textSec} style={{ cursor: 'pointer' }} />
                  <span style={{ position: 'absolute', top: -3, right: -3, width: 8, height: 8, background: S.pink, borderRadius: '50%' }} />
                </div>
              </div>
            </header>

            {/* ── PAGE CONTENT ── */}
            <div className="adm-pad" style={{ padding: '22px 24px', flex: 1 }}>

              {/* Page title */}
              <div style={{ marginBottom: 22, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <h1 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                    Dashboard <span style={{ color: S.cyan, textShadow: `0 0 16px ${S.cyan}60` }}>Overview</span>
                  </h1>
                  <p style={{ fontSize: 12, color: S.textSec, marginTop: 3 }}>
                    Welcome back, <span style={{ color: S.textPri, fontWeight: 600 }}>{user?.name ?? 'Admin'}</span> — Here's what's happening today.
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'rgba(0,255,159,0.08)', border: '1px solid rgba(0,255,159,0.2)',
                  borderRadius: 99, padding: '5px 12px',
                }}>
                  <span className="adm-live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: S.green, boxShadow: `0 0 6px ${S.green}` }} />
                  <span style={{ fontSize: 11, color: S.green, fontWeight: 700, letterSpacing: '0.05em' }}>LIVE</span>
                </div>
              </div>

              {/* ── KPI CARDS ── */}
              <div className="adm-kpi-grid">
                {[
                  { label: 'Total Revenue',  value: '$1.2M',  change: '+12.5%', up: true,  color: S.cyan,   icon: DollarSign, spark: revenueSparkline },
                  { label: 'Active Users',   value: '85,400', change: '+5.2%',  up: true,  color: S.purple, icon: Users,      spark: userSparkline   },
                  { label: 'New Signups',    value: '12,300', change: '-1.8%',  up: false, color: S.pink,   icon: Zap,        spark: signupSparkline  },
                  { label: 'Avg. Session',   value: '4m 32s', change: '+0.5%',  up: true,  color: S.green,  icon: Activity,   spark: sessionSparkline },
                ].map((card, i) => (
                  <div key={card.label} className={i === 0 ? 'adm-glow-pulse' : ''} style={{
                    background: S.bgCard,
                    backdropFilter: S.blur, WebkitBackdropFilter: S.blur,
                    borderRadius: 18, padding: '18px 20px',
                    border: `1px solid ${card.color}20`,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)`,
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                    position: 'relative', overflow: 'hidden',
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'translateY(-5px) scale(1.01)';
                      el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.5), 0 0 30px ${card.color}25`;
                      el.style.borderColor = `${card.color}40`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'translateY(0) scale(1)';
                      el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)`;
                      el.style.borderColor = `${card.color}20`;
                    }}
                  >
                    {/* Background accent glow */}
                    <div style={{
                      position: 'absolute', top: -20, right: -20, width: 80, height: 80,
                      borderRadius: '50%', background: card.color, opacity: 0.05, filter: 'blur(20px)',
                    }} />

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                      <p style={{ fontSize: 11, color: S.textSec, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{card.label}</p>
                      <div style={{
                        width: 30, height: 30, borderRadius: 9,
                        background: `${card.color}18`, border: `1px solid ${card.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <card.icon size={14} color={card.color} />
                      </div>
                    </div>

                    {/* Value + sparkline */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                      <div>
                        <p className="adm-stat-val" style={{ color: '#fff', marginBottom: 6 }}>{card.value}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <div style={{
                            width: 18, height: 18, borderRadius: '50%',
                            background: card.up ? 'rgba(0,255,159,0.12)' : 'rgba(255,77,109,0.12)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {card.up
                              ? <ArrowUpRight size={10} color={S.green} />
                              : <ArrowDownRight size={10} color={S.pink} />}
                          </div>
                          <span style={{ fontSize: 12, fontWeight: 700, color: card.up ? S.green : S.pink }}>
                            {card.change}
                          </span>
                          <span style={{ fontSize: 10, color: S.textMut }}>vs last mo.</span>
                        </div>
                      </div>
                      <MiniSparkline data={card.spark} color={card.color} />
                    </div>
                  </div>
                ))}
              </div>

              {/* ── CHARTS ROW ── */}
              <div className="adm-charts-grid">

                {/* Traffic chart */}
                <GCard>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 14 }}>Website Traffic</p>
                      <p style={{ fontSize: 11, color: S.textSec, marginTop: 2 }}>Last 30 days</p>
                    </div>
                    <span style={{
                      fontSize: 10, color: S.cyan, fontWeight: 700, letterSpacing: '0.08em',
                      background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)',
                      padding: '4px 10px', borderRadius: 99,
                      display: 'flex', alignItems: 'center', gap: 5,
                    }}>
                      <span className="adm-live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: S.cyan }} />
                      LIVE
                    </span>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={trafficData}>
                      <defs>
                        <linearGradient id="tGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor="#00f5ff" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#00f5ff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                      <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="value" name="Visitors" stroke="#00f5ff" strokeWidth={2.5} fill="url(#tGrad)" style={{ filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.4))' }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </GCard>

                {/* Sales by Region */}
                <GCard>
                  <div style={{ marginBottom: 18 }}>
                    <p style={{ fontWeight: 800, fontSize: 14 }}>Sales by Region</p>
                    <p style={{ fontSize: 11, color: S.textSec, marginTop: 2 }}>Jan – Aug 2024</p>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={salesByRegion} barSize={7} barGap={1}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                      <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend iconType="circle" iconSize={7} wrapperStyle={{ fontSize: 10, color: '#94a3b8', paddingTop: 8 }} />
                      <Bar dataKey="europe"  name="Europe"      fill="#00f5ff" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="asia"    name="Asia"        fill="#7b61ff" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="us"      name="Americas"    fill="#00ff9f" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="me"      name="Middle East" fill="#ff9f00" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </GCard>
              </div>

              {/* ── BOTTOM ROW ── */}
              <div className="adm-bottom-grid">

                {/* Recent Transactions */}
                <GCard style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ padding: '18px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 14 }}>Recent Transactions</p>
                      <p style={{ fontSize: 11, color: S.textSec, marginTop: 2 }}>Latest 5 orders</p>
                    </div>
                    <Link href="/admin/orders">
                      <span style={{ fontSize: 11, color: S.cyan, cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                        View all <ArrowUpRight size={11} />
                      </span>
                    </Link>
                  </div>

                  {/* Table */}
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          {[
                            { label: 'ID',       cls: 'adm-tx-id'   },
                            { label: 'Date',     cls: 'adm-tx-date' },
                            { label: 'Customer', cls: ''             },
                            { label: 'Amount',   cls: ''             },
                            { label: 'Status',   cls: ''             },
                          ].map(h => (
                            <th key={h.label} className={h.cls} style={{
                              textAlign: 'left', fontSize: 10, color: S.textMut,
                              fontWeight: 700, letterSpacing: '0.1em',
                              padding: '10px 20px', textTransform: 'uppercase',
                            }}>{h.label}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map(t => (
                          <tr key={t.id} className="adm-tr" style={{ transition: 'background 0.15s' }}>
                            <td className="adm-tx-id" style={{ padding: '11px 20px', fontSize: 11, color: S.textSec, fontFamily: 'monospace', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>{t.id}</td>
                            <td className="adm-tx-date" style={{ padding: '11px 20px', fontSize: 11, color: S.textMut, whiteSpace: 'nowrap', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>{t.date}</td>
                            <td style={{ padding: '11px 20px', fontSize: 12, color: '#e2e8f0', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.03)' }}>{t.customer}</td>
                            <td style={{ padding: '11px 20px', fontSize: 12, color: S.cyan, fontWeight: 800, fontFamily: 'monospace', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>{t.amount}</td>
                            <td style={{ padding: '11px 20px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                              <span style={{
                                fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 99,
                                background: t.status === 'Failed' ? 'rgba(255,77,109,0.12)' : 'rgba(0,255,159,0.1)',
                                color: t.status === 'Failed' ? S.pink : S.green,
                                border: `1px solid ${t.status === 'Failed' ? 'rgba(255,77,109,0.3)' : 'rgba(0,255,159,0.25)'}`,
                                letterSpacing: '0.05em',
                              }}>{t.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GCard>

                {/* Demographics */}
                <GCard>
                  <p style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>User Demographics</p>
                  <p style={{ fontSize: 11, color: S.textSec, marginBottom: 16 }}>By region</p>
                  <ResponsiveContainer width="100%" height={155}>
                    <PieChart>
                      <Pie data={demographicsData} cx="50%" cy="50%" innerRadius={44} outerRadius={68} dataKey="value" strokeWidth={0} paddingAngle={3}>
                        {demographicsData.map((e, i) => <Cell key={i} fill={e.color} style={{ filter: `drop-shadow(0 0 6px ${e.color}60)` }} />)}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
                    {demographicsData.map(d => (
                      <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, boxShadow: `0 0 6px ${d.color}`, flexShrink: 0 }} />
                        <span style={{ fontSize: 10, color: S.textSec }}>
                          {d.name}
                          <strong style={{ color: d.color, marginLeft: 4 }}>{d.value}%</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                </GCard>

                {/* Server Load */}
                <GCard>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <p style={{ fontWeight: 800, fontSize: 14 }}>Server Load</p>
                    <span style={{ fontSize: 10, color: S.green, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span className="adm-live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: S.green, boxShadow: `0 0 6px ${S.green}` }} />
                      Healthy
                    </span>
                  </div>
                  <p style={{ fontSize: 11, color: S.textSec, marginBottom: 14 }}>Real-time metrics</p>
                  <ResponsiveContainer width="100%" height={100}>
                    <AreaChart data={serverLoadData}>
                      <defs>
                        <linearGradient id="sGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor="#7b61ff" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="#7b61ff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                      <XAxis dataKey="t" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} domain={[0, 10]} />
                      <Area type="monotone" dataKey="v" name="Load" stroke="#7b61ff" strokeWidth={2.5} fill="url(#sGrad)" style={{ filter: 'drop-shadow(0 0 5px rgba(123,97,255,0.5))' }} />
                    </AreaChart>
                  </ResponsiveContainer>

                  {/* System metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
                    {[
                      { l: 'CPU', v: '42%', c: S.cyan, w: 42 },
                      { l: 'RAM', v: '67%', c: S.purple, w: 67 },
                      { l: 'Uptime', v: '99.9%', c: S.green, w: 99 },
                      { l: 'Latency', v: '12ms', c: S.amber, w: 20 },
                    ].map(m => (
                      <div key={m.l}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <p style={{ fontSize: 9, color: S.textMut, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.l}</p>
                          <p style={{ fontSize: 11, fontWeight: 800, color: m.c, textShadow: `0 0 8px ${m.c}70` }}>{m.v}</p>
                        </div>
                        <div style={{ height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${m.w}%`, background: m.c, borderRadius: 99, boxShadow: `0 0 8px ${m.c}` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </GCard>
              </div>

              {/* Bottom padding */}
              <div style={{ height: 32 }} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
