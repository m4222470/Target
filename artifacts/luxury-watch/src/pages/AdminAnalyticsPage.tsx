import { useState } from 'react';
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
  ArrowUpRight, ArrowDownRight, ChevronDown
} from 'lucide-react';
import useAuthStore from '../store/authStore';
import { useLocation } from 'wouter';

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

const revenueSparkline = [
  { v: 40 }, { v: 70 }, { v: 50 }, { v: 90 }, { v: 75 }, { v: 110 }, { v: 95 },
];

const userSparkline = [
  { v: 60 }, { v: 45 }, { v: 80 }, { v: 65 }, { v: 90 }, { v: 72 }, { v: 85 },
];

const signupSparkline = [
  { v: 90 }, { v: 70 }, { v: 55 }, { v: 80 }, { v: 60 }, { v: 45 }, { v: 50 },
];

const sessionSparkline = [
  { v: 55 }, { v: 60 }, { v: 58 }, { v: 62 }, { v: 59 }, { v: 64 }, { v: 61 },
];

const transactions = [
  { id: '1005299', date: 'Oct 31, 2023  3:09', customer: 'Adam Hamm', amount: '$4,850', status: 'Closed' },
  { id: '1007365', date: 'Oct 31, 2023  3:04', customer: 'Sarah Al-Rashid', amount: '$12,400', status: 'Closed' },
  { id: '1005389', date: 'Oct 31, 2023  3:00', customer: 'Davin Smith', amount: '$2,199', status: 'Failed' },
  { id: '1000358', date: 'Oct 31, 2023  3:03', customer: 'Adam Jonier', amount: '$7,600', status: 'Closed' },
  { id: '1000438', date: 'Oct 31, 2023  3:00', customer: 'Julena Smith', amount: '$3,290', status: 'Closed' },
];

