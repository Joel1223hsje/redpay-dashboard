"use client";

import { useState } from "react";
import {
  Home,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  Users,
  User,
  Bell,
  Menu,
  X,
  Copy,
  CheckCircle2,
  Clock3,
  History,
  Settings,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralCode = "REDPAY-DEMO";

  function copyCode() {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="page">
      <header className="mobileHeader">
        <button
          className="iconButton"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <div className="brand">
          <div className="logo">R</div>
          <span>REDPAY</span>
        </div>

        <button className="iconButton" aria-label="Notifications">
          <Bell size={21} />
        </button>
      </header>

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebarTop">
          <div className="brand">
            <div className="logo">R</div>
            <span>REDPAY</span>
          </div>

          <button className="closeMenu" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={23} />
          </button>
        </div>

        <nav>
          <a className="navItem active" href="#" aria-current="page">
            <Home size={19} />
            Dashboard
          </a>

          <a className="navItem" href="#">
            <Wallet size={19} />
            Wallet
          </a>

          <a className="navItem" href="#">
            <ArrowDownToLine size={19} />
            Deposit
          </a>

          <a className="navItem" href="#">
            <ArrowUpFromLine size={19} />
            Withdraw
          </a>

          <a className="navItem" href="#">
            <Users size={19} />
            Referrals
          </a>

          <a className="navItem" href="#">
            <History size={19} />
            Transactions
          </a>

          <a className="navItem" href="#">
            <User size={19} />
            Profile
          </a>

          <a className="navItem" href="#">
            <Settings size={19} />
            Settings
          </a>
        </nav>

        <button className="logout" aria-label="Log out">
          <LogOut size={18} />
          Log out
        </button>
      </aside>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      <section className="content">
        <div className="topbar">
          <div>
            <p className="smallText">Welcome back</p>
            <h1>Dashboard</h1>
          </div>

          <div className="profile">
            <button className="notification" aria-label="Notifications">
              <Bell size={20} />
              <span />
            </button>

            <div className="avatar">U</div>

            <div className="profileText">
              <strong>User</strong>
              <small>Account</small>
            </div>
          </div>
        </div>

        <div className="demoNotice">
          <CheckCircle2 size={20} />
          <div>
            <strong>Demo dashboard</strong>
            <p>
              Figures shown here are sample data and do not represent actual funds or transactions.
            </p>
          </div>
        </div>

        <section className="balanceCard">
          <div>
            <p>Total Balance</p>
            <h2>₦0.00</h2>
            <span>Available balance</span>
          </div>

          <div className="balanceIcon">
            <Wallet size={30} />
          </div>
        </section>

        <section className="quickActions">
          <button className="actionCard">
            <div className="actionIcon">
              <ArrowDownToLine />
            </div>
            <strong>Deposit</strong>
            <span>Add funds</span>
          </button>

          <button className="actionCard">
            <div className="actionIcon">
              <ArrowUpFromLine />
            </div>
            <strong>Withdraw</strong>
            <span>Withdraw funds</span>
          </button>

          <button className="actionCard">
            <div className="actionIcon">
              <Users />
            </div>
            <strong>Refer</strong>
            <span>Invite users</span>
          </button>
        </section>

        <div className="sectionTitle">
          <h2>Account Overview</h2>
        </div>

        <section className="stats">
          <div className="statCard">
            <div className="statIcon">
              <Wallet />
            </div>

            <div>
              <span>Deposits</span>
              <strong>₦0.00</strong>
            </div>
          </div>

          <div className="statCard">
            <div className="statIcon">
              <ArrowUpFromLine />
            </div>

            <div>
              <span>Withdrawals</span>
              <strong>₦0.00</strong>
            </div>
          </div>

          <div className="statCard">
            <div className="statIcon">
              <Users />
            </div>

            <div>
              <span>Referrals</span>
              <strong>0</strong>
            </div>
          </div>
        </section>

        <section className="referralCard">
          <div>
            <div className="referralIcon">
              <Users size={25} />
            </div>

            <h2>Referral Program</h2>

            <p>
              Invite people using your referral code and track your referral activity from your dashboard.
            </p>
          </div>

          <div className="codeBox">
            <span>Your referral code</span>

            <div className="codeRow">
              <strong>{referralCode}</strong>

              <button onClick={copyCode} aria-label="Copy referral code">
                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </section>

        <section className="transactions">
          <div className="sectionTitle">
            <h2>Recent Transactions</h2>

            <button className="viewAll">View all</button>
          </div>

          <div className="emptyState">
            <div className="emptyIcon">
              <Clock3 size={28} />
            </div>

            <h3>No transactions yet</h3>

            <p>Your transaction history will appear here when activity occurs.</p>
          </div>
        </section>

        <footer>
          <p>© 2026 RedPay. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}