const navItems = [
  { icon: Home, label: 'Overview', href: '/admin/analytics', active: true },
  { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
  { icon: Package, label: 'Products', href: '/admin/products' },
  { icon: Users, label: 'Customers', href: '/admin' },
  { icon: BarChart2, label: 'Analytics', href: '/admin/analytics' },
  { icon: Star, label: 'Reviews', href: '/admin' },
  { icon: Settings, label: 'Settings', href: '/admin' },
];

const MiniSparkline = ({ data, color }: { data: { v: number }[]; color: string }) => (
  <ResponsiveContainer width={80} height={32}>
    <LineChart data={data}>
      <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'rgba(11,15,26,0.95)', border: '1px solid rgba(0,245,255,0.2)', borderRadius: 8, padding: '8px 12px' }}>
        <p style={{ color: '#94a3b8', fontSize: 11, marginBottom: 4 }}>{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color, fontSize: 12, fontWeight: 600 }}>{p.name}: {typeof p.value === 'number' && p.value > 1000 ? p.value.toLocaleString() : p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

export default function AdminAnalyticsPage() {
  const { user, logout } = useAuthStore();
  const [, setLocation] = useLocation();
  const [dateRange] = useState('Oct 1, 2023 – Oct 31, 2023');


  return (
    <div style={{ minHeight: '100vh', background: '#0b0f1a', display: 'flex', fontFamily: "'Inter', sans-serif", color: '#fff' }}>

      {/* Sidebar */}
      <aside style={{ width: 220, background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
        <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/">
            <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '0.1em', cursor: 'pointer' }}>
              <span style={{ color: '#00f5ff' }}>AURUM</span>
              <span style={{ color: '#7b61ff' }}> & CO.</span>
            </span>
          </Link>
          <p style={{ fontSize: 10, color: '#64748b', marginTop: 4, letterSpacing: '0.2em' }}>ADMIN CONSOLE</p>
        </div>

        <nav style={{ flex: 1, padding: '16px 12px' }}>
          {navItems.map(item => (
            <Link key={item.label} href={item.href}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, marginBottom: 4, cursor: 'pointer',
                background: item.active ? 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,97,255,0.15))' : 'transparent',
                border: item.active ? '1px solid rgba(0,245,255,0.2)' : '1px solid transparent',
                color: item.active ? '#00f5ff' : '#64748b',
                transition: 'all 0.2s',
              }}>
                <item.icon size={15} />
                <span style={{ fontSize: 13, fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #00f5ff, #7b61ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>A</div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600 }}>{user?.name ?? 'Admin'}</p>
              <p style={{ fontSize: 10, color: '#64748b' }}>Administrator</p>
            </div>
          </div>
          <button onClick={() => { logout(); setLocation('/login'); }} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8, background: 'rgba(255,77,109,0.1)', border: '1px solid rgba(255,77,109,0.2)', color: '#ff4d6d', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>
            <LogOut size={13} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, overflow: 'auto' }}>

        {/* Top bar */}
        <header style={{ padding: '16px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#94a3b8', cursor: 'pointer' }}>
              <Clock size={13} />
              <span>{dateRange}</span>
              <ChevronDown size={13} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 12, color: '#64748b' }}>Export:</span>
            {['PDF', 'CSV'].map(t => (
              <button key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 7, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', cursor: 'pointer', fontSize: 11, fontWeight: 600 }}>
                {t === 'PDF' ? <FileText size={12} /> : <Download size={12} />} {t}
              </button>
            ))}
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 7, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', cursor: 'pointer', fontSize: 11, fontWeight: 600 }}>
              <Share2 size={12} /> Share
            </button>
            <div style={{ position: 'relative' }}>
              <Bell size={18} color="#64748b" style={{ cursor: 'pointer' }} />
              <span style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, background: '#ff4d6d', borderRadius: '50%' }} />
            </div>
          </div>
        </header>

        <div style={{ padding: '24px 28px' }}>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
            {[
              { label: 'Total Revenue', value: '$1.2M', change: '+12.5%', up: true, color: '#00f5ff', spark: revenueSparkline },
              { label: 'Active Users', value: '85,400', change: '+5.2%', up: true, color: '#7b61ff', spark: userSparkline },
              { label: 'New Signups', value: '12,300', change: '-1.8%', up: false, color: '#ff4d6d', spark: signupSparkline },
              { label: 'Avg. Session', value: '4m 32s', change: '+0.5%', up: true, color: '#00ff9f', spark: sessionSparkline },
            ].map(card => (
              <div key={card.label} style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(10px)',
                boxShadow: `0 0 20px ${card.color}15`,
              }}>
                <p style={{ fontSize: 11, color: '#64748b', marginBottom: 8, fontWeight: 600, letterSpacing: '0.05em' }}>{card.label}</p>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{card.value}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                      {card.up ? <ArrowUpRight size={13} color="#00ff9f" /> : <ArrowDownRight size={13} color="#ff4d6d" />}
                      <span style={{ fontSize: 11, fontWeight: 600, color: card.up ? '#00ff9f' : '#ff4d6d' }}>{card.change}</span>
                    </div>
                  </div>
                  <MiniSparkline data={card.spark} color={card.color} />
                </div>
              </div>
            ))}
          </div>

          {/* Traffic + Sales by Region */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

            {/* Traffic chart */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <p style={{ fontWeight: 700, fontSize: 14 }}>Website Traffic (Last 30 Days)</p>
                <span style={{ fontSize: 11, color: '#00f5ff', background: 'rgba(0,245,255,0.1)', padding: '3px 8px', borderRadius: 6 }}>Live</span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00f5ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => v >= 1000 ? `${v / 1000}k` : v} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="value" name="Visitors" stroke="#00f5ff" strokeWidth={2} fill="url(#trafficGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Sales by Region */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Sales by Region</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={salesByRegion} barSize={8} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
                  <Bar dataKey="europe" name="Europe" fill="#00f5ff" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="asia" name="Asia" fill="#7b61ff" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="us" name="Americas" fill="#00ff9f" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="me" name="Middle East" fill="#ff9f00" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transactions + Demographics + Server Load */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 0.8fr', gap: 16 }}>

            {/* Recent Transactions */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Recent Transactions</p>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['ID', 'Date', 'Customer', 'Amount', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left', fontSize: 10, color: '#64748b', fontWeight: 700, letterSpacing: '0.08em', paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(t => (
                    <tr key={t.id}>
                      <td style={{ padding: '9px 0', fontSize: 11, color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{t.id}</td>
                      <td style={{ padding: '9px 8px 9px 0', fontSize: 11, color: '#64748b', borderBottom: '1px solid rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>{t.date}</td>
                      <td style={{ padding: '9px 8px 9px 0', fontSize: 11, color: '#e2e8f0', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{t.customer}</td>
                      <td style={{ padding: '9px 8px 9px 0', fontSize: 11, color: '#00f5ff', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{t.amount}</td>
                      <td style={{ padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 20,
                          background: t.status === 'Failed' ? 'rgba(255,77,109,0.15)' : 'rgba(0,255,159,0.12)',
                          color: t.status === 'Failed' ? '#ff4d6d' : '#00ff9f',
                          border: `1px solid ${t.status === 'Failed' ? 'rgba(255,77,109,0.3)' : 'rgba(0,255,159,0.3)'}`,
                        }}>{t.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Demographics */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>User Demographics</p>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={demographicsData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={0}>
                    {demographicsData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 8 }}>
                {demographicsData.map(d => (
                  <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 10, color: '#94a3b8' }}>{d.name} <strong style={{ color: d.color }}>{d.value}%</strong></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Load */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <p style={{ fontWeight: 700, fontSize: 14 }}>Server Load</p>
                <span style={{ fontSize: 10, color: '#00ff9f', fontWeight: 700 }}>● Healthy</span>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={serverLoadData}>
                  <defs>
                    <linearGradient id="serverGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7b61ff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#7b61ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="t" tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} domain={[0, 10]} />
                  <Area type="monotone" dataKey="v" name="Load" stroke="#7b61ff" strokeWidth={2} fill="url(#serverGrad)" />
                </AreaChart>
              </ResponsiveContainer>
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[{ l: 'CPU', v: '42%', c: '#00f5ff' }, { l: 'RAM', v: '67%', c: '#7b61ff' }, { l: 'Uptime', v: '99.9%', c: '#00ff9f' }, { l: 'Latency', v: '12ms', c: '#ff9f00' }].map(m => (
                  <div key={m.l}>
                    <p style={{ fontSize: 9, color: '#64748b', marginBottom: 2 }}>{m.l}</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: m.c }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
